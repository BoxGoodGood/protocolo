import React from "react";
import { motion } from "framer-motion";

interface ProgressBarProps {
  current: number;
  total: number;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ current, total }) => {
  const percentage = Math.round((current / total) * 100);

  return (
    <div className="w-full px-4 py-6">
      <div className="flex items-center justify-between mb-3">
        <span className="text-sm font-semibold text-gray-700">
          Pergunta {current} de {total}
        </span>
        <span className="text-lg font-bold text-pink-600">{percentage}%</span>
      </div>
      
      <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden shadow-md">
        <motion.div
          className="h-full bg-gradient-to-r from-pink-500 to-pink-600 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
      </div>
    </div>
  );
};
