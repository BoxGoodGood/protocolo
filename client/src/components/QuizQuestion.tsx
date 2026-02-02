import React from "react";
import { motion } from "framer-motion";

interface QuizQuestionProps {
  question: string;
  options: string[];
  onSelect: (option: string) => void;
  selectedOption?: string;
}

export const QuizQuestion: React.FC<QuizQuestionProps> = ({
  question,
  options,
  onSelect,
  selectedOption,
}) => {
  return (
    <motion.div
      className="w-full max-w-2xl mx-auto px-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
        {question}
      </h2>

      <div className="space-y-3">
        {options.map((option, index) => (
          <motion.button
            key={index}
            onClick={() => onSelect(option)}
            className={`w-full p-4 text-left rounded-lg font-semibold transition-all ${
              selectedOption === option
                ? "bg-pink-600 text-white shadow-lg scale-105"
                : "bg-gray-100 text-gray-900 hover:bg-gray-200"
            }`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {option}
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
};
