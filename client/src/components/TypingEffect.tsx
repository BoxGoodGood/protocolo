import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { QUIZ_COLORS, QUIZ_FONTS } from "@/constants/quiz";

interface TypingEffectProps {
  text: string;
  speed?: number;
  onComplete?: () => void;
}

// Velocidade padrão: 35ms por caractere (aproximadamente 5 segundos para texto completo)

export default function TypingEffect({
  text,
  speed = 35,
  onComplete,
}: TypingEffectProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (displayedText.length < text.length) {
      const timer = setTimeout(() => {
        setDisplayedText(text.slice(0, displayedText.length + 1));
      }, speed);

      return () => clearTimeout(timer);
    } else if (displayedText.length === text.length && !isComplete) {
      setIsComplete(true);
    }
  }, [displayedText, text, speed, isComplete]);

  // Disparar onComplete apenas após o texto estar completo E aguardar 2 segundos
  useEffect(() => {
    if (isComplete && onComplete) {
      const completeTimer = setTimeout(onComplete, 2000);
      return () => clearTimeout(completeTimer);
    }
  }, [isComplete, onComplete]);

  return (
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4 }}
      className="text-base max-w-md leading-relaxed min-h-24 flex items-center justify-center"
      style={{
        fontFamily: QUIZ_FONTS.secondary,
        color: QUIZ_COLORS.text,
      }}
    >
      {displayedText}
      {!isComplete && (
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.6, repeat: Infinity }}
          className="ml-1 inline-block"
          style={{
            width: "2px",
            height: "1em",
            backgroundColor: QUIZ_COLORS.text,
          }}
        />
      )}
    </motion.p>
  );
}
