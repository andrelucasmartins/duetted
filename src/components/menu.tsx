"use client"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MENU_MAIN } from "@/data/menu";
import { MenuSquareIcon } from "lucide-react";
import Image from 'next/image';
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { Button } from "./ui/button";

interface MenuProps {
}

export const Menu = ({ ...props}: MenuProps) => {
  const pathname = usePathname()
 return (
   <div className="bg-primary px-4" {...props}>
     <div
       className="py-6 text-lg flex 
       justify-between items-center uppercase mx-auto max-w-screen-xl px-4 md:px-0"
     >
       <Link href="/">
         <Image src="/duetted_logo_transparent_white.png" alt="Duetted" width={300} height={300} />
       </Link>
       <nav className="hidden md:block">
         <ul className="flex justify-start items-center gap-4 flex-row">
           {MENU_MAIN.map((item) => (
             <li key={item.id} className="text-white">
               <Link href={item.href}>{item.name}</Link>
             </li>
           ))}
           {pathname === "/dashboard" ? (
             <li>
               <Button
                 asChild
                 variant="outline"
                 className="bg-primary text-white hover:text-black"
               >
                 <Link href="/">Sair</Link>
               </Button>
             </li>
           ) : (
             <li>
               <Button
                 asChild
                 variant="outline"
                 className="bg-primary text-white hover:text-black"
               >
                 <Link href="/dashboard">Entrar</Link>
               </Button>
             </li>
           )}
         </ul>
       </nav>
       <nav className="md:hidden block">
         <Sheet>
           <SheetTrigger>
             <MenuSquareIcon className="size-8 text-white" />
           </SheetTrigger>
           <SheetContent className="p-0">
             <SheetHeader className="p-4 flex justify-start ">
               <SheetTitle>Duetted</SheetTitle>
               <SheetDescription>
                 <ul className="flex justify-start items-start gap-4 flex-col">
                   {MENU_MAIN.map((item) => (
                     <li key={item.id} className="">
                       <Link href={item.href}>{item.name}</Link>
                     </li>
                   ))}
                   {pathname === "/dashboard" ? (
                     <li>
                       <Button
                         asChild
                         variant="outline"
                         className="bg-primary "
                       >
                         <Link href="/">Sair</Link>
                       </Button>
                     </li>
                   ) : (
                     <li>
                       <Button
                         asChild
                         variant="outline"
                         className="bg-primary text-white hover:text-black"
                       >
                         <Link href="/dashboard">Entrar</Link>
                       </Button>
                     </li>
                   )}
                 </ul>
               </SheetDescription>
             </SheetHeader>
           </SheetContent>
         </Sheet>
       </nav>
     </div>
   </div>
 );
};
