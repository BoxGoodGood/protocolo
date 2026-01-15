import { useState, useEffect, useRef } from "react";
import { QUIZ_COLORS, QUIZ_FONTS, CTA_DELAY } from "@/constants/quiz";
import { motion } from "framer-motion";

interface VideoPlayerProps {
  videoUrl?: string;
  onCtaReady: () => void;
}

export default function VideoPlayer({ videoUrl, onCtaReady }: VideoPlayerProps) {
  const [elapsedTime, setElapsedTime] = useState(0);
  const [isCtaVisible, setIsCtaVisible] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Start tracking video time
    intervalRef.current = setInterval(() => {
      if (videoRef.current) {
        const currentTime = Math.floor(videoRef.current.currentTime);
        setElapsedTime(currentTime);

        // Show CTA when delay is reached
        if (currentTime >= CTA_DELAY && !isCtaVisible) {
          setIsCtaVisible(true);
          onCtaReady();
        }
      }
    }, 100);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isCtaVisible]);

  // Separate effect to call onCtaReady when CTA becomes visible
  useEffect(() => {
    if (isCtaVisible) {
      onCtaReady();
    }
  }, [isCtaVisible, onCtaReady]);

  const minutes = Math.floor(elapsedTime / 60);
  const seconds = elapsedTime % 60;
  const delayMinutes = Math.floor(CTA_DELAY / 60);
  const delaySeconds = CTA_DELAY % 60;

  return (
    <div className="w-full">
      <div className="relative bg-black rounded-2xl overflow-hidden mb-6">
        {videoUrl ? (
          <video
            ref={videoRef}
            src={videoUrl}
            controls
            autoPlay
            className="w-full h-auto max-h-96"
            style={{ aspectRatio: "16/9" }}
          />
        ) : (
          <div
            className="w-full h-96 flex items-center justify-center text-white text-center"
            style={{ backgroundColor: QUIZ_COLORS.text }}
          >
            <div>
              <p
                style={{
                  fontFamily: QUIZ_FONTS.primary,
                  fontSize: "18px",
                }}
              >
                Vídeo será aqui
              </p>
              <p
                style={{
                  fontFamily: QUIZ_FONTS.secondary,
                  fontSize: "14px",
                  marginTop: "8px",
                }}
              >
                Hospede seu vídeo no Supabase Storage
              </p>
            </div>
          </div>
        )}

        {/* Time indicator */}
        <div
          className="absolute bottom-4 right-4 bg-black bg-opacity-70 px-3 py-1 rounded-full text-white text-sm"
          style={{ fontFamily: QUIZ_FONTS.secondary }}
        >
          {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
        </div>
      </div>

      {/* CTA Delay Indicator */}
      {!isCtaVisible && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 p-4 rounded-2xl text-center"
          style={{
            backgroundColor: QUIZ_COLORS.accent,
            fontFamily: QUIZ_FONTS.secondary,
            color: QUIZ_COLORS.text,
          }}
        >
          <p className="font-semibold">
            Seu botão de oferta aparecerá em{" "}
            {String(delayMinutes).padStart(2, "0")}:
            {String(delaySeconds).padStart(2, "0")}
          </p>
          <p className="text-sm mt-1">
            Tempo atual: {String(minutes).padStart(2, "0")}:
            {String(seconds).padStart(2, "0")}
          </p>
        </motion.div>
      )}

      {/* CTA Button - appears after delay */}
      {isCtaVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <button
            className="w-full p-4 rounded-2xl font-bold text-lg text-white transition-all duration-300 hover:shadow-lg"
            style={{
              fontFamily: QUIZ_FONTS.primary,
              backgroundColor: QUIZ_COLORS.primary,
            }}
          >
            Quero Acessar a Oferta Especial
          </button>
        </motion.div>
      )}
    </div>
  );
}
