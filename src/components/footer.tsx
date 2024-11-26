"use client";

interface FooterProps {}

import { Button } from "@/components/ui/button";
import { MENU_MAIN } from "@/data/menu";

import Image from "next/image";
import Link from "next/link";
import { FaLock, FaShieldHalved } from "react-icons/fa6";

// import { Modal } from "./modal";
// import { ASSURANCE } from "@/data/assurance";
// import { PRIVACY_POLICY } from "@/data/privacy-policy";
// import { TERMS } from "@/data/terms";

export function Footer(props: FooterProps) {
  return (
    <footer className=" bg-red-800 px-4">
      <div className="mx-auto  max-w-6xl pt-6 pb-4">
        <div className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-8 items-start">
          <div className="flex justify-center items-center ">
            <Image
              src="/duetted_logo-2.png"
              alt="Só Delicia"
              width={300}
              height={300}
              className="max-w-full w-32 text-white"
            />
          </div>
          <div className="flex flex-col justify-center items-center sm:items-start text-center sm:text-start">
            <h2 className="mb-4 text-sm font-semibold text-gray-100 uppercase dark:text-white">
              Links
            </h2>
            <ul className="text-gray-300 text-xs space-y-2">

              {
                MENU_MAIN.map(menu => (
                  <li key={menu.id}  className="uppercase"><Link href={menu.href}>{menu.name}</Link></li>
                ))
              }
              <li className="pt-2">
                  <Button
                    className="text-xs bg-red-600 hover:bg-red-700  px-6"
                    size="sm"
                    asChild
                  >
                <Link href="/dashboard">
                    Entrar
                </Link>
                  </Button>
              </li>
            </ul>
            {/* <ul className="text-gray-100 font-medium">
              <li className="mb-4">
                <Modal.UseTerms
                  list={ASSURANCE}
                  title="Garantia"
                  id="assurance"
                >
                  <Modal.ButtonAction id="assurance">
                    Garantia
                  </Modal.ButtonAction>
                </Modal.UseTerms>
              </li>
              <li className="mb-4">
                <Modal.UseTerms
                  list={PRIVACY_POLICY}
                  title="Política de Privacidade"
                  id="privacy_politic"
                >
                  <Modal.ButtonAction id="privacy_politic">
                    Política de Privacidade
                  </Modal.ButtonAction>
                </Modal.UseTerms>
              </li>
              <li className="mb-4">
                <Modal.UseTerms list={TERMS} title="Termos de Uso" id="terms">
                  <Modal.ButtonAction id="terms">
                    Termos de Uso
                  </Modal.ButtonAction>
                </Modal.UseTerms>
              </li>
            </ul>
          </div> */}
          </div>
          <div className="flex flex-col justify-center sm:justify-start items-center sm:items-start text-center sm:text-left">
            <h2 className="mb-4 text-sm font-semibold text-gray-100 uppercase dark:text-white">
              Aviso
            </h2>
            <p className="text-gray-300 font-medium text-xs">
              Seja bem-vindo, de coração aberto,
Aqui cada momento será mais que certo.
Entre palavras e sonhos, vamos compartilhar,
Um mundo de ideias pronto para explorar.
            </p>
          </div>
          <div className="flex flex-col justify-center sm:justify-start items-center sm:items-start">
            <h2 className="mb-4 text-sm font-semibold text-gray-100 uppercase dark:text-white">
              Formas de Pagamento
            </h2>
            <ul className="text-gray-100 font-medium text-xs">
              <li className="mb-4">
                <Image
                  src="/images/icons/pagamento-icon.webp"
                  alt="Forma de Pagamentos Visa, Elo, Hipercard, 
                 Mastercard, Aura, boleto, American Express"
                  width={353}
                  height={135}
                  className="w-full object-cover"
                />
              </li>
            </ul>
          </div>
          <div className="flex flex-col justify-center sm:justify-start items-center sm:items-start">
            <h2 className="mb-4 text-sm font-semibold text-gray-100 uppercase dark:text-white">
              Site Seguro
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium text-sm">
              <li className="mb-4">
                <ul>
                  <li className="mb-2">
                    <button
                      className="bg-gray-100 text-gray-600 px-6 py-2 uppercase text-sm flex justify-center items-center gap-2 "
                    >
                      <FaLock />
                      <span className="text-xs"> Ambiente Seguro</span>
                    </button>
                  </li>
                  <li>
                    <button
                      className="bg-gray-100 text-gray-600 px-8 py-2 uppercase text-base flex justify-center items-center gap-2 "
                    >
                      <FaShieldHalved />
                      <span className="text-xs"> certificado ssl</span>
                    </button>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <p className="text-gray-300 font-medium text-xs mx-auto max-w-6xl mt-6">
              Informamos que não nos responsabilizamos pelas receitas fornecidas por terceiros, sejam elas compartilhadas por meio deste site, redes sociais, ou quaisquer outros canais. A precisão, segurança e resultados das receitas podem variar conforme a origem e execução, estando fora do nosso controle.

Recomendamos que você revise cuidadosamente os ingredientes e o modo de preparo antes de reproduzi-los, especialmente em casos de alergias ou restrições alimentares. Para dúvidas ou orientações, consulte um profissional especializado.

Obrigado pela compreensão.
            </p>
      <div className="px-4 flex items-center justify-center mx-auto max-w-6xl py-4">
        <span className="text-sm text-gray-50 dark:text-gray-300 text-center">
          © {new Date().getFullYear()}{" "}
          <a href="https://aedigi.com.br">AE Digi Solutions</a>. Todos os
          direitos reservados.
        </span>
      </div>
    </footer>
  );
}
