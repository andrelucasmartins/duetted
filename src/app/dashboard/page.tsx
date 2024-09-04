import { AddRecipeForm } from "@/components/add-receive-form";
import Link from "next/link";

const MENU = [
  {
    id: 1,
    name: "sobre",
    href: "#sobre",
  },
  {
    id: 2,
    name: "receitas",
    href: "/receitas",
  },
  {
    id: 3,
    name: "doces",
    href: "/doces",
  },
  {
    id: 4,
    name: "salgados",
    href: "/salgados",
  },
  {
    id: 5,
    name: "bolos",
    href: "/bolos",
  },
  {
    id: 7,
    name: "sair",
    href: "/",
  },
];

interface DashboardProps {}

export default function Dashboard({ ...props }: DashboardProps) {
  return (
    <section {...props} className="flex flex-col mx-auto max-w-screen-xl">
      <h1>Dashboard</h1>

      <nav>
        <ul className="flex justify-start items-center gap-4 flex-row">
          {MENU.map((item) => (
            <li key={item.id}>
              <Link href={item.href}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </nav>

      <AddRecipeForm />
    </section>
  );
}
