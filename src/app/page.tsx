import { RecipeCarousel } from '@/components/recipes-carousel';
import { Clock, UsersIcon } from 'lucide-react';
import Image from 'next/image';
 

export default function Home() {
  return (
    <main className="">
      <Image
        src="/banner-app-store-delivery-sobremesa.webp"
        alt="hero"
        width={1000}
        height={500}
        className="w-full h-[480px] object-cover object-left-top"
      />
      <div className="flex flex-col justify-between max-w-4xl mx-auto container">
        <RecipeCarousel />
      </div>
      <div className="container mx-auto px-4 pb-8">
      <article className="max-w-4xl mx-auto">
        <header className="mb-8">
          <h2 className="text-3xl font-bold mb-4">Doce fácil de Beijinho de Coco</h2>
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
          src="/receita_beijinho-de-coco-receitas-nestle_1200_600.jpg"
          alt="Doce fácil de Beijinho de Coco"
          className="w-full h-96 object-cover rounded-lg mb-8"
        />

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Ingredientes</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>2 latas de leite condensado (de 395 g cada)</li>
            <li>1 pacote de 100g de coco ralado (escolha uma marca de boa qualidade)</li>
            <li>1 colher (de sopa) de manteiga</li>
            <li>1 caixinha de morango (opcional para decorar)</li>
            <li>Açúcar cristal ou coco ralado para passar os docinhos</li>
            <li>Cravo para decorar</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Modo de Preparo</h2>
          <ol className="list-decimal list-inside space-y-4">
            <li>
              
              Primeiramente coloque os 3 primeiros ingredientes em uma panela e leve ao fogo baixo mexendo sempre, Não pare de mexer, senão queima Quando começar a endurecer e você puder ver o fundo da panela, está bom.
              
            </li>
            <li>
              
              Então Deixe esfriar, faça bolinhas e passe no açúcar cristal ou no coco ralado.
              
            </li>
            <li>
              
              Em seguida espete um cravo em cada um, coloque em forminhas de papel pronto.
              
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
    </div>
    </main>
  );
}
