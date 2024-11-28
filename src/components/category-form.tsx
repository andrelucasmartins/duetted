"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

import { useToast } from "@/hooks/use-toast"
import { categoryService } from "@/services/category-service"
import { Suspense, useEffect, useState } from "react"
import { Badge } from "./ui/badge"

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
})



export function CategoryForm() {
  const [categories, setCategories] = useState([]);
  const [editingId, setEditingId] = useState<string | null>(null);

  const { toast } = useToast()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
    },
  })

  useEffect(() => {
      loadCategories();
}, [loadCategories()]);

  const loadCategories = async () => {
    try {
      const data = await categoryService.getAll();
      setCategories(data);
    } catch (error) {
      toast({
        variant: "destructive",
        description:"Erro ao carregar receitas"
      });
    }
  };

  const handleEdit = async (id: string) => {
    try {
      const recipe = await categoryService.getById(id);
      form.reset(recipe);
      setEditingId(id);
    } catch (error) {
      toast({
        variant: "destructive",
        description:  "Erro ao carregar receita"
      });
    }
  };

  const handleDelete = async (id: string) => {
      try {
        await categoryService.delete(id);
        toast({ description: "Categoria excluída com sucesso!"});
        loadCategories();
      } catch (error) {
        toast({
          variant: "destructive",
          description: "Erro ao excluir categoria"});
      }
  };

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      if (editingId) {
        await categoryService.update(editingId, values);
         toast({ description: "Categoria atualizada com sucesso!"});
      } else {
        await categoryService.create(values);
         toast({ description: "Categoria criada com sucesso!"});
      }
      
      form.reset({
        name: "",
      });
      setEditingId(null);
      loadCategories();
    } catch (error) {
      toast({ 
        variant: "destructive",
        description: "Erro ao processar a categoria"});
    }
    form.reset()
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2  gap-4 px-4">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nome da categoria</FormLabel>
                <FormControl>
                  <Input placeholder="Ex: bolo" {...field} />
                </FormControl>
                <FormDescription>
                  Este é o nome de exibição da sua categoria.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">{editingId ? 'Atualizar' : 'Criar'}</Button>
        </form>
      </Form>
      {/* Add recipe list */}
      <div className="">
        <h2 className="text-2xl font-bold mb-4">Categorias</h2>
        {
          categories.length === 0 ? (
            <p>Nenhuma categoria cadastrada.</p>
          ) : (
            <Suspense fallback={<div>Carregando...</div>}>
              <Table className="border-2 rounded bg-secondary p-4">
                <TableCaption>Uma lista de suas categorias recentes.</TableCaption>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[100px]">ID</TableHead>
                    <TableHead>Categoria</TableHead>

                    <TableHead className="text-right">Ações</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {categories.map((category:  { id: string; name: string }) => (
                    <TableRow key={category.id}>
                      <TableCell className="font-medium">{category.id}</TableCell>
                      <TableCell>
                        <Badge variant="outline" className="uppercase">{category.name}</Badge>
                      </TableCell>

                      <TableCell className="text-right space-x-2">
                        <Button variant="outline" onClick={() => handleEdit(category.id)}>
                          Editar
                        </Button>
                         <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="destructive">                   Excluir
                        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Tem certeza que deseja excluir esta categoria?</AlertDialogTitle>
          <AlertDialogDescription>
            Esta ação não pode ser desfeita. Isso excluirá a categoria permanentemente de nossos servidores.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={() => handleDelete(category.id)}>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
                        
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
              </Table>
            </Suspense>
          )
        }
      </div>
    </div>
  )
}
