import { useState, useEffect } from "react";
import { QUIZ_COLORS, QUIZ_FONTS } from "@/constants/quiz";
import VideoPlayer from "@/components/VideoPlayer";
import YouKnewSection from "@/components/YouKnewSection";
import BackButton from "@/components/BackButton";
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
        value: 0,
        currency: "BRL",
        content_name: "Offer Clicked",
      });
    }

    if (window.gtag) {
      window.gtag("event", "purchase", {
        value: 0,
        currency: "BRL",
      });
    }
  };

  return (
    <div
      className="min-h-screen relative"
      style={{ backgroundColor: QUIZ_COLORS.background }}
    >
      <BackButton />

      <div className="max-w-2xl mx-auto px-4 py-8">
        {/* Texto explicativo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8 text-center"
        >
          <p
            className="text-lg md:text-xl"
            style={{
              fontFamily: QUIZ_FONTS.secondary,
              color: QUIZ_COLORS.text,
            }}
          >
            Assista abaixo uma breve explicação com o passo passo validado por
            milhares de mães para recuperar suas noites e conquistar a autonomia
            de sono do seu bebê.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-8"
        >
          <VideoPlayer onCtaReady={handleCtaReady} />
        </motion.div>

        {showCta && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <button
              onClick={handleCtaClick}
              className="w-full p-6 rounded-2xl font-bold text-xl text-white transition-all duration-300 hover:shadow-lg transform hover:scale-105"
              style={{
                fontFamily: QUIZ_FONTS.primary,
                backgroundColor: QUIZ_COLORS.primary,
              }}
            >
              🎁 Quero Acessar a Oferta Especial
            </button>
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="grid grid-cols-3 gap-4 text-center py-8"
        >
          {[
            { icon: "✓", text: "100% Seguro" },
            { icon: "🔒", text: "Privado" },
            { icon: "⚡", text: "Rápido" },
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-4 rounded-2xl"
              style={{ backgroundColor: QUIZ_COLORS.border }}
            >
              <div
                className="text-2xl mb-2"
                style={{ fontFamily: QUIZ_FONTS.primary }}
              >
                {item.icon}
              </div>
              <p
                className="text-sm font-semibold"
                style={{
                  fontFamily: QUIZ_FONTS.secondary,
                  color: QUIZ_COLORS.text,
                }}
              >
                {item.text}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* You Knew Section */}
      <YouKnewSection imageUrls={[]} />
    </div>
  );
}
