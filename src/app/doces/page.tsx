import { Metadata } from "next";

interface DocesProps {
}

export const metadata: Metadata = {
  title: 'Doces',
}

export default function Doces({...props }: DocesProps){
 return (
   <section {...props} className="h-dvh px-4 py-6">
     Doces
   </section>
 );
};
