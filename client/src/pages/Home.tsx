import React from "react";
import { useLocation } from "wouter";
import { motion } from "framer-motion";

export const Home: React.FC = () => {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-pink-100 flex items-center justify-center px-4">
      <motion.div
        className="max-w-2xl w-full text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          🎉 Seu acesso foi liberado! 🎉
        </h1>

        <p className="text-xl text-gray-700 mb-8">
          Descubra como melhorar o sono do seu bebê com nosso plano personalizado
        </p>

        <motion.button
          onClick={() => setLocation("/quiz")}
          className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all shadow-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Começar Quiz
        </motion.button>
      </motion.div>
    </div>
  );
};
