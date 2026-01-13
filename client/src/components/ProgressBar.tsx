import { QUIZ_COLORS } from "@/constants/quiz";

interface ProgressBarProps {
  current: number;
  total: number;
}

export default function ProgressBar({ current, total }: ProgressBarProps) {
  const percentage = (current / total) * 100;

  return (
    <div className="w-full px-4 py-6">
      <div className="flex justify-between items-center mb-2">
        <span
          className="text-sm font-medium"
          style={{ color: QUIZ_COLORS.lightText }}
        >
          Pergunta {current} de {total}
        </span>
        <span
          className="text-sm font-medium"
          style={{ color: QUIZ_COLORS.lightText }}
        >
          {Math.round(percentage)}%
        </span>
      </div>
      <div
        className="w-full h-3 rounded-full overflow-hidden"
        style={{ backgroundColor: QUIZ_COLORS.border }}
      >
        <div
          className="h-full rounded-full transition-all duration-500 ease-out"
          style={{
            width: `${percentage}%`,
            background: `linear-gradient(90deg, ${QUIZ_COLORS.primary}, ${QUIZ_COLORS.accent})`,
          }}
        />
      </div>
    </div>
  );
}
