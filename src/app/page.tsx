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
    name: "entrar",
    href: "/dashboard",
  },
]

export default function Home() {
  return (
    <main className="">
      <div className="bg-primary">
        <div
          className=" px-4 py-6 text-white text-lg flex 
       justify-between items-center uppercase mx-auto max-w-screen-xl"
        >
          <Link href="/">
            <h1>Só Delicia</h1>
          </Link>
          <nav>
            <ul className="flex justify-start items-center gap-4 flex-row">
              {MENU.map((item) => (
                <li key={item.id}>
                  <Link href={item.href}>{item.name}</Link>
                </li>
              ))}
              <li></li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="flex min-h-screen flex-col items-center justify-between p-24"></div>
    </main>
  );
}
