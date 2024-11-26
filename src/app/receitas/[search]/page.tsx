import GoBackButton from "@/components/go-back-button";
import { ImageCard } from "@/components/image-card";
import { recipeService } from "@/services/recipe-service";
import { PostsData } from "@/types/recipe-types";
import Link from 'next/link';
import { Suspense } from "react";

interface ReceitasProps {}


export async function generateMetadata({ params }: { params: { search: string } }) {
  let posts = await await recipeService.filterByRecipe(`category=${params.search}`)
 
  return {
    title: posts.title,
    category: params.search,
  }
}

export default async function ReceitasSearchPage({ params  }: { params: { search: string }}){
  let posts = await recipeService.filterByRecipe(`category=${params.search}`)

  return (
    <section className="px-4 py-6">
      <div className="container mx-auto px-4 py-8 max-w-4xl min-h-lvh">
        <h1 className="mb-4 flex flex-row justify-between items-center"><span className="text-4xl font-bold capitalize">{params.search}</span> <GoBackButton variant={"link"} button>Voltar</GoBackButton> </h1>
          <Suspense fallback="loading...">
              {
                posts.length > 0 ? 
                posts.map((recipe: PostsData) => (
      <article className="" key={recipe.id}>
              <header className="mb-4">
                <Link href={`/receita/${recipe.id}`} title={recipe.title}>
                <ImageCard
              imageUrl={`${recipe.id % 2 == 0? "/chef-woman.webp" : "/chef.webp"}`}
              title={recipe.title}
              description={recipe.tips}
              recipe_yield={recipe.recipe_yield}
              time={recipe.time}
            />
                </Link>
              </header>
            </article>
                )) : <p>Nenhuma receita encontrada</p>
              }
            </Suspense>
    </div>
    </section>
  );
}
