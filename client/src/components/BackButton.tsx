import { ChevronLeft } from "lucide-react";
import { useLocation } from "wouter";
import { QUIZ_COLORS, QUIZ_FONTS } from "@/constants/quiz";

export default function BackButton() {
  const [, setLocation] = useLocation();

  const handleBack = () => {
    window.history.back();
  };

  return (
    <button
      onClick={handleBack}
      className="absolute top-6 left-6 p-3 rounded-full transition-all duration-300 hover:scale-110 z-50"
      style={{
        backgroundColor: QUIZ_COLORS.background,
        border: `2px solid ${QUIZ_COLORS.border}`,
      }}
      aria-label="Voltar"
    >
      <ChevronLeft
        size={24}
        style={{ color: QUIZ_COLORS.text }}
      />
    </button>
  );
}
