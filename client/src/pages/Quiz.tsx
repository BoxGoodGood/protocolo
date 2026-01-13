import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { QUIZ_QUESTIONS, QUIZ_COLORS, QUIZ_FONTS } from "@/constants/quiz";
import ProgressBar from "@/components/ProgressBar";
import QuizQuestion from "@/components/QuizQuestion";
import ProcessingScreen from "@/components/ProcessingScreen";
import { trpc } from "@/lib/trpc";
import { toast } from "sonner";

interface QuizAnswers {
  [key: number]: string;
}

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswers>({});
  const [isProcessing, setIsProcessing] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [showEmailForm, setShowEmailForm] = useState(false);

  const submitQuizMutation = trpc.quiz.submitResponse.useMutation();

  const handleSelectAnswer = (value: string) => {
    setAnswers({
      ...answers,
      [currentQuestion]: value,
    });

    // Auto-advance to next question after a short delay
    setTimeout(() => {
      if (currentQuestion < QUIZ_QUESTIONS.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        setShowEmailForm(true);
      }
    }, 300);
  };

  const handleSubmitQuiz = async () => {
    if (!email.trim()) {
      toast.error("Por favor, insira seu e-mail");
      return;
    }

    setIsProcessing(true);

    try {
      const response = await submitQuizMutation.mutateAsync({
        email: email.trim(),
        name: name.trim() || undefined,
        babyAge: answers[0] || "",
        wakeUps: answers[1] || "",
        sleepMethod: answers[2] || "",
        hasRoutine: answers[3] || "",
        motherFeeling: answers[4] || "",
        triedOtherMethods: answers[5] || "",
      });

      if (response.success) {
        // Simulate processing time
        await new Promise((resolve) => setTimeout(resolve, 3000));

        // Redirect to results page
        window.location.href = `/results?email=${encodeURIComponent(email)}`;
      }
    } catch (error) {
      console.error("Error submitting quiz:", error);
      toast.error("Erro ao enviar suas respostas. Tente novamente.");
      setIsProcessing(false);
    }
  };

  if (isProcessing) {
    return <ProcessingScreen />;
  }

  if (showEmailForm) {
    return (
      <div
        className="min-h-screen flex flex-col items-center justify-center px-4 py-8"
        style={{ backgroundColor: QUIZ_COLORS.background }}
      >
        <div className="w-full max-w-md">
          <h2
            className="text-3xl font-bold mb-6 text-center"
            style={{
              fontFamily: QUIZ_FONTS.primary,
              color: QUIZ_COLORS.text,
            }}
          >
            Quase pronto!
          </h2>

          <p
            className="text-lg text-center mb-8"
            style={{
              fontFamily: QUIZ_FONTS.secondary,
              color: QUIZ_COLORS.lightText,
            }}
          >
            Para receber seu plano personalizado, nos informe seus dados:
          </p>

          <div className="space-y-4 mb-8">
            <input
              type="text"
              placeholder="Seu nome (opcional)"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-4 rounded-2xl border-2 text-lg focus:outline-none focus:ring-2"
              style={{
                fontFamily: QUIZ_FONTS.secondary,
                borderColor: QUIZ_COLORS.border,
              }}
            />

            <input
              type="email"
              placeholder="Seu e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-4 rounded-2xl border-2 text-lg focus:outline-none focus:ring-2"
              style={{
                fontFamily: QUIZ_FONTS.secondary,
                borderColor: QUIZ_COLORS.border,
              }}
              required
            />
          </div>

          <button
            onClick={handleSubmitQuiz}
            disabled={submitQuizMutation.isPending}
            className="w-full p-4 rounded-2xl font-bold text-lg text-white transition-all duration-300 disabled:opacity-50"
            style={{
              fontFamily: QUIZ_FONTS.primary,
              backgroundColor: QUIZ_COLORS.primary,
            }}
          >
            {submitQuizMutation.isPending ? "Enviando..." : "Ver Meu Plano"}
          </button>

          <button
            onClick={() => setShowEmailForm(false)}
            className="w-full mt-4 p-4 rounded-2xl font-semibold text-lg transition-all"
            style={{
              fontFamily: QUIZ_FONTS.secondary,
              backgroundColor: QUIZ_COLORS.background,
              color: QUIZ_COLORS.primary,
              border: `2px solid ${QUIZ_COLORS.primary}`,
            }}
          >
            Voltar
          </button>
        </div>
      </div>
    );
  }

  const currentQuestionData = QUIZ_QUESTIONS[currentQuestion];

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ backgroundColor: QUIZ_COLORS.background }}
    >
      <ProgressBar current={currentQuestion + 1} total={QUIZ_QUESTIONS.length} />

      <div className="flex-1 flex items-center justify-center">
        <AnimatePresence mode="wait">
          <QuizQuestion
            key={currentQuestion}
            question={currentQuestionData.question}
            options={currentQuestionData.options}
            onSelect={handleSelectAnswer}
            selectedValue={answers[currentQuestion]}
          />
        </AnimatePresence>
      </div>
    </div>
  );
}
