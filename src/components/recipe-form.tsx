"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "./ui/textarea";

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
} from "@/components/ui/alert-dialog";

import { CATEGORIES } from "@/data/categories";
import { useToast } from "@/hooks/use-toast";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";

import { recipeService } from '@/services/recipe-service';
import { Edit, Trash2 } from "lucide-react";
import { Suspense, useEffect, useState } from 'react';
import { Badge } from "./ui/badge";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "./ui/table";

const formSchema = z.object({
  title: z.string().min(3, {
    message: "O título deve ter pelo menos 3 caracteres.",
  }),
  time: z.string().min(1, {
    message: "O tempo de preparo deve ter pelo menos 1 caracteres.",
  }),
  recipe_yield: z.number().positive().gte(1, {
    message: "A receita rende para quantas pessoas?",
  }),

  ingredients: z.string().min(1, {
    message: "Não se esqueça dos ingredientes da receita.",
  }),
  preparation_method: z.string().min(1, {
    message: "Não se esqueça do modo de preparo da receita.",
  }),
  tips: z.string().optional()
    .or(z.literal('')),
  category_id: z.string().min(1, {
    message: "Selecione o tipo de receita.",
  }),
});

export function RecipeForm() {

  const [recipes, setRecipes] = useState([]);
  const [editingId, setEditingId] = useState<string | null>(null);

  const { toast } = useToast()


  const form = useForm<z.infer<typeof formSchema>>({
     resolver: zodResolver(formSchema),
     defaultValues: {
        title: "",
        time: "",
        recipe_yield: 0,
        ingredients: "",
        preparation_method: "",
        tips: "",
        category_id: "",
     },
   });

    useEffect(() => {
      loadRecipes();
    }, []);

  const loadRecipes = async () => {
    try {
      const data = await recipeService.getAll();
      setRecipes(data);
    } catch (error) {
      toast({
        variant: "destructive",
        description: "Erro ao carregar receitas"});
    }
  };


  
  async function onSubmit(values: z.infer<typeof formSchema>) {

    try {
      if (editingId) {
        await recipeService.update(editingId, values);
        toast({
          description: "Receita atualizada com sucesso!"});
      } else {
        await recipeService.create(values);
        toast({
          description: "Receita criada com sucesso!"
        });
      }
      
      form.reset({
        title: "",
        time: "",
        recipe_yield: 0,
        ingredients: "",
        preparation_method: "",
        tips: "",
        category_id: ""
      });
      setEditingId(null);
      loadRecipes();
    } catch (error) {
      toast({
        variant: "destructive",
        description: "Erro ao processar a receita"});
    }
  };

  const handleEdit = async (id: string) => {
    try {
      const recipe = await recipeService.getById(id);
      form.reset(recipe);
      setEditingId(id);
    } catch (error) {
      toast({
        variant: "destructive",
        description: "Erro ao carregar receita"
      });
    }
  };

  const handleDelete = async (id: string) => {
      try {
        await recipeService.delete(id);
        toast({
          description: "Receita excluída com sucesso!"
        });
        loadRecipes();
      } catch (error) {
        toast({
          variant: "destructive",
          description: "Erro ao excluir receita"
        });
      }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2  gap-4 px-4">
      <Form {...form}>     
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 max-w-screen-sm w-full mx-auto flex flex-col justify-start my-16 px-4 md:px-0"
        >
          <div className="flex justify-start items-center gap-4 flex-col ">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Título</FormLabel>
                  <FormControl>
                    <Input placeholder="Ex: Joana Dias" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="time"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Tempo de preparo</FormLabel>
                  <FormControl>
                    <Input placeholder="30" {...field} min="0" step={"5"} type="number" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="recipe_yield"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Rendimento da receita</FormLabel>
                  <FormControl>
                    <Input placeholder="3" {...field} min="1" step={"1"} type="number" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}          />
            <FormField
              control={form.control}
              name="category_id"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Tipo de receita</FormLabel>
                  <FormControl>
                    <Select 
                    onValueChange={field.onChange}
                    defaultValue={field.value.toString()}
                    {...field}>
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Selecione uma categoria" />
                      </SelectTrigger>
                      <SelectContent>
                        {
                          CATEGORIES.map((category) => (
                            <SelectItem key={category.id} value={String(category.id)}>
                              {category.name}
                            </SelectItem>
                          ))
                        }
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}          />
            
            <FormField
              control={form.control}
              name="ingredients"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Ingredientes</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder={`1 xícara de leite\n2 ovos\n1 xícaras de farinha\n1/2 xícara de Fuba\n1 colher de fermentos\n1 xícaras de açúcar`}
                      {...field}
                      rows={7}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="preparation_method"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Modo de preparação</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder={`Mexa tudo até forma passa homogenia\nLeve ao forno por aproximadamente 30 minutos.\nDesligue o fogo e bom apetite! ;)`}
                      {...field}
                      rows={7}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="tips"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Dicas</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder={`Coloqque suas dicas aqui!`}
                      {...field}
                      rows={7}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <Button type="submit">{editingId ? 'Atualizar' : 'Criar'} Receita</Button>
        </form>      
      </Form>
    {/* Add recipe list */}
    <div className="">
        <h2 className="text-2xl font-bold mb-4">Receitas</h2>
        {
          recipes.length === 0 ? (
            <p>Nenhuma receitas cadastrada.</p>
          ) : (
            <Suspense fallback={<div>Carregando...</div>}>
              <Table className="border-2 rounded bg-secondary p-4">
                <TableCaption>Uma lista de suas receitas recentes.</TableCaption>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[100px]">ID</TableHead>
                    <TableHead>Receita</TableHead>

                    <TableHead className="text-right">Ações</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {recipes.map((recipe:  { id: string; title: string }) => (
                    <TableRow key={recipe.id}>
                      <TableCell className="font-medium">{recipe.id}</TableCell>
                      <TableCell>
                        <Badge variant="outline" className="uppercase">{recipe.title}</Badge>
                      </TableCell>
                      <TableCell className="text-right space-x-2">
                        <Button variant="outline" size="icon" onClick={() => handleEdit(recipe.id)} title="Editar">
                          <Edit className="size-4"/>
                        </Button>

                        <AlertDialog>
                          <AlertDialogTrigger asChild>
                            <Button variant="destructive" size="icon" >
                          <Trash2 className="size-4" />
                        </Button>
                          </AlertDialogTrigger>
                          <AlertDialogContent>
                            <AlertDialogHeader>
                              <AlertDialogTitle>Tem certeza que deseja excluir esta receita {recipe.title}?</AlertDialogTitle>
                              <AlertDialogDescription>
                                Esta ação não pode ser desfeita. Isso excluirá a categoria permanentemente de nossos servidores.
                              </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                              <AlertDialogCancel>Cancel</AlertDialogCancel>
                              <AlertDialogAction onClick={() => handleDelete(recipe.id)}>Continue</AlertDialogAction>
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
  );
}
