import { Metadata } from "next";

interface SalgadosProps {}

export const metadata: Metadata = {
  title: 'Salgados',
}

export default function Salgados({ ...props }: SalgadosProps) {
  return (
    <section {...props} className="h-dvh px-4 py-6">
      Salgados
    </section>
  );
}
