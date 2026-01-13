import { QUIZ_COLORS, QUIZ_FONTS } from "@/constants/quiz";
import { motion } from "framer-motion";

interface QuestionOption {
  value: string;
  label: string;
  emoji?: string;
}

interface QuizQuestionProps {
  question: string;
  options: QuestionOption[];
  onSelect: (value: string) => void;
  selectedValue?: string;
}

export default function QuizQuestion({
  question,
  options,
  onSelect,
  selectedValue,
}: QuizQuestionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="w-full"
    >
      <div className="px-4 py-8">
        <h2
          className="text-2xl md:text-3xl font-bold mb-8 text-center leading-relaxed"
          style={{
            fontFamily: QUIZ_FONTS.primary,
            color: QUIZ_COLORS.text,
          }}
        >
          {question}
        </h2>

        <div className="space-y-3">
          {options.map((option, idx) => {
            const isSelected = selectedValue === option.value;
            return (
              <motion.button
                key={option.value}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.3 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => onSelect(option.value)}
                className="w-full p-4 rounded-2xl font-semibold text-lg transition-all duration-300 border-2 touch-manipulation flex items-center justify-between group"
                style={{
                  fontFamily: QUIZ_FONTS.secondary,
                  backgroundColor: isSelected
                    ? QUIZ_COLORS.primary
                    : QUIZ_COLORS.background,
                  borderColor: isSelected
                    ? QUIZ_COLORS.primary
                    : QUIZ_COLORS.border,
                  color: isSelected
                    ? QUIZ_COLORS.background
                    : QUIZ_COLORS.text,
                  boxShadow: isSelected
                    ? `0 8px 16px ${QUIZ_COLORS.primary}40`
                    : "none",
                }}
              >
                <span className="flex-1 text-left">{option.label}</span>
                {option.emoji && (
                  <span
                    className="text-3xl ml-3 group-hover:scale-110 transition-transform"
                    style={{
                      filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.15))",
                      textShadow: "0 2px 4px rgba(0,0,0,0.2)",
                    }}
                  >
                    {option.emoji}
                  </span>
                )}
              </motion.button>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}
