import React from "react";
import PaoQueijo from "../assets/images/pao-de-queijo.jpg"

const Recipe = () => {
  return (
    <div className="flex flex-col flex-grow bg-[#F4EDE2]">
      <div className="justify-center items-center w-full max-w-6xl mx-auto">
        {/* Banner */}
        <div className="relative bg-gray-900 text-white overflow-hidden shadow-lg ">
          <img
            src= {PaoQueijo}
            alt="Pão de Queijo"
            className="w-full h-56 object-cover"
          />
          <div className="absolute inset-0 flex-col items-end p-10 bg-gradient-to-t from-black via-transparent to-transparent">
            <h2 className="text-4xl font-bold mt-24">Pão de Queijo</h2>
            <h6 className="text-1x1">Por Vitor Juliano</h6>
          </div>
        </div>

        {/* Receita */}
        <div className="bg-white shadow-md p-10 text-[#3F2A17]" style={{ fontFamily: "Space Mono" }}>
          {/* Ingredientes */}
          <section className="mb-6">
            <h3 className="text-2xl border-b-2 border-gray-200 pb-2">
              Ingredientes
            </h3>
            <ul className="mt-4 list-disc list-inside space-y-2 text-gray-700 font-serif" >
              <li>500g de polvilho doce</li>
              <li>250ml de leite integral</li>
              <li>1 colher/sopa rasa de sal</li>
              <li>1 prato cheio de queijo meia cura e/ou mussarela ralada</li>
              <li>2 ovos</li>
              <li>1/2 copo de óleo</li>
              <li>1 pacote de queijo parmesão ralado</li>
            </ul>
          </section>

          {/* Modo de Preparo */}
          <section>
            <h3 className="text-2xl border-b-2 border-gray-200 pb-2">
              Modo de Preparo
            </h3>
            <ol className="mt-4 list-decimal list-inside space-y-4 text-gray-700 font-serif">
              <li>
                Coloque o leite e o óleo em uma panela pra esquentar, desligue o
                fogo imediatamente assim que começar a ferver.
              </li>
              <li>
                Em uma tigela grande, coloque o polvilho e o sal, e misture bem.
                Logo em seguida, despeje o conteúdo da panela ainda quente,
                misture bem, primeiro com uma colher e depois com a mão.
              </li>
              <li>
                Em seguida, coloque o queijo ralado e um pouco do queijo do
                prato e também 1 ovo, continue misturando bem.
              </li>
              <li>
                Coloque o resto do queijo e verifique se a massa está com uma
                textura boa, nem muito oleosa e nem muito seca.
              </li>
              <li>
                Se você sentir que está muito seca, coloque outro ovo. Se ela
                ficar oleosa, coloque mais um pouco de polvilho.
              </li>
              <li>
                Essa massa deverá soltar da tigela e também da sua mão.
              </li>
            </ol>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
