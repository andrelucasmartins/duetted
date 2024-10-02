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

import { toast } from "sonner";


const formSchema = z.object({
  username: z.string().min(8, {
    message: "O nome de usuário deve ter pelo menos 8 caracteres.",
  }),
  recipe_title: z.string().min(3, {
    message: "O título da receita deve ter pelo menos 3 caracteres.",
  }),
  recipe_ingredients: z.string().min(1, {
    message: "Não se esqueça do ingrediente da receita.",
  }),
  preparation_method: z.string().min(1, {
    message: "Não se esqueça do modo de preparo da receita.",
  }),
});

export function AddRecipeForm() {

   const form = useForm<z.infer<typeof formSchema>>({
     resolver: zodResolver(formSchema),
     defaultValues: {
       username: "",
       recipe_title: "",
       recipe_ingredients: "",
       preparation_method: "",
     },
   });

     async function onSubmit(values: z.infer<typeof formSchema>) {

      try {
        const response = await fetch(
          `/api/send-post`,
          {
            method: "POST",
            headers: {
              "Api-key": "3c0b38e8-a544-4eea-9978-9d80d770fc76",
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify(values),
          }
        );

        if (response.ok) {
          toast.success("Dados enviados com sucesso!");
          console.log("Dados enviados com sucesso!");
        } else {
          
          console.error("Erro ao enviar os dados.");
        }
      } catch (error) {
        toast.error("Erro ao enviar os dados.");
        console.error("Erro ao enviar os dados:", error);
      }

      form.reset();
     }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 max-w-screen-sm w-full mx-auto flex flex-col justify-start my-16 px-4 md:px-0"
      >
        <div className="flex justify-start items-center gap-4 flex-col ">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Nome do autor</FormLabel>
                <FormControl>
                  <Input placeholder="Ex: Joana Dias" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="recipe_title"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Título da receita</FormLabel>
                <FormControl>
                  <Input placeholder="Ex: Bolo de Fuba" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="recipe_ingredients"
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
        </div>

        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
