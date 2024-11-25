import { Clock, UsersIcon } from "lucide-react";
import { Suspense } from "react";

interface ReceitasProps {}

type PostsData = {
  id: string | number
  title: string
  time: string
  recipe_yield?: number
  ingredients: string
  preparation_method?: string
}

async function getPostAll(url: string){
  let data = await fetch(url)
  return await data.json()
}

export async function generateMetadata({ params }: { params: { id: string } }) {
  let post = await getPostAll('http://localhost:8000/api/receitas')
 
  return {
    title: post.titulo,
    category: 'recipes',
  }
}

export default async function Receitas({ params }: { params: { id :string }}){
  let posts = await getPostAll('http://localhost:8000/api/recipes')

  return (
    <section className="px-4 py-6">
      <Suspense fallback="loading...">
        <div className="container mx-auto px-4 py-8">
        {
          posts.map((post: PostsData) => (
<article className="max-w-4xl mx-auto" key={post.id}>
        <header className="mb-8">
          <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
          <div className="flex items-center gap-4 text-gray-600">
            <div className="flex items-center">
              <span className="flex flex-row gap-2"><Clock className="text-primary" /> Preparo: {post.time} min</span>
            </div>
            <div className="flex items-center">
              <span className="flex flex-row gap-2"> <UsersIcon className="text-primary"/> Rendimento: {post.recipe_yield} porções</span>
            </div>
          </div>
        </header>

        <img
          src="/images/recipes/Danoninho-Caseiro.jpg"
          alt="Danoninho Caseiro"
          className="w-full h-96 object-cover rounded-lg mb-8"
        />
         
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Ingredientes</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>{post.ingredients}</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Modo de Preparo</h2>
          <ol className="list-decimal list-inside space-y-4">
            <li>{post.preparation_method}</li>          
          </ol>
        </section>

        <section className="bg-gray-100 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Dicas</h2>
          <p className="text-gray-700">
            Você pode decorar com morangos frescos picados ou calda de morango.
            Para uma versão mais saudável, use leite condensado diet e iogurte desnatado.
          </p>
        </section>
      </article>
          ))
        }
        
      
    </div>
      {/* {
        JSON.stringify(posts)
      } */}
      </Suspense>
    </section>
  );
}
