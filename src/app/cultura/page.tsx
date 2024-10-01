import Footer from "@/components/footer";
import Header from "@/components/header";
import React from "react";

import Image from "next/image";

import cultural from "../../assets/cultural.png";
import junina from "../../assets/junina.png";
import danca from "../../assets/danca.png";
import cordel from "../../assets/cordel.jpg";
import artesanato from "../../assets/artesanato.jpg";

export default function Cultura() {
  return (
    <React.Fragment>
      <Header />

      <main className="max-w-[1440px] mx-auto w-full px-32 mt-36">
        <section className="flex flex-col justify-center items-center gap-9">
          <div>
            <div className="flex flex-row justify-between items-center gap-16">
              <Image
                className="max-w-[29.375rem] w-full h-full"
                src={cultural}
                alt="Imagem ilustrativa sobre o Dia do Nordestino"
              />
              <div className="flex flex-col justify-between items-start gap-8">
                <h1 className="text-8xl font-bold leading-[5.375rem] text-black-100 max-w-[42.125rem] h-auto w-full">
                  A Riqueza Cultural
                </h1>
                <p className="text-lg font-medium text-black-100 leading-[2.1875rem] max-w-[42.125rem] h-auto w-full text-justify">
                  O Nordeste do Brasil é um verdadeiro caldeirão cultural, onde
                  as tradições e influências se entrelaçam em uma expressão
                  única. Desde a música, com gêneros como o forró, axé e frevo,
                  até as danças típicas como o maracatu e o bumba-meu-boi, a
                  região celebra a diversidade através da arte.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="flex flex-col justify-between items-center gap-9 mt-32 w-full">
          <div>
            <div className="flex flex-row justify-between items-center gap-16 w-full">
              <div className="flex flex-col justify-between items-start gap-8 w-full">
                <h1 className="text-8xl font-bold leading-[5.375rem] text-black-100 max-w-[42.125rem] h-auto w-full">
                  A Cultura da Festa Junina
                </h1>
                <p className="text-lg font-medium text-black-100 leading-[2.1875rem] max-w-[42.125rem] h-auto w-full text-justify">
                  As festas juninas, por exemplo, são uma das principais
                  manifestações culturais, reunindo pessoas em danças e comidas
                  típicas, como pamonha, canjica e milho cozido. Além disso, a
                  literatura de cordel, com suas rimas e ilustrações, é uma
                  forma popular de contar histórias e preservar a memória do
                  povo nordestino.
                </p>
              </div>
              <Image
                className="max-w-[29.375rem] w-full h-auto"
                src={junina}
                alt="Imagem ilustrativa sobre o Dia do Nordestino"
              />
            </div>
          </div>

          <div>
            <p className="text-lg font-medium text-black-100 leading-[2.1875rem] h-auto w-full text-justify">
              A culinária é outro aspecto fundamental da cultura nordestina, com
              pratos como acarajé, feijoada nordestina e moqueca, que refletem a
              mistura de influências indígenas, africanas e portuguesas.
            </p>
          </div>
        </section>

        <section className="flex flex-col justify-between items-center gap-9 mt-32 w-full">
          <div>
            <div className="flex flex-row justify-between items-center gap-16 w-full">
              <Image
                className="max-w-[29.375rem] w-full h-auto"
                src={danca}
                alt="Imagem ilustrativa sobre o Dia do Nordestino"
              />
              <div className="flex flex-col justify-between items-start gap-8 w-full">
                <h1 className="text-8xl font-bold leading-[5.375rem] text-black-100 max-w-[42.125rem] h-auto w-full">
                  Música e Dança
                </h1>
                <p className="text-lg font-medium text-black-100 leading-[2.1875rem] max-w-[42.125rem] h-auto w-full text-justify">
                  Sinta o ritmo contagiante do forró, do xaxado, do frevo e de
                  outros estilos musicais que embalam o Nordeste, e conheça as
                  danças que os acompanham.
                </p>
                <a
                  href="https://pt.wikipedia.org/wiki/Cultura_da_Regi%C3%A3o_Nordeste_do_Brasil"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="no-underline"
                >
                  <button
                    type="button"
                    title="Clique para ver mais informações sobre o tema na Wikipedia"
                    className="px-12 py-4 rounded-lg bg-black-100 text-orange-100 hover:bg-black-100/80 transition-all duration-200 text-base font-medium"
                  >
                    Ver mais informações
                  </button>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="flex flex-col justify-between items-center gap-9 mt-32 w-full">
          <div>
            <div className="flex flex-row justify-between items-center gap-16 w-full">
              <div className="flex flex-col justify-between items-start gap-8 w-full">
                <h1 className="text-8xl font-bold leading-[5.375rem] text-black-100 max-w-[42.125rem] h-auto w-full">
                  Arte e Artesanato
                </h1>
                <p className="text-lg font-medium text-black-100 leading-[2.1875rem] max-w-[42.125rem] h-auto w-full text-justify">
                  Admire a criatividade e o talento dos artistas e artesãos
                  nordestinos, que produzem obras únicas em cerâmica, madeira,
                  tecido e outros materiais.
                </p>
                <a
                  href="https://pt.wikipedia.org/wiki/Cultura_da_Regi%C3%A3o_Nordeste_do_Brasil"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="no-underline"
                >
                  <button
                    type="button"
                    title="Clique para ver mais informações sobre o tema na Wikipedia"
                    className="px-12 py-4 rounded-lg bg-black-100 text-orange-100 hover:bg-black-100/80 transition-all duration-200 text-base font-medium"
                  >
                    Ver mais informações
                  </button>
                </a>
              </div>
              <Image
                className="max-w-[29.375rem] w-full h-auto"
                src={artesanato}
                alt="Imagem ilustrativa sobre o Dia do Nordestino"
              />
            </div>
          </div>
        </section>

        <section className="flex flex-col justify-between items-center gap-9 mt-32 w-full">
          <div>
            <div className="flex flex-row justify-between items-center gap-16 w-full">
              <Image
                className="max-w-[29.375rem] w-full h-auto"
                src={cordel}
                alt="Imagem ilustrativa sobre o Dia do Nordestino"
              />
              <div className="flex flex-col justify-between items-start gap-8 w-full">
                <h1 className="text-8xl font-bold leading-[5.375rem] text-black-100 max-w-[42.125rem] h-auto w-full">
                  Literatura de Cordel
                </h1>
                <p className="text-lg font-medium text-black-100 leading-[2.1875rem] max-w-[42.125rem] h-auto w-full text-justify">
                  Conheça a literatura de cordel, uma forma popular de poesia e
                  narrativa que encanta o Nordeste com suas histórias e rimas.
                </p>
                <a
                  href="https://pt.wikipedia.org/wiki/Literatura_de_cordel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="no-underline"
                >
                  <button
                    type="button"
                    title="Clique para ver mais informações sobre o tema na Wikipedia"
                    className="px-12 py-4 rounded-lg bg-black-100 text-orange-100 hover:bg-black-100/80 transition-all duration-200 text-base font-medium"
                  >
                    Ver mais informações
                  </button>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </React.Fragment>
  );
}
