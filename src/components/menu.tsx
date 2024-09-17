"use client"
import { MENU_MAIN } from "@/data/menu";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { Button } from "./ui/button";
interface MenuProps {
}

export const Menu = ({ ...props}: MenuProps) => {
  const pathname = usePathname()
 return (
   <div className="bg-primary" {...props}>
     <div
       className="py-6 text-lg flex 
       justify-between items-center uppercase mx-auto max-w-screen-xl px-4 md:px-0"
     >
       <Link href="/">
         <h1 className="text-2xl text-white">Só Delicia</h1>
       </Link>
       <nav>
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
     </div>
   </div>
 );
};
