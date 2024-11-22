import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Login from '../components/Auth/Login';
import Register from '../components/Auth/Register';
import bgImageLogin from '../assets/images/2.png';
import bgImageRegister from '../assets/images/1.png';
import { AuthContext } from '../context/AuthContext';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const { auth } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (auth.token) {
      navigate('/inicio');
    }
  }, [auth.token, navigate]);

  const handleToggle = () => {
    setIsLogin(!isLogin);
  };

  const contentVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const imageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <div
      className="flex flex-col flex-grow bg-[#4b3028]"
      style={{ fontFamily: 'Space Mono' }}
    >
      <div className="flex flex-grow justify-center items-center px-4">
        <div className="relative w-full max-w-6xl h-[600px] overflow-hidden rounded-xl shadow-2xl">
          {/* Lado Esquerdo - Imagem + Botão */}
          <motion.div
            className="absolute top-0 left-0 w-full md:w-1/2 h-full hidden md:flex flex-col justify-center items-center p-8 text-white"
            animate={{ x: isLogin ? 0 : '100%' }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={isLogin ? 'login-image' : 'register-image'}
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={imageVariants}
                transition={{ duration: 0.8, ease: 'easeInOut' }}
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${isLogin ? bgImageLogin : bgImageRegister})` }}
              />
            </AnimatePresence>
            <AnimatePresence mode="wait">
              <motion.div
                key={isLogin ? 'login-content' : 'register-content'}
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={contentVariants}
                transition={{ duration: 0.8 }}
                className="text-center mb-8 relative z-10"
              >
                <h1 className="text-4xl font-bold leading-snug mb-6">
                  {isLogin ? 'Comece uma nova experiência gastronômica' : 'Olá cozinheiros'}
                </h1>
                <p className="mb-4">
                  {isLogin ? 'Crie uma conta para explorar todas as receitas' : 'Se já tiver uma conta, inicie a sessão aqui'}
                </p>
              </motion.div>
            </AnimatePresence>
            <button
              onClick={handleToggle}
              className="border-2 border-white py-2 px-6 rounded-full hover:bg-white hover:text-[#4b3028] transition-all cursor-pointer z-10"
            >
              {isLogin ? 'Fazer Cadastro' : 'Voltar para Login'}
            </button>
          </motion.div>

          {/* Lado Direito - Formulário */}
          <motion.div
            className="absolute top-0 right-0 w-full md:w-1/2 h-full bg-white p-10 flex flex-col justify-center"
            animate={{ x: isLogin ? 0 : '-100%' }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={isLogin ? 'login-form' : 'register-form'}
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={contentVariants}
                transition={{ duration: 0.8 }}
              >
                {isLogin ? <Login /> : <Register />}
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
