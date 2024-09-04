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

const formSchema = z.object({
  username: z.string().min(8, {
    message: "O nome de usuário deve ter pelo menos 8 caracteres.",
  }),
  receive_title: z.string().min(3, {
    message: "O título da receita deve ter pelo menos 3 caracteres.",
  }),
});

export function AddReceiveForm() {
   const form = useForm<z.infer<typeof formSchema>>({
     resolver: zodResolver(formSchema),
     defaultValues: {
       username: "",
       receive_title: "",
     },
   });

     async function onSubmit(values: z.infer<typeof formSchema>) {

      try {
        const response = await fetch(
          `https://webhook.site/6651a895-151c-4613-9de2-be37434ac8b7`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(values),
          }
        );

        if (response.ok) {
          console.log("Dados enviados com sucesso!");
        } else {
          console.error("Erro ao enviar os dados.");
        }
      } catch (error) {
        console.error("Erro ao enviar os dados:", error);
      }
       
       console.log(values);
     }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 max-w-screen-sm w-full mx-auto flex flex-col justify-start my-16"
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
            name="receive_title"
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
        </div>

        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
