import { Metadata } from "next";

interface SobreProps {}

export const metadata: Metadata = {
  title: 'Sobre',
}

export default function Sobre({ ...props }: SobreProps) {
  return (
    <section className="min-h-screen bg-gray-50 py-12 px-4" {...props}>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Sobre Nós</h1>
        
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Nossa História</h2>
          <p className="text-gray-600 mb-6">
            Tudo começou com uma paixão pela culinária e o desejo de transformar refeições comuns em momentos extraordinários. Ao longo dos anos, reunimos receitas, memórias e sabores de diferentes culturas para compartilhar com você. Acreditamos que cozinhar é um ato de amor e que cada prato tem o poder de contar histórias e criar conexões.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Nossa Missão</h2>
          <p className="text-gray-600 mb-6">
            Levar inspiração à sua cozinha, ajudando você a descobrir novos sabores e reinventar pratos tradicionais. Queremos que cada receita seja uma experiência única, tornando sua vida mais gostosa e cheia de momentos especiais à mesa.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="text-center">
              <h3 className="font-bold text-xl mb-2">Visão</h3>
              <p className="text-gray-600">Ser o site de receitas mais confiável e criativo, onde você encontra ideias deliciosas e práticas para qualquer ocasião.</p>
            </div>
            <div className="text-center">
              <h3 className="font-bold text-xl mb-2">Valores</h3>
              <ol className="text-gray-600">
               <li>Paixão por Sabores: Tudo começa com o amor pela culinária.</li>
               <li>Inovação: Sempre explorando novas tendências e combinações.</li>
               <li>Autenticidade: Receitas testadas e compartilhadas com carinho.</li>
               <li>Comunidade: Promovemos a troca de experiências e histórias entre amantes da boa comida.</li>
                </ol>
            </div>
            <div className="text-center">
              <h3 className="font-bold text-xl mb-2">Compromisso</h3>
              <p className="text-gray-600">Transformar seu dia a dia com receitas simples, práticas e cheias de sabor, garantindo que você tenha sempre uma experiência positiva em nossa plataforma.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}