interface ReceitasProps {}

export default function Receitas({ ...props }: ReceitasProps) {
  return (
    <section {...props} className="h-dvh px-4 py-6">
      Receitas
    </section>
  );
}
