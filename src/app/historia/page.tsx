import Footer from "@/components/footer";
import Header from "@/components/header";
import Image from "next/image";
import React from "react";

import historiaNordeste from "../../assets/historia.png";
import chegadaPort from "../../assets/chegadaPort.png";
import capitanias from "../../assets/capitanias.png";
import invasao from "../../assets/invasao.png";
import quilombos from "../../assets/quilombos.png";

export default function Historia() {
  return (
    <React.Fragment>
      <Header />

      <main className="max-w-[1440px] mx-auto w-full px-32 mt-36">
        <section className="flex flex-col justify-center items-center gap-9">
          <div>
            <div className="flex flex-row justify-between items-center gap-16">
              <Image
                className="max-w-[29.375rem] max-h-[29.375rem] w-full h-full"
                src={historiaNordeste}
                alt="Imagem ilustrativa sobre o Dia do Nordestino"
              />
              <div className="flex flex-col justify-between items-start gap-8">
                <h1 className="text-8xl font-bold leading-[5.375rem] text-black-100 max-w-[42.125rem] h-auto w-full">
                  A História do Nordeste
                </h1>
                <p className="text-lg font-medium text-black-100 leading-[2.1875rem] max-w-[42.125rem] h-auto w-full text-justify">
                  O Nordeste brasileiro é uma região rica em cultura, tradições
                  e história. Desde a chegada dos primeiros colonizadores
                  portugueses até os dias atuais, o Nordeste tem sido palco de
                  eventos marcantes que moldaram não apenas a região, mas todo o
                  Brasil. Nada mais justo do que homenagear e celebrar os
                  momentos históricos mais importantes do Nordeste, destacando
                  sua contribuição única para a formação da identidade
                  brasileira.
                </p>
              </div>
            </div>
          </div>

          <div>
            <p className="text-lg font-medium text-black-100 leading-[2.1875rem] h-auto w-full text-justify">
              Ao longo dos séculos, o Nordeste foi cenário de batalhas épicas,
              movimentos revolucionários e transformações sociais que deixaram
              um legado duradouro. Desde a resistência dos povos indígenas e
              quilombolas, passando pela influência dos colonizadores europeus e
              africanos, até os movimentos culturais e políticos contemporâneos,
              cada capítulo da história nordestina é uma prova da resiliência e
              da diversidade de seu povo. Convidamos você a explorar esta linha
              do tempo e descobrir os eventos que marcaram a trajetória do
              Nordeste, celebrando a riqueza e a complexidade de sua história.
              Seja bem-vindo a uma viagem pelo tempo, onde cada marco histórico
              revela um pouco mais sobre a alma nordestina e sua importância
              para o Brasil.
            </p>
          </div>
        </section>

        <section className="mt-44">
          <div>
            <div className="flex flex-row justify-between items-center gap-16">
              <div className="flex flex-col justify-between items-center gap-8 w-full">
                <h1 className="text-3xl text-center font-bold leading-[5.375rem] text-black-100 max-w-[42.125rem] h-auto w-full">
                  Alguns Acontecimentos Importantes
                </h1>
              </div>
            </div>
          </div>
        </section>

        <section className="flex flex-col justify-between items-center gap-9 mt-16 w-full">
          <div>
            <div className="flex flex-row justify-between items-center gap-16 w-full">
              <div className="flex flex-col justify-between items-start gap-8 w-full">
                <div className="flex flex-col justify-center items-start gap-2 w-full">
                  <h1 className="text-8xl font-bold leading-[5.375rem] text-black-100 max-w-[42.125rem] h-auto w-full">
                    Chegada dos Portugueses
                  </h1>
                  <h2 className="text-xl font-bold leading-[5.375rem] text-black-100 max-w-[42.125rem] h-auto w-full">
                    1500
                  </h2>
                </div>
                <p className="text-lg font-medium text-black-100 leading-[2.1875rem] max-w-[42.125rem] h-auto w-full text-justify">
                  Em 22 de abril de 1500, a expedição liderada por Pedro Álvares
                  Cabral avistou pela primeira vez as terras que hoje conhecemos
                  como Brasil. O primeiro ponto avistado foi o Monte Pascoal,
                  hlocalizado na atual Bahia. A esquadra, composta por 13
                  embarcações e cerca de 1200 homens, desembarcou na região de
                  Porto Seguro, onde permaneceram até 2 de maio de 1500.
                </p>
              </div>
              <Image
                className="max-w-[29.375rem] w-full h-auto"
                src={chegadaPort}
                alt="Imagem ilustrativa sobre o Dia do Nordestino"
              />
            </div>
          </div>

          <div>
            <p className="text-lg font-medium text-black-100 leading-[2.1875rem] h-auto w-full text-justify">
              Durante esse período, os portugueses tiveram os primeiros contatos
              com os povos indígenas locais, que foram descritos em detalhes na
              famosa “Carta de Pero Vaz de Caminha”. Este documento é
              considerado o primeiro relato escrito sobre o Brasil2. A chegada
              dos portugueses marcou o início da colonização e exploração do
              território brasileiro, com o Nordeste sendo a primeira região a
              ser explorada e colonizada.
            </p>
          </div>
        </section>

        <section className="flex flex-col justify-between items-center gap-9 mt-32 w-full">
          <div>
            <div className="flex flex-row justify-between items-center gap-16 w-full">
              <Image
                className="max-w-[29.375rem] w-full h-auto"
                src={capitanias}
                alt="Imagem ilustrativa sobre o Dia do Nordestino"
              />
              <div className="flex flex-col justify-between items-start gap-8 w-full">
                <div className="flex flex-col justify-center items-start gap-2 w-full">
                  <h1 className="text-8xl font-bold leading-[5.375rem] text-black-100 max-w-[42.125rem] h-auto w-full">
                    Capitanias Hereditárias
                  </h1>
                  <h2 className="text-xl font-bold leading-[5.375rem] text-black-100 max-w-[42.125rem] h-auto w-full">
                    1534
                  </h2>
                </div>
                <p className="text-lg font-medium text-black-100 leading-[2.1875rem] max-w-[42.125rem] h-auto w-full text-justify">
                  Em 1534, o rei de Portugal, Dom João III, implementou o
                  sistema de Capitanias Hereditárias no Brasil como uma
                  estratégia para colonizar e administrar o vasto território
                  recém-descoberto. O território foi dividido em 15 capitanias,
                  que foram entregues a nobres de confiança, conhecidos como
                  donatários. Entre as capitanias mais importantes estavam
                  Pernambuco e Bahia.
                </p>
              </div>
            </div>
          </div>

          <div>
            <p className="text-lg font-medium text-black-100 leading-[2.1875rem] h-auto w-full text-justify">
              A Capitania de Pernambuco foi concedida a Duarte Coelho, que se
              destacou por introduzir o cultivo da cana-de-açúcar, transformando
              a região em um dos principais centros econômicos do Brasil
              colonial. A Capitania da Bahia, por sua vez, foi entregue a
              Francisco Pereira Coutinho e se tornou um importante ponto de
              apoio para a administração colonial, especialmente após a fundação
              da cidade de Salvador em 1549.
            </p>
          </div>
        </section>

        <section className="flex flex-col justify-between items-center gap-9 mt-32 w-full">
          <div>
            <div className="flex flex-row justify-between items-center gap-16 w-full">
              <div className="flex flex-col justify-between items-start gap-8 w-full">
                <div className="flex flex-col justify-center items-start gap-2 w-full">
                  <h1 className="text-8xl font-bold leading-[5.375rem] text-black-100 max-w-[42.125rem] h-auto w-full">
                    Invasão Inglesa
                  </h1>
                  <h2 className="text-xl font-bold leading-[5.375rem] text-black-100 max-w-[42.125rem] h-auto w-full">
                    1595
                  </h2>
                </div>
                <p className="text-lg font-medium text-black-100 leading-[2.1875rem] max-w-[42.125rem] h-auto w-full text-justify">
                  Em 1595, durante a Guerra Anglo-Espanhola, o almirante inglês
                  James Lancaster liderou uma expedição militar com o objetivo
                  de saquear o porto do Recife, em Pernambuco. Este evento ficou
                  conhecido como o Saque do Recife. A expedição foi motivada
                  pela União Ibérica, que uniu as coroas de Portugal e Espanha,
                  tornando as colônias portuguesas alvos legítimos para os
                  inimigos da Espanha, como a Inglaterra.
                </p>
              </div>
              <Image
                className="max-w-[29.375rem] w-full h-auto"
                src={invasao}
                alt="Imagem ilustrativa sobre o Dia do Nordestino"
              />
            </div>
          </div>

          <div>
            <p className="text-lg font-medium text-black-100 leading-[2.1875rem] h-auto w-full text-justify">
              Lancaster comandou uma frota de cerca de 35 navios e 400 soldados
              e marinheiros. Ao chegar ao Recife, ele conseguiu capturar a
              cidade e resistir a vários contra-ataques portugueses durante
              quase um mês. O saque resultou em uma grande quantidade de
              mercadorias valiosas, incluindo açúcar, pau-brasil e algodão, que
              foram enviados para a Inglaterra em navios fretados de holandeses
              e franceses que estavam na região.
            </p>
          </div>
        </section>

        <section className="flex flex-col justify-between items-center gap-9 mt-32 w-full">
          <div>
            <div className="flex flex-row justify-between items-center gap-16 w-full">
              <Image
                className="max-w-[29.375rem] w-full h-auto"
                src={quilombos}
                alt="Imagem ilustrativa sobre o Dia do Nordestino"
              />
              <div className="flex flex-col justify-between items-start gap-8 w-full">
                <div className="flex flex-col justify-center items-start gap-2 w-full">
                  <h1 className="text-8xl font-bold leading-[5.375rem] text-black-100 max-w-[42.125rem] h-auto w-full">
                    Quilombo dos Palmares
                  </h1>
                  <h2 className="text-xl font-bold leading-[5.375rem] text-black-100 max-w-[42.125rem] h-auto w-full">
                    1695
                  </h2>
                </div>
                <p className="text-lg font-medium text-black-100 leading-[2.1875rem] max-w-[42.125rem] h-auto w-full text-justify">
                  O Quilombo dos Palmares foi uma das maiores e mais duradouras
                  comunidades de escravos fugitivos no Brasil colonial,
                  localizado na Serra da Barriga, na atual Alagoas. Fundado por
                  volta de 1605, Palmares abrigava não apenas escravos africanos
                  fugidos, mas também indígenas, mestiços e até mesmo alguns
                  colonos portugueses marginalizados.
                </p>
              </div>
            </div>
          </div>

          <div>
            <p className="text-lg font-medium text-black-100 leading-[2.1875rem] h-auto w-full text-justify">
              A comunidade de Palmares desenvolveu uma sociedade
              autossuficiente, baseada na agricultura de subsistência e no
              comércio. Governada por líderes eleitos, como Ganga Zumba e,
              posteriormente, Zumbi dos Palmares, a comunidade resistiu a várias
              expedições militares portuguesas ao longo de quase um século. Em
              1694, uma grande expedição liderada pelo bandeirante Domingos
              Jorge Velho, com apoio de tropas coloniais, conseguiu destruir o
              principal assentamento de Palmares. Zumbi continuou a resistir até
              ser capturado e morto em 1695. A destruição de Palmares marcou o
              fim de uma das mais significativas resistências à escravidão no
              Brasil, mas o legado de luta e resistência de Palmares continua a
              inspirar movimentos sociais até hoje.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </React.Fragment>
  );
}
