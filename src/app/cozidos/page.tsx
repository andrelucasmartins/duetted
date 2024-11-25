import { Metadata } from "next";

interface CozidosProps {}

export const metadata: Metadata = {
  title: 'Cozidos',
}
export default function Cozidos({ ...props }: CozidosProps) {
  return (
    <section {...props} className="h-dvh px-4 py-6">
      Cozidos
    </section>
  );
}
