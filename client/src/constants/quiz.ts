/**
 * Quiz configuration and constants
 */

export const QUIZ_QUESTIONS = [
  {
    id: 1,
    question: "Qual a idade do seu bebê?",
    type: "single-choice",
    options: [
      { value: "0-6 months", label: "0 a 6 meses" },
      { value: "6-12 months", label: "6 a 12 meses" },
      { value: "1-2 years", label: "1 a 2 anos" },
      { value: "2+ years", label: "Mais de 2 anos" },
    ],
  },
  {
    id: 2,
    question: "Quantas vezes seu bebê acorda à noite?",
    type: "single-choice",
    options: [
      { value: "1-2 times", label: "1 a 2 vezes" },
      { value: "3-4 times", label: "3 a 4 vezes" },
      { value: "5+ times", label: "5 ou mais vezes" },
      { value: "sleeps through", label: "Dorme a noite toda" },
    ],
  },
  {
    id: 3,
    question: "Como seu bebê costuma adormecer na maioria das vezes?",
    type: "single-choice",
    options: [
      { value: "nursing", label: "Mamando (Peito ou mamadeira)" },
      { value: "rocking", label: "Sendo balançado/No colo" },
      { value: "car", label: "No carrinho ou passeando de carro" },
      { value: "alone", label: "Sozinho no berço (mas acorda logo em seguida)" },
    ],
  },
  {
    id: 4,
    question: "Seu bebê tem uma rotina de sono estabelecida?",
    type: "single-choice",
    options: [
      { value: "yes", label: "Sim, muito estabelecida" },
      { value: "somewhat", label: "Mais ou menos" },
      { value: "no", label: "Não, nenhuma rotina" },
      { value: "trying", label: "Estou tentando criar" },
    ],
  },
  {
    id: 5,
    question: "Como você se sente sobre a situação de sono do seu bebê?",
    type: "single-choice",
    options: [
      { value: "very_tired", label: "Muito cansada e desesperada" },
      { value: "tired", label: "Cansada, mas esperançosa" },
      { value: "okay", label: "Tudo bem, mas gostaria de melhorar" },
      { value: "satisfied", label: "Satisfeita com a situação" },
    ],
  },
  {
    id: 6,
    question: "Já tentou outros métodos para melhorar o sono do seu bebê?",
    type: "single-choice",
    options: [
      { value: "yes_many", label: "Sim, muitos métodos" },
      { value: "yes_few", label: "Sim, alguns métodos" },
      { value: "no", label: "Não, é a primeira vez" },
      { value: "considering", label: "Estou pesquisando opções" },
    ],
  },
];

export const QUIZ_COLORS = {
  primary: "#B8E5F5", // Azul bebê
  secondary: "#F5B8D8", // Rosa suave
  accent: "#E8D5F2", // Lavanda
  background: "#FFFFFF",
  text: "#2D3436",
  lightText: "#636E72",
  border: "#DFE6E9",
};

export const QUIZ_FONTS = {
  primary: "Poppins, sans-serif",
  secondary: "Nunito, sans-serif",
};

// Delay for CTA button to appear (in seconds)
export const CTA_DELAY = 180; // 3 minutes

// Video player configuration
export const VIDEO_CONFIG = {
  autoplay: false,
  controls: true,
  muted: false,
  width: "100%",
  height: "auto",
};
