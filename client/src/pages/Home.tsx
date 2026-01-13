import { useLocation } from "wouter";
import { QUIZ_COLORS, QUIZ_FONTS } from "@/constants/quiz";
import { motion } from "framer-motion";

export default function Home() {
  const [, setLocation] = useLocation();

  const handleStartQuiz = () => {
    setLocation("/quiz");
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-4 py-8"
      style={{ backgroundColor: QUIZ_COLORS.background }}
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-md text-center"
      >
        {/* Header */}
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mb-8"
        >
          <div
            className="text-6xl mb-4"
            style={{ fontFamily: QUIZ_FONTS.primary }}
          >
            😴
          </div>
          <h1
            className="text-4xl font-bold mb-4"
            style={{
              fontFamily: QUIZ_FONTS.primary,
              color: QUIZ_COLORS.text,
            }}
          >
            Seu Bebê Dorme Bem?
          </h1>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-lg mb-6"
          style={{
            fontFamily: QUIZ_FONTS.secondary,
            color: QUIZ_COLORS.lightText,
            lineHeight: "1.6",
          }}
        >
          Descubra o plano personalizado para transformar o sono do seu bebê e
          recuperar suas noites de descanso. Responda 6 perguntas rápidas e
          receba recomendações exclusivas.
        </motion.p>

        {/* Benefits */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mb-8 space-y-3"
        >
          {[
            "✓ Análise personalizada em 2 minutos",
            "✓ Plano baseado nas suas respostas",
            "✓ 100% confidencial e seguro",
          ].map((benefit, idx) => (
            <p
              key={idx}
              className="text-sm font-semibold"
              style={{
                fontFamily: QUIZ_FONTS.secondary,
                color: QUIZ_COLORS.text,
              }}
            >
              {benefit}
            </p>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleStartQuiz}
          className="w-full p-5 rounded-2xl font-bold text-lg text-white transition-all duration-300 shadow-lg mb-6"
          style={{
            fontFamily: QUIZ_FONTS.primary,
            backgroundColor: QUIZ_COLORS.primary,
          }}
        >
          Começar o Quiz Agora
        </motion.button>

        {/* Trust Signal */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="text-xs"
          style={{
            fontFamily: QUIZ_FONTS.secondary,
            color: QUIZ_COLORS.lightText,
          }}
        >
          Mais de 10.000 mães já descobriram como melhorar o sono do bebê
        </motion.p>
      </motion.div>
    </div>
  );
}
