import GoBackButton from "@/components/go-back-button"
import { recipeService } from "@/services/recipe-service"
import { Clock, UsersIcon } from "lucide-react"
import { Suspense } from "react"

interface RecipePageProps {
  params: {
    id: string
  }
}

const { getById } = recipeService

export async function generateMetadata({ params }: { params: { id: string } }) {
  let post = await getById(params.id)

  return {
    title: post?.title,
    category: 'recipes',
  }
  
}


export default async function RecipePage({ params }: RecipePageProps) {
  const post = await recipeService.getById(params.id)

  return (
    <main className="container mx-auto px-4 py-8">

           <Suspense fallback="loading...">
        <div className="container mx-auto max-w-4xl px-4 py-8 min-h-[calc(100vh-20rem)]">
        {
           post ? 

            <article>
                    <header className="mb-8">
                      <h1 className="text-3xl font-bold mb-4 flex flex-row justify-between items-center"><span className="text-4xl font-bold capitalize">{post.title}</span> <GoBackButton variant={"link"} button>Voltar</GoBackButton> </h1>
                      <div className="flex items-center gap-4 text-gray-600">
                        <div className="flex items-center">
                          <span className="flex flex-row gap-2"><Clock className="text-primary" /> Preparo: {post.time} min</span>
                        </div>
                        <div className="flex items-center">
                          <span className="flex flex-row gap-2"> <UsersIcon className="text-primary"/> Rendimento: {post.recipe_yield} porções</span>
                        </div>
                      </div>
                    </header>

                    {/* <img
                      src="/images/recipes/Danoninho-Caseiro.jpg"
                      alt="Danoninho Caseiro"
                      className="w-full h-96 object-cover rounded-lg mb-8"
                    /> */}
                    
                    <section className="mb-8">
                      <h2 className="text-2xl font-bold mb-4">Ingredientes</h2>
                      <div className="list-disc list-inside space-y-2">
                       <pre>{post.ingredients}</pre>
                      </div>
                    </section>

                    <section className="mb-8">
                      <h2 className="text-2xl font-bold mb-4">Modo de Preparo</h2>
                      <div className="list-decimal list-inside space-y-4">
                        <pre>{post.preparation_method}</pre>          
                      </div>
                    </section>
                  {
                    post.tips && (<section className="bg-gray-100 p-6 rounded-lg">
                      <h2 className="text-2xl font-bold mb-4">Dicas</h2>
                      <p className="text-gray-700">
                        {post.tips}
                      </p>
                    </section>)
                  }
                    
            </article>
           : <p>Nenhuma receita encontrada</p>
        } 
        
      
        </div>
      </Suspense>
    </main>
  )
}
