import React, { useState } from "react";
import { useLocation } from "wouter";
import { motion } from "framer-motion";
import { ProgressBar } from "../components/ProgressBar";
import { QuizQuestion } from "../components/QuizQuestion";
import { QUIZ_QUESTIONS } from "../constants/quiz";

export const Quiz: React.FC = () => {
  const [, setLocation] = useLocation();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);

  const handleSelectOption = (option: string) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = option;
    setAnswers(newAnswers);

    setTimeout(() => {
      if (currentQuestion < QUIZ_QUESTIONS.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        setLocation("/results");
      }
    }, 500);
  };

  const question = QUIZ_QUESTIONS[currentQuestion];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-pink-100 py-8">
      <div className="max-w-2xl mx-auto">
        <ProgressBar current={currentQuestion + 1} total={QUIZ_QUESTIONS.length} />

        <motion.div
          className="bg-white rounded-lg shadow-xl p-8 mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <QuizQuestion
            question={question.question}
            options={question.options}
            onSelect={handleSelectOption}
            selectedOption={answers[currentQuestion]}
          />
        </motion.div>
      </div>
    </div>
  );
};
