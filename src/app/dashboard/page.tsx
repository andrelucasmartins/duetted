import { RecipeForm } from "@/components/recipe-form";


interface DashboardProps {}

export default function Dashboard({ ...props }: DashboardProps) {
  return (
    <section {...props}>
      <div className="bg-black text-white z-10 w-full py-4 px-4 md:px-0">
        <div className="flex flex-col mx-auto max-w-screen-xl px-4">
          <h1 className="text-2xl">Dashboard</h1>
        </div>
      </div>
      <div className="flex flex-col mx-auto max-w-screen-xl">
        <RecipeForm />
      </div>
    </section>
  );
}
