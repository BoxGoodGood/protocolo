import { useState, useEffect } from "react";
import { QUIZ_COLORS, QUIZ_FONTS } from "@/constants/quiz";
import VideoPlayer from "@/components/VideoPlayer";
import YouKnewSection from "@/components/YouKnewSection";
import { motion } from "framer-motion";

declare global {
  interface Window {
    fbq?: (action: string, event: string, data?: Record<string, unknown>) => void;
    gtag?: (action: string, event: string, data?: Record<string, unknown>) => void;
  }
}

export default function Results() {
  const [email, setEmail] = useState("");
  const [showCta, setShowCta] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const emailParam = params.get("email");
    if (emailParam) {
      setEmail(decodeURIComponent(emailParam));
    }

    trackPixels();
  }, []);

  const trackPixels = () => {
    if (window.fbq) {
      window.fbq("track", "ViewContent", {
        content_name: "Quiz Results",
        content_type: "product",
      });
    }

    if (window.gtag) {
      window.gtag("event", "view_item", {
        items: [
          {
            item_name: "Quiz Results Page",
            item_category: "engagement",
          },
        ],
      });
    }
  };

  const handleCtaReady = () => {
    setShowCta(true);
    if (window.fbq) {
      window.fbq("track", "AddToCart", {
        content_name: "CTA Revealed",
      });
    }
  };

  const handleCtaClick = () => {
    if (window.fbq) {
      window.fbq("track", "Purchase", {
        value: 47.90,
        currency: "BRL",
        content_name: "Offer Clicked",
      });
    }

    if (window.gtag) {
      window.gtag("event", "purchase", {
        value: 47.90,
        currency: "BRL",
      });
    }
  };

  return (
    <div
      className="min-h-screen relative"
      style={{ backgroundColor: QUIZ_COLORS.background }}
    >
      <div className="max-w-2xl mx-auto px-4 py-8 md:py-16">
        {/* Texto explicativo - Hidden after CTA */}
        {!showCta && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-12 text-center"
          >
            <p
              className="text-lg md:text-xl leading-relaxed"
              style={{
                fontFamily: QUIZ_FONTS.secondary,
                color: QUIZ_COLORS.text,
              }}
            >
              Assista abaixo ao{" "}
              <span style={{ color: "#4868f6", fontWeight: "600" }}>
                passo a passo validado
              </span>{" "}
              por milhares de mães para recuperar suas noites e conquistar a{" "}
              <span style={{ color: "#4868f6", fontWeight: "600" }}>
                autonomia de sono
              </span>{" "}
              do seu bebê.
            </p>
          </motion.div>
        )}

        {/* VSL Video Player - Hidden after CTA */}
        {!showCta && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-8"
          >
            <VideoPlayer 
              videoUrl="https://player.vimeo.com/video/1159249817?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1"
              onCtaReady={handleCtaReady}
              isVertical={true}
            />
          </motion.div>
        )}

        {/* Conteúdo pós-vídeo - Only shown after CTA */}
        {showCta && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Headline - Foco em Validação */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="mb-4 md:mb-6 text-center"
            >
              <h1
                className="text-3xl md:text-5xl font-black"
                style={{
                  fontFamily: QUIZ_FONTS.primary,
                  color: "#4868f6",
                  lineHeight: "1.1",
                }}
              >
                🎉 Seu acesso foi liberado! 🎉
              </h1>
            </motion.div>

            {/* Subheadline */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mb-6 md:mb-8 text-center px-2"
            >
              <p
                className="text-base md:text-xl leading-relaxed"
                style={{
                  fontFamily: QUIZ_FONTS.secondary,
                  color: QUIZ_COLORS.text,
                }}
              >
                Seu acesso ao Protocolo Completo + Bônus Grátis já está pronto.
              </p>
            </motion.div>

            {/* Texto de Preço com Desconto */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mb-6 md:mb-8 text-center"
            >
              <div className="mb-2 md:mb-3">
                <p
                  className="text-xs md:text-base whitespace-nowrap"
                  style={{
                    fontFamily: QUIZ_FONTS.secondary,
                    color: "#999",
                  }}
                >
                  De{" "}
                  <span
                    style={{
                      textDecoration: "line-through",
                      fontWeight: "600",
                    }}
                  >
                    R$ 297,90
                  </span>
                </p>
              </div>
              <div>
                <p
                  className="text-lg md:text-2xl font-bold mb-1 md:mb-2 whitespace-nowrap inline-block px-3 py-1 rounded"
                  style={{
                    fontFamily: QUIZ_FONTS.primary,
                    color: "white",
                    backgroundColor: "#4868f6",
                  }}
                >
                  Hoje por apenas:
                </p>
                <p
                  className="text-2xl md:text-4xl font-black mt-2 md:mt-3"
                  style={{
                    fontFamily: QUIZ_FONTS.primary,
                    color: "#22c55e",
                    lineHeight: "1.1",
                  }}
                >
                  R$ 47,90 à vista
                </p>
              </div>
            </motion.div>

            {/* Botão CTA com Glow */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mb-4 md:mb-6"
            >
              <style>{`
                @keyframes pulse-glow {
                  0%, 100% {
                    opacity: 1;
                    box-shadow: 0 0 20px rgba(34, 197, 94, 0.5), 0 0 40px rgba(34, 197, 94, 0.3), inset 0 0 20px rgba(255, 255, 255, 0.2);
                  }
                  50% {
                    opacity: 0.95;
                    box-shadow: 0 0 30px rgba(34, 197, 94, 0.7), 0 0 60px rgba(34, 197, 94, 0.4), inset 0 0 30px rgba(255, 255, 255, 0.3);
                  }
                }
                .pulse-button {
                  animation: pulse-glow 2s ease-in-out infinite;
                }
              `}</style>
              <button
                onClick={handleCtaClick}
                className="pulse-button w-full p-4 md:p-6 rounded-2xl font-bold transition-all duration-300 hover:scale-105 active:scale-95"
                style={{
                  fontFamily: QUIZ_FONTS.primary,
                  backgroundColor: "#25D366",
                  color: "white",
                }}
              >
                <div className="text-lg md:text-2xl font-black mb-1 md:mb-2 leading-tight">
                  QUERO MEU ACESSO AGORA
                </div>
                <div
                  className="text-xs md:text-base font-semibold"
                  style={{
                    opacity: 0.95,
                  }}
                >
                  Oferta Única: R$ 47,90 + Bônus Grátis
                </div>
              </button>
            </motion.div>

            {/* Texto de Segurança e Métodos de Pagamento */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-center mb-8 md:mb-12 px-2"
            >
              <p
                className="text-xs md:text-base leading-relaxed mb-4"
                style={{
                  fontFamily: QUIZ_FONTS.secondary,
                  color: "#666",
                }}
              >
                Compra 100% Segura • Acesso Imediato • Garantia de 7 dias
              </p>
              
              {/* Payment Methods */}
              <div className="flex justify-center items-center gap-3 md:gap-4 flex-wrap">
                <div className="flex items-center justify-center w-12 h-8 md:w-14 md:h-10 bg-white rounded border border-gray-200">
                  <span className="text-xs md:text-sm font-bold text-blue-600">PIX</span>
                </div>
                <div className="flex items-center justify-center w-12 h-8 md:w-14 md:h-10 bg-white rounded border border-gray-200">
                  <span className="text-xs md:text-sm font-bold" style={{ color: "#1434CB" }}>VISA</span>
                </div>
                <div className="flex items-center justify-center w-12 h-8 md:w-14 md:h-10 bg-white rounded border border-gray-200">
                  <span className="text-xs md:text-sm font-bold" style={{ color: "#EB001B" }}>MC</span>
                </div>
                <div className="flex items-center justify-center w-12 h-8 md:w-14 md:h-10 bg-white rounded border border-gray-200">
                  <span className="text-xs md:text-sm font-bold" style={{ color: "#5C3D9F" }}>ELO</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>

      {/* You Knew Section - always at bottom when CTA is shown */}
      {showCta && (
        <YouKnewSection imageUrls={[
          "https://files.manuscdn.com/user_upload_by_module/session_file/310419663029970056/UKttMSvfEwuMKAJj.webp",
        ]} />
      )}
    </div>
  );
}
