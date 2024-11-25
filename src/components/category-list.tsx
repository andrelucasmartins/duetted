import { categoryService } from "@/services/category-service";
import { Table } from "lucide-react";
import { Suspense } from "react";
import { toast } from "sonner";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "./ui/table";

interface CategoryListProps {
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}

export async function CategoryList({onDelete, onEdit,...props  }: CategoryListProps){

  const categories = await categoryService.getAll();

  const handleEdit = async (id: string) => {
    try {
      await categoryService.getById(id);
      // const recipe = await categoryService.getById(id);
      // form.reset(recipe);
      // setEditingId(id);
    } catch (error) {
      toast.error("Erro ao carregar receita");
    }
  };

  const handleDelete = async (id: string) => {
    if (window.confirm("Tem certeza que deseja excluir esta receita?")) {
      try {
        await categoryService.delete(id);
        toast.success("Receita excluída com sucesso!");
      } catch (error) {
        toast.error("Erro ao excluir receita");
      }
    }
  };
  
 return (
  <div {...props}>
        <h2 className="text-2xl font-bold mb-4">Categorias</h2>
        {
          categories.length === 0 ? (
            <p>Nenhuma categoria cadastrada.</p>
          ) : (
            <Suspense fallback={<div>Carregando...</div>}>
              <Table className="border-2 rounded bg-secondary p-4">
  <TableCaption>A list of your recent invoices.</TableCaption>
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
        <TableCell><Badge variant="outline" className="uppercase">{category.name}</Badge></TableCell>

        <TableCell className="text-right space-x-2">
          <>
          <Button variant="outline" onClick={() => handleEdit(category.id)}>
            Editar
          </Button>
          <Button variant="destructive" onClick={() => handleDelete(category.id)}>
            Excluir
          </Button>
          </>
        </TableCell>
      </TableRow>
    ))}

  </TableBody>
</Table>


            </Suspense>
          )
        }
  </div>
 );
};
