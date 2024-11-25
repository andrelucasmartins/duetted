import { Metadata } from "next";

interface MassasProps {}

export const metadata: Metadata = {
  title: 'Massas',
}

export default function Massas({ ...props }: MassasProps) {
  return (
    <section {...props} className="h-dvh px-4 py-6">
      Massas
    </section>
  );
}
