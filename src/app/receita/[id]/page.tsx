import { Clock, UsersIcon } from "lucide-react"
import { Metadata } from "next"

interface RecipePageProps {
  params: {
    id: string
  }
}

export const metadata: Metadata = {
  title: 'Receita',
}

export default function RecipePage({ params }: RecipePageProps) {
  return (
    <main className="container mx-auto px-4 py-8">
      <article className="max-w-4xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl font-bold mb-4">Danoninho Caseiro</h1>
          <div className="flex items-center gap-4 text-gray-600">
            <div className="flex items-center">
              <span className="flex flex-row gap-2"><Clock className="text-primary" /> Preparo: 30 min</span>
            </div>
            <div className="flex items-center">
              <span className="flex flex-row gap-2"> <UsersIcon className="text-primary"/> Rendimento: 8 porções</span>
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
            <li>1 lata de leite condensado</li>
            <li>1 iogurte natural</li>
            <li>1 pacote de gelatina de morango</li>
            <li>1 caixinha de morango (opcional para decorar)</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Modo de Preparo</h2>
          <ol className="list-decimal list-inside space-y-4">
            <li>
              
                Dissolva a gelatina conforme as instruções da embalagem e reserve.
              
            </li>
            <li>
              
                No liquidificador, bata o leite condensado com o iogurte natural
                até ficar homogêneo.
              
            </li>
            <li>
              
                Adicione a gelatina já dissolvida e bata novamente por alguns segundos.
              
            </li>
            <li>
              
                Distribua em potinhos individuais e leve à geladeira por 4 horas ou até firmar.
              
            </li>
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
    </main>
  )
}
