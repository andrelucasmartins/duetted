import { RecipeCarousel } from '@/components/recipes-carousel';
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
      <div className="flex min-h-screen flex-col justify-between max-w-screen-xl mx-auto">
        <RecipeCarousel />
      </div>
      <div className="bg-secondary py-8">
        <div className="flex min-h-screen flex-col justify-between max-w-screen-xl mx-auto">
          <h1 className="text-3xl my-8">Receita do dia</h1>
          <Image
            src="/receita_beijinho-de-coco-receitas-nestle_1200_600.jpg"
            alt="hero"
            width={1000}
            height={500}
            className="w-full h-[480px] object-cover object-left-top mb-8"
          />
          <pre className="whitespace-pre-line">
            <h1>1. Doce fácil de Beijinho de Coco Ingredientes: </h1>
            <p>Ingredientes:</p>
            <p>2 latas de leite condensado (de 395 g cada)</p>
            <p>
              1 pacote de 100g de coco ralado (escolha uma marca de boa
              qualidade)
            </p>
            <p>1 colher (de sopa) de manteiga</p>
            <p>Açúcar cristal ou coco ralado para passar os docinhos</p>
            <p>Cravo para decorar</p>
            <p>Modo de Fazer</p>
            <p>
              Primeiramente coloque os 3 primeiros ingredientes em uma panela e
              leve ao fogo baixo mexendo sempre, Não pare de mexer, senão queima
              Quando começar a endurecer e você puder ver o fundo da panela,
              está bom.
            </p>
            <p>
              Então Deixe esfriar, faça bolinhas e passe no açúcar cristal ou no
              coco ralado.
            </p>
            <p>
              Em seguida espete um cravo em cada um, coloque em forminhas de
              papel pronto.
            </p>
          </pre>
        </div>
      </div>
    </main>
  );
}
