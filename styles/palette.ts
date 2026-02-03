/**
 * 🎨 Modern Theme Palette - Zelene Spa & Wellness
 *
 * Design Philosophy:
 * - Luxurious & Premium feel
 * - Calming spa vibes with modern aesthetics
 * - High contrast for accessibility
 * - Semantic naming for easy maintenance
 */

// ============================================
// 🌈 BASE COLORS (Primitives)
// ============================================

export const baseColors = {
  // Navy Blues - Primary brand color
  navy: {
    50: "#E8EDF5",
    100: "#C5D1E5",
    200: "#9EB4D3",
    300: "#7797C1",
    400: "#5982B3",
    500: "#3B6EA5", // Main
    600: "#1D3F75", // Brand Navy
    700: "#153260",
    800: "#102647", // Dark Navy
    900: "#0A1A30",
    950: "#050D18",
  },

  // Gold/Amber - Accent color
  gold: {
    50: "#FFF9E8",
    100: "#FFEFC5",
    200: "#FFE189", // Light Gold
    300: "#FCDCAB", // Heavy Cream
    400: "#E8B94D",
    500: "#D29A2A", // Brand Gold
    600: "#B8841F",
    700: "#9A6D18",
    800: "#7D5712",
    900: "#61420D",
    950: "#3D2908",
  },

  // Cream/Beige - Background tones
  cream: {
    50: "#FFFDF9", // Lightest cream
    100: "#FFF9EF",
    200: "#FEF1DD",
    300: "#FDEFDC", // Brand Cream
    400: "#FEE6BE",
    500: "#F5DDB2",
    600: "#E8CFA2",
    700: "#D9BE8E",
    800: "#C5A876",
    900: "#A68C5B",
    950: "#7D6942",
  },

  // Terracotta/Red - Error & Accent
  terracotta: {
    50: "#FEF3F2",
    100: "#FDE7E4",
    200: "#FBD0CA",
    300: "#F7AEA4",
    400: "#F18476",
    500: "#E65A4A",
    600: "#B84E44", // Brand Red
    700: "#9A3F38",
    800: "#7D3530",
    900: "#662E2A",
    950: "#381614",
  },

  // Neutral Gray
  gray: {
    50: "#F9FAFB",
    100: "#F2F2F2", // Light Gray
    200: "#E5E7EB",
    300: "#D1D5DB",
    400: "#A7A7A7", // Brand Gray
    500: "#6B7280",
    600: "#4B5563",
    700: "#374151",
    800: "#1F2937",
    900: "#111827",
    950: "#030712",
  },

  // Pure colors
  white: "#FFFFFF",
  black: "#000000",
  transparent: "transparent",
} as const;

// ============================================
// 🎯 SEMANTIC COLORS (Design Tokens)
// ============================================

export const semanticColors = {
  // Primary - Main brand actions
  primary: {
    DEFAULT: baseColors.navy[600],
    light: baseColors.navy[400],
    dark: baseColors.navy[800],
    foreground: baseColors.white,
    muted: baseColors.navy[100],
  },

  // Secondary - Supporting actions
  secondary: {
    DEFAULT: baseColors.gold[500],
    light: baseColors.gold[300],
    dark: baseColors.gold[700],
    foreground: baseColors.navy[900],
    muted: baseColors.gold[100],
  },

  // Accent - Highlights & CTAs
  accent: {
    DEFAULT: baseColors.gold[400],
    light: baseColors.gold[200],
    dark: baseColors.gold[600],
    foreground: baseColors.navy[800],
  },

  // Background tokens
  background: {
    DEFAULT: baseColors.cream[50],
    paper: baseColors.white,
    subtle: baseColors.cream[100],
    muted: baseColors.cream[200],
    inverse: baseColors.navy[800],
  },

  // Surface tokens (cards, modals, etc.)
  surface: {
    DEFAULT: baseColors.white,
    raised: baseColors.cream[50],
    overlay: "rgba(16, 38, 71, 0.5)",
    glass: "rgba(255, 255, 255, 0.8)",
  },

  // Text colors
  text: {
    DEFAULT: baseColors.navy[900],
    primary: baseColors.navy[800],
    secondary: baseColors.gray[600],
    tertiary: baseColors.gray[400],
    muted: baseColors.gray[500],
    inverse: baseColors.white,
    link: baseColors.navy[600],
  },

  // Border colors
  border: {
    DEFAULT: baseColors.gray[200],
    light: baseColors.gray[100],
    dark: baseColors.gray[300],
    focus: baseColors.navy[500],
    accent: baseColors.gold[400],
  },

  // Status colors
  success: {
    DEFAULT: "#10B981",
    light: "#D1FAE5",
    dark: "#047857",
    foreground: baseColors.white,
  },

  warning: {
    DEFAULT: "#F59E0B",
    light: "#FEF3C7",
    dark: "#D97706",
    foreground: baseColors.navy[900],
  },

  error: {
    DEFAULT: baseColors.terracotta[600],
    light: baseColors.terracotta[100],
    dark: baseColors.terracotta[800],
    foreground: baseColors.white,
  },

  info: {
    DEFAULT: "#3B82F6",
    light: "#DBEAFE",
    dark: "#1D4ED8",
    foreground: baseColors.white,
  },

  // Interactive states
  interactive: {
    hover: baseColors.navy[700],
    active: baseColors.navy[800],
    disabled: baseColors.gray[300],
    focus: baseColors.navy[500],
  },
} as const;

