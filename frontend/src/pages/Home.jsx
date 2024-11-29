import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import imagem1 from '../assets/images/3.jpg';
import imagem2 from '../assets/images/4.jpg';

const images = [
  imagem1,
  imagem2,
  imagem1
];

const App = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Configura o intervalo para mudar de imagem a cada 3 segundos
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval); // Limpa o intervalo ao desmontar o componente
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen" style={{ backgroundColor: '#F4EDE2' }}>
      <div>
      <div className="w-full h-screen rounded-lg flex flex-col md:flex-row shadow-lg" style={{ backgroundColor: '#F4EDE2' }}>
        {/* Seção de Texto */}
        <div className="ml-20 md:w-1/2 flex flex-col items-start justify-center space-y-12">
          <h2 className="text-7xl font-bold text-left text-[#4b3028] "style={{ fontFamily: 'Space Mono' }}>
            Receitas Interativas
        </h2>
          <p className="text-left text-[#4b3028] mb-6" style={{ fontFamily: 'Space Mono' }}>
            Bem-vindo ao nosso site de receitas interativas, aqui você pode explorar um mundo de novas receitas e também compartilhar!
          </p>
          <button className="hover:bg-black text-white font-semibold w-1/3 h-16 rounded-full bg-[#4b3028]" style={{fontFamily: 'Space Mono' }}>
          <Link
            to="/login"
          >
            Fazer Login
          </Link>
          </button>
        </div>

        {/* Carrossel de Imagens */}
        <div className="md:w-1/2 overflow-hidden relative">
          <div
            className="h-full transition-transform duration-500 ease-in-out"
            style={{ transform: `translateY(-${currentIndex * 100}%)` }}
          >
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Imagem ${index + 1}`}
                className="w-full h-full object-cover"
              />
            ))}
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default App;
