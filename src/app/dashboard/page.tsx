import { RecipeForm } from "@/components/recipe-form";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import Link from "next/link";


interface DashboardProps {}

export default function Dashboard({ ...props }: DashboardProps) {
  return (
    <section {...props}>
      <div className="bg-black/5 text-white w-full py-4 px-4 md:px-0">
        <div className="flex flex-row mx-auto max-w-screen-xl px-4 justify-between items-center">
             <Breadcrumb >
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link href="/">Home</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Dashboard</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>

            <Button asChild className="w-fit">
              <Link href="/dashboard/category">Categorias</Link>
            </Button>

        </div>
      </div>
      <div className="flex flex-col mx-auto max-w-screen-xl h-full py-8"> 
        <RecipeForm />
      </div>
    </section>
  );
}
