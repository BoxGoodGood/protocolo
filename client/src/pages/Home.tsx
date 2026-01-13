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
        {/* Image */}
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mb-8"
        >
          <img
            src="/cap.png"
            alt="Mãe e bebê dormindo"
            className="w-48 h-48 object-contain mx-auto drop-shadow-lg"
          />
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-2xl md:text-3xl font-bold mb-8"
          style={{
            fontFamily: QUIZ_FONTS.primary,
            color: QUIZ_COLORS.text,
            lineHeight: "1.4",
          }}
        >
          O seu bebê só dorme no peito ou no colo? Responda 5 perguntas e
          descubra o erro de rotina que está te deixando presa a um ciclo de
          exaustão.
        </motion.h1>

        {/* CTA Button */}
        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
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
          transition={{ delay: 0.8, duration: 0.6 }}
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
