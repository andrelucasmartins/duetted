import { ImageCard } from "@/components/image-card";
import { recipeService } from "@/services/recipe-service";
import { PostsData } from "@/types/recipe-types";
import Link from "next/link";
import { Suspense } from "react";

  const { getAll } = recipeService;

interface ReceitasProps {}

export async function generateMetadata({ params }: { params: { id: string } }) {
  let post = await getAll()

  return {
    title: post?.title && post.title,
    category: 'recipes',
  }
  
}

export default async function Receitas(){
  let posts = await getAll()

  return (
    <section className="px-4 py-6">
      <div className="container mx-auto px-4 py-8 max-w-4xl min-h-[calc(100vh-20rem)]">
        <h1 className="text-4xl font-bold mb-4">Receitas</h1>
        <Suspense fallback="loading...">
          {
            posts?.length > 0 ? 
            posts?.map((post: PostsData) => (
  <article className="" key={post.id}>
          <header className="mb-4">
             <Link href={`/receita/${post.id}`} title={post.title}>
            <ImageCard
          imageUrl={`${post.id % 2 == 0? "/chef-woman.webp" : "/chef.webp"}`}
          title={post.title}
          description={post.tips}
          recipe_yield={post.recipe_yield}
          time={post.time}
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
