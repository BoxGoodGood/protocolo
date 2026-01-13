import { QUIZ_COLORS, QUIZ_FONTS } from "@/constants/quiz";
import { motion } from "framer-motion";

export default function ProcessingScreen() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-full h-screen flex flex-col items-center justify-center px-4"
      style={{ backgroundColor: QUIZ_COLORS.background }}
    >
      <div className="text-center">
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="mb-8"
        >
          <div
            className="w-16 h-16 rounded-full mx-auto"
            style={{
              background: `linear-gradient(135deg, ${QUIZ_COLORS.primary}, ${QUIZ_COLORS.accent})`,
              boxShadow: `0 0 20px ${QUIZ_COLORS.primary}60`,
            }}
          />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-2xl md:text-3xl font-bold mb-4"
          style={{
            fontFamily: QUIZ_FONTS.primary,
            color: QUIZ_COLORS.text,
          }}
        >
          Analisando suas respostas...
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-lg"
          style={{
            fontFamily: QUIZ_FONTS.secondary,
            color: QUIZ_COLORS.lightText,
          }}
        >
          Estamos preparando seu plano personalizado
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-8 flex justify-center gap-2"
        >
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 0.6,
                repeat: Infinity,
                delay: i * 0.1,
              }}
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: QUIZ_COLORS.primary }}
            />
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}
