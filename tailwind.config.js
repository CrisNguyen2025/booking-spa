/** @type {import('tailwindcss').Config} */

// 🎨 Import colors from palette
const {
  baseColors,
  semanticColors,
  gradients,
} = require("./palette.config.js");

module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      // ============================================
      // 🌈 COLORS
      // ============================================
      colors: {
        // Base color scales
        navy: baseColors.navy,
        gold: baseColors.gold,
        cream: baseColors.cream,
        terracotta: baseColors.terracotta,
        gray: baseColors.gray,

        // Semantic colors (recommended for components)
        primary: semanticColors.primary,
        secondary: semanticColors.secondary,
        accent: semanticColors.accent,
        background: semanticColors.background,
        surface: semanticColors.surface,
        text: semanticColors.text,
        border: semanticColors.border,
        success: semanticColors.success,
        warning: semanticColors.warning,
        error: semanticColors.error,
        info: semanticColors.info,
        interactive: semanticColors.interactive,

        // Legacy zelene colors (for backward compatibility)
        zelene_blue: baseColors.navy[600],
        zelene_yellow: baseColors.gold[500],
        zelene_red: baseColors.terracotta[600],
        zelene_white: baseColors.white,
        zelene_grey: baseColors.gray[400],
        zelene_gray_6: baseColors.gray[100],
        zelene_heavy_cream: baseColors.gold[300],
        zelene_light_blue: "#407CDE",
        zelene_dark_blue: baseColors.navy[800],
        zelene_gradient_blue_start: baseColors.navy[800],
        zelene_gradient_blue_end: baseColors.navy[600],
        zelene_gradient_light_start: baseColors.cream[50],
        zelene_gradient_light_end: baseColors.gold[200],
        zelene_gradient_cream_start: baseColors.cream[50],
        zelene_gradient_cream_end: baseColors.gold[300],
        zelene_gradient_beige_start: baseColors.cream[100],
        zelene_gradient_beige_end: baseColors.cream[200],
        zelene_beige: baseColors.cream[50],
        zelene_cream: baseColors.cream[300],
        zelene_error: baseColors.terracotta[600],
      },

      // ============================================
      // 🔤 FONTS
      // ============================================
      fontFamily: {
        hneu: ['"Helvetica Neue Light"', "sans-serif"],
        didot: ['"Didot"', "serif"],
        prettywise: ["Prettywise", "sans-serif"],
        sans: ["Helvetica Neue", "sans-serif"],
      },

      // ============================================
      // 📐 SPACING (for consistency)
      // ============================================
      spacing: {
        4.5: "1.125rem",
        5.5: "1.375rem",
        13: "3.25rem",
        15: "3.75rem",
        18: "4.5rem",
        22: "5.5rem",
        26: "6.5rem",
        30: "7.5rem",
      },

      // ============================================
      // 🔘 BORDER RADIUS
      // ============================================
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },

      // ============================================
      // 🌫️ BACKDROP BLUR
      // ============================================
      backdropBlur: {
        xs: "2px",
      },

      // ============================================
      // 🎭 ANIMATION
      // ============================================
      animation: {
        "fade-in": "fadeIn 0.3s ease-out",
        "fade-out": "fadeOut 0.3s ease-in",
        "slide-up": "slideUp 0.4s ease-out",
        "slide-down": "slideDown 0.4s ease-out",
        "scale-in": "scaleIn 0.2s ease-out",
        "pulse-soft": "pulseSoft 2s infinite",
        shimmer: "shimmer 2s infinite linear",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeOut: {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideDown: {
          "0%": { transform: "translateY(-20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        scaleIn: {
          "0%": { transform: "scale(0.95)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        pulseSoft: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.7" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },

      // ============================================
      // 🖼️ BACKGROUND IMAGE
      // ============================================
      backgroundImage: {
        "slide-image": 'url("/assets/images/slide-image.png")',
        "gradient-primary": gradients.primary.css,
        "gradient-gold": gradients.gold.css,
        "gradient-cream": gradients.cream.css,
        "gradient-beige": gradients.beige.css,
        "gradient-hero": gradients.hero.css,
        "gradient-glass": gradients.glass.css,
      },

      // ============================================
      // 🔲 BOX SHADOW
      // ============================================
      boxShadow: {
        soft: "0 2px 8px rgba(16, 38, 71, 0.08)",
        medium: "0 4px 16px rgba(16, 38, 71, 0.12)",
        strong: "0 8px 24px rgba(16, 38, 71, 0.16)",
        "glow-gold": "0 0 20px rgba(210, 154, 42, 0.4)",
        "glow-primary": "0 0 20px rgba(29, 63, 117, 0.4)",
        "inner-soft": "inset 0 2px 4px rgba(16, 38, 71, 0.05)",
      },
    },

    // ============================================
    // 🔤 FONT SIZES (override base)
    // ============================================
    fontSize: {
      xs: ["0.75rem", { lineHeight: "1rem" }],
      sm: ["0.875rem", { lineHeight: "1.25rem" }],
      base: ["1rem", { lineHeight: "1.5rem" }],
      lg: ["1.125rem", { lineHeight: "1.75rem" }],
      xl: ["1.25rem", { lineHeight: "1.75rem" }],
      "2xl": ["1.5rem", { lineHeight: "2rem" }],
      "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
      "4xl": ["2.25rem", { lineHeight: "2.5rem" }],
      "5xl": ["3rem", { lineHeight: "1.16" }],
      "6xl": ["3.75rem", { lineHeight: "1.1" }],
    },

    // ============================================
    // 🔤 FONT FAMILY (base override)
    // ============================================
    fontFamily: {
      sans: ["Helvetica Neue", "sans-serif"],
    },
  },
  plugins: [],
};