// ============================================
// 🌓 LIGHT & DARK MODE THEMES
// ============================================

export const lightTheme = {
  ...semanticColors,
  // Override for light mode specifics
  background: {
    DEFAULT: baseColors.cream[50],
    paper: baseColors.white,
    subtle: baseColors.cream[100],
    muted: baseColors.cream[200],
    inverse: baseColors.navy[800],
  },
  text: {
    DEFAULT: baseColors.navy[900],
    primary: baseColors.navy[800],
    secondary: baseColors.gray[600],
    tertiary: baseColors.gray[400],
    muted: baseColors.gray[500],
    inverse: baseColors.white,
    link: baseColors.navy[600],
  },
} as const;

export const darkTheme = {
  ...semanticColors,
  // Override for dark mode specifics
  primary: {
    DEFAULT: baseColors.navy[400],
    light: baseColors.navy[300],
    dark: baseColors.navy[600],
    foreground: baseColors.white,
    muted: baseColors.navy[800],
  },
  background: {
    DEFAULT: baseColors.navy[900],
    paper: baseColors.navy[800],
    subtle: baseColors.navy[850] || "#0F2036",
    muted: baseColors.navy[700],
    inverse: baseColors.cream[50],
  },
  text: {
    DEFAULT: baseColors.cream[50],
    primary: baseColors.cream[100],
    secondary: baseColors.gray[400],
    tertiary: baseColors.gray[500],
    muted: baseColors.gray[500],
    inverse: baseColors.navy[900],
    link: baseColors.gold[400],
  },
  surface: {
    DEFAULT: baseColors.navy[800],
    raised: baseColors.navy[700],
    overlay: "rgba(0, 0, 0, 0.6)",
    glass: "rgba(29, 63, 117, 0.8)",
  },
  border: {
    DEFAULT: baseColors.navy[700],
    light: baseColors.navy[600],
    dark: baseColors.navy[800],
    focus: baseColors.gold[500],
    accent: baseColors.gold[500],
  },
} as const;

// ============================================
// 🎨 GRADIENTS
// ============================================

export const gradients = {
  // Primary gradients
  primary: {
    start: baseColors.navy[800], // #102647
    end: baseColors.navy[600], // #1D3F75
    css: "linear-gradient(135deg, #102647 0%, #1D3F75 100%)",
  },

  // Gold/Luxury gradients
  gold: {
    start: baseColors.cream[50], // #FFFDF9
    end: baseColors.gold[200], // #FFE189
    css: "linear-gradient(135deg, #FFFDF9 0%, #FFE189 100%)",
  },

  // Cream/Soft gradients
  cream: {
    start: baseColors.cream[50], // #FFFDF9
    end: baseColors.gold[300], // #FEE6BE
    css: "linear-gradient(135deg, #FFFDF9 0%, #FEE6BE 100%)",
  },

  // Beige/Warm gradients
  beige: {
    start: baseColors.cream[100], // #FFF9EF
    end: baseColors.cream[200], // #FEF1DD
    css: "linear-gradient(135deg, #FFF9EF 0%, #FEF1DD 100%)",
  },

  // Hero/Premium gradient
  hero: {
    start: baseColors.navy[800],
    middle: baseColors.navy[600],
    end: baseColors.gold[500],
    css: "linear-gradient(135deg, #102647 0%, #1D3F75 50%, #D29A2A 100%)",
  },

  // Glass effect
  glass: {
    start: "rgba(255, 255, 255, 0.25)",
    end: "rgba(255, 255, 255, 0.05)",
    css: "linear-gradient(135deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0.05) 100%)",
  },
} as const;

// ============================================
// 📐 SHADOWS
// ============================================

export const shadows = {
  sm: {
    shadowColor: baseColors.navy[900],
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  md: {
    shadowColor: baseColors.navy[900],
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  lg: {
    shadowColor: baseColors.navy[900],
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.15,
    shadowRadius: 15,
    elevation: 6,
  },
  xl: {
    shadowColor: baseColors.navy[900],
    shadowOffset: { width: 0, height: 20 },
    shadowOpacity: 0.2,
    shadowRadius: 25,
    elevation: 10,
  },
  glow: {
    shadowColor: baseColors.gold[500],
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.4,
    shadowRadius: 20,
    elevation: 8,
  },
} as const;

// ============================================
// 📦 EXPORT ALL (Default Palette)
// ============================================

export const palette = {
  base: baseColors,
  semantic: semanticColors,
  light: lightTheme,
  dark: darkTheme,
  gradients,
  shadows,
} as const;

export default palette;

// ============================================
// 🔧 TYPE EXPORTS
// ============================================

export type BaseColors = typeof baseColors;
export type SemanticColors = typeof semanticColors;
export type LightTheme = typeof lightTheme;
export type DarkTheme = typeof darkTheme;
export type Gradients = typeof gradients;
export type Shadows = typeof shadows;
export type Palette = typeof palette;
