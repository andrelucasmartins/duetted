import { CategoryForm } from "@/components/category-form";

import Link from "next/link";
 
import GoBackButton from "@/components/go-back-button";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

interface CategoryProps {
}

export default function Category({...props }: CategoryProps){
 return (
  <section {...props} className="">
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
                  <BreadcrumbLink asChild>
                    <Link href="/dashboard">Dashboard</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Categoria</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            <GoBackButton variant={"link"} button>Voltar</GoBackButton>
        </div>
      </div>
      <div className="flex flex-col mx-auto max-w-screen-xl h-full py-8 min-h-[calc(100vh-20rem)]"> 
        <CategoryForm />
      </div>
    </section>
 );
};
