import React, { useEffect } from "react";
import { motion } from "framer-motion";

export const Results: React.FC = () => {
  useEffect(() => {
    // Facebook Pixel - Track purchase event
    if (window.fbq) {
      window.fbq("track", "Purchase", { value: 47.9, currency: "BRL" });
    }
  }, []);

  return (
    <div className="min-h-screen bg-white py-8">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            🎉 Seu acesso foi liberado! 🎉
          </h1>
        </motion.div>

        {/* Vimeo Video */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="aspect-video bg-black rounded-lg overflow-hidden shadow-xl">
            <iframe
              src="https://player.vimeo.com/video/1159249817?autoplay=1&muted=0"
              width="100%"
              height="100%"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              title="Quiz Sono Infantil"
            />
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <a
            href="https://pay.hotmart.com/J103234260Q?checkoutMode=10"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-lg text-xl transition-all shadow-lg animate-pulse"
          >
            QUERO MEU ACESSO AGORA
          </a>
        </motion.div>

        {/* Price Section */}
        <motion.div
          className="bg-gray-50 rounded-lg p-8 mb-8 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p className="text-gray-600 text-lg mb-2">Preço especial por tempo limitado</p>
          <div className="flex items-center justify-center gap-4">
            <span className="text-gray-400 line-through text-2xl">R$ 297,90</span>
            <span className="text-4xl font-bold text-green-600">R$ 47,90</span>
          </div>
          <p className="text-gray-600 mt-4">Garantia de 7 dias ou seu dinheiro de volta</p>
        </motion.div>

        {/* Payment Methods */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p className="text-gray-600 mb-4">Formas de pagamento aceitas:</p>
          <div className="flex justify-center gap-4 flex-wrap">
            <span className="bg-gray-100 px-4 py-2 rounded-lg">💳 Cartão de Crédito</span>
            <span className="bg-gray-100 px-4 py-2 rounded-lg">🏦 Pix</span>
            <span className="bg-gray-100 px-4 py-2 rounded-lg">💰 Boleto</span>
          </div>
        </motion.div>

        {/* You Knew Section */}
        <motion.div
          className="bg-pink-50 rounded-lg p-8 border-l-4 border-pink-600"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <h3 className="text-xl font-bold text-gray-900 mb-4">Você Sabia?</h3>
          <p className="text-gray-700 leading-relaxed">
            Bebês que dormem bem têm melhor desenvolvimento cognitivo e emocional. 
            Nosso plano personalizado foi desenvolvido por especialistas em sono neonatal 
            para ajudar seu bebê a dormir melhor e você a descansar!
          </p>
        </motion.div>

        {/* Footer */}
        <motion.div
          className="text-center mt-12 pt-8 border-t border-gray-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <p className="text-gray-600 text-lg">
            Feito para mamães que merecem descanso ❤️
          </p>
        </motion.div>
      </div>
    </div>
  );
};

declare global {
  interface Window {
    fbq?: (event: string, action: string, data?: Record<string, any>) => void;
  }
}
