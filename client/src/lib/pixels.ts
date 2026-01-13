/**
 * Pixel tracking configuration and helpers
 * This file provides utilities for Facebook Pixel and Google Analytics tracking
 */

declare global {
  interface Window {
    fbq?: (action: string, event: string, data?: Record<string, unknown>) => void;
    gtag?: (action: string, event: string, data?: Record<string, unknown>) => void;
    dataLayer?: unknown[];
  }
}

/**
 * Initialize Facebook Pixel
 * Add your Facebook Pixel ID to the environment variables
 * VITE_FACEBOOK_PIXEL_ID=YOUR_PIXEL_ID
 */
export function initFacebookPixel(pixelId?: string) {
  if (!pixelId || typeof window === "undefined") return;

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://connect.facebook.net/en_US/fbevents.js`;
  document.head.appendChild(script);

  window.fbq = window.fbq || function () {
    (window.fbq as any).callMethod
      ? (window.fbq as any).callMethod.apply(window.fbq, arguments as any)
      : (window.fbq as any).queue.push(arguments);
  };
  (window.fbq as any).push = window.fbq;
  (window.fbq as any).loaded = true;
  (window.fbq as any).version = "2.0";
  (window.fbq as any).queue = [];

  window.fbq("init", pixelId);
  window.fbq("track", "PageView");
}

/**
 * Initialize Google Analytics
 * Add your Google Analytics ID to the environment variables
 * VITE_GOOGLE_ANALYTICS_ID=YOUR_GA_ID
 */
export function initGoogleAnalytics(gaId?: string) {
  if (!gaId || typeof window === "undefined") return;

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  window.gtag = function () {
    (window.dataLayer as any).push(arguments);
  };
  (window.gtag as any)("js", new Date());
  (window.gtag as any)("config", gaId);
}

/**
 * Track quiz start event
 */
export function trackQuizStart() {
  if (window.fbq) {
    window.fbq("track", "ViewContent", {
      content_name: "Quiz Started",
      content_type: "product",
    });
  }

  if (window.gtag) {
    window.gtag("event", "view_item", {
      items: [
        {
          item_name: "Quiz Start",
          item_category: "engagement",
        },
      ],
    });
  }
}

/**
 * Track quiz question answered
 */
export function trackQuestionAnswered(questionNumber: number) {
  if (window.fbq) {
    window.fbq("track", "ViewContent", {
      content_name: `Question ${questionNumber} Answered`,
      content_type: "product",
    });
  }

  if (window.gtag) {
    window.gtag("event", "view_item", {
      items: [
        {
          item_name: `Question ${questionNumber}`,
          item_category: "quiz_progress",
        },
      ],
    });
  }
}

/**
 * Track quiz completion
 */
export function trackQuizCompletion(email: string) {
  if (window.fbq) {
    window.fbq("track", "Lead", {
      content_name: "Quiz Completed",
      value: 0,
      currency: "BRL",
    });
  }

  if (window.gtag) {
    window.gtag("event", "generate_lead", {
      value: 0,
      currency: "BRL",
      content_name: "Quiz Completion",
    });
  }
}

/**
 * Track results page view
 */
export function trackResultsPageView() {
  if (window.fbq) {
    window.fbq("track", "ViewContent", {
      content_name: "Results Page",
      content_type: "product",
    });
  }

  if (window.gtag) {
    window.gtag("event", "view_item", {
      items: [
        {
          item_name: "Results Page",
          item_category: "engagement",
        },
      ],
    });
  }
}

/**
 * Track CTA button appearance
 */
export function trackCtaAppearance() {
  if (window.fbq) {
    window.fbq("track", "AddToCart", {
      content_name: "CTA Button Appeared",
    });
  }

  if (window.gtag) {
    window.gtag("event", "add_to_cart", {
      items: [
        {
          item_name: "CTA Button",
          item_category: "conversion",
        },
      ],
    });
  }
}

/**
 * Track CTA button click
 */
export function trackCtaClick() {
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
      content_name: "Offer Clicked",
    });
  }
}
