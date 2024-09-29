import Header from "@/components/header";
import Image from "next/image";
import React from "react";

import presentation from "../assets/presentation.png";
import cangaceiro from "../assets/cangaceiro.png";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <React.Fragment>
      <Header />

      <main className="max-w-[1440px] mx-auto w-full px-32 mt-36">
        <section className="flex flex-col justify-center items-center gap-9">
          <div>
            <div className="flex flex-row justify-between items-center gap-16">
              <Image
                className="max-w-[29.375rem] max-h-[29.375rem] w-full h-full"
                src={presentation}
                alt="Imagem ilustrativa sobre o Dia do Nordestino"
              />
              <div className="flex flex-col justify-between items-start gap-8">
                <h1 className="text-8xl font-bold leading-[5.375rem] text-black-100 max-w-[42.125rem] h-auto w-full">
                  O Dia do Nordestino
                </h1>
                <p className="text-lg font-medium text-black-100 leading-[2.1875rem] max-w-[42.125rem] h-auto w-full text-justify">
                  O Dia do Nordestino, celebrado em 8 de outubro, é uma data que
                  homenageia a rica cultura e as contribuições do povo
                  nordestino para a formação da identidade brasileira. Essa
                  comemoração foi instituída para valorizar as tradições, a
                  diversidade e a força da população nordestina, que, ao longo
                  da história, enfrentou desafios e superou adversidades,
                  deixando um legado inestimável em áreas como literatura,
                  música, dança e gastronomia.
                </p>
              </div>
            </div>
          </div>

          <div>
            <p className="text-lg font-medium text-black-100 leading-[2.1875rem] h-auto w-full text-justify">
              O Nordeste do Brasil é uma região vibrante, conhecida por suas
              paisagens deslumbrantes, seu clima quente e, principalmente, por
              sua cultura única. Os nordestinos são reconhecidos por sua
              criatividade e resiliência, características que se refletem nas
              manifestações artísticas e na forma como celebram a vida, seja nas
              festas juninas, no carnaval ou nas diversas tradições populares. A
              importância do Dia do Nordestino vai além da celebração; ele
              representa um reconhecimento do valor cultural e social da região
              e de seu povo, promovendo um sentimento de pertencimento e orgulho
              entre os nordestinos e incentivando o respeito e a valorização das
              diferentes culturas que compõem o Brasil.
            </p>
          </div>
        </section>

        <section className="mt-20">
          <div>
            <div className="flex flex-row justify-between items-center gap-16">
              <div className="flex flex-col justify-between items-start gap-8">
                <h1 className="text-8xl font-bold leading-[5.375rem] text-black-100 max-w-[42.125rem] h-auto w-full">
                  Celebrando a Diversidade
                </h1>
                <p className="text-lg font-medium text-black-100 leading-[2.1875rem] max-w-[42.125rem] h-auto w-full text-justify">
                  No Dia do Nordestino, comemoramos a riqueza cultural e as
                  tradições de uma das regiões mais fascinantes do Brasil. Este
                  dia é uma oportunidade para reconhecer e celebrar a
                  contribuição dos nordestinos em diversas áreas, como a música,
                  a literatura e a gastronomia. Através de festividades e
                  expressões artísticas, o povo nordestino mostra sua força,
                  criatividade e amor pela terra. Venha explorar as histórias e
                  as tradições que fazem do Nordeste uma parte essencial da
                  identidade brasileira!
                </p>
              </div>

              <Image
                className="max-w-[29.375rem] max-h-[29.375rem] w-full h-full"
                src={cangaceiro}
                alt="Imagem ilustrativa sobre o o Nordeste e cangaceiros"
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </React.Fragment>
  );
}
