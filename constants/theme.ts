/**
 * 🎨 Theme Constants - Zelene Spa & Wellness
 *
 * Centralized theme tokens derived from palette.ts
 * Use these for React Native StyleSheet and non-Tailwind styling
 */

import {
  baseColors,
  darkTheme,
  gradients,
  lightTheme,
  semanticColors,
  shadows,
} from "@/styles/palette";
import { Platform } from "react-native";

// ============================================
// 🌓 COLOR SCHEMES (Light & Dark Mode)
// ============================================

export const Colors = {
  light: {
    // Text
    text: lightTheme.text.DEFAULT,
    textPrimary: lightTheme.text.primary,
    textSecondary: lightTheme.text.secondary,
    textTertiary: lightTheme.text.tertiary,
    textMuted: lightTheme.text.muted,
    textInverse: lightTheme.text.inverse,
    textLink: lightTheme.text.link,

    // Background
    background: lightTheme.background.DEFAULT,
    backgroundPaper: lightTheme.background.paper,
    backgroundSubtle: lightTheme.background.subtle,
    backgroundMuted: lightTheme.background.muted,
    backgroundInverse: lightTheme.background.inverse,

    // Primary (Navy)
    primary: semanticColors.primary.DEFAULT,
    primaryLight: semanticColors.primary.light,
    primaryDark: semanticColors.primary.dark,
    primaryForeground: semanticColors.primary.foreground,

    // Secondary (Gold)
    secondary: semanticColors.secondary.DEFAULT,
    secondaryLight: semanticColors.secondary.light,
    secondaryDark: semanticColors.secondary.dark,
    secondaryForeground: semanticColors.secondary.foreground,

    // Accent
    accent: semanticColors.accent.DEFAULT,
    accentLight: semanticColors.accent.light,
    accentDark: semanticColors.accent.dark,

    // Surface
    surface: semanticColors.surface.DEFAULT,
    surfaceRaised: semanticColors.surface.raised,
    surfaceOverlay: semanticColors.surface.overlay,
    surfaceGlass: semanticColors.surface.glass,

    // Border
    border: semanticColors.border.DEFAULT,
    borderLight: semanticColors.border.light,
    borderDark: semanticColors.border.dark,
    borderFocus: semanticColors.border.focus,
    borderAccent: semanticColors.border.accent,

    // Status
    success: semanticColors.success.DEFAULT,
    successLight: semanticColors.success.light,
    warning: semanticColors.warning.DEFAULT,
    warningLight: semanticColors.warning.light,
    error: semanticColors.error.DEFAULT,
    errorLight: semanticColors.error.light,
    info: semanticColors.info.DEFAULT,
    infoLight: semanticColors.info.light,

    // Interactive
    tint: semanticColors.primary.DEFAULT,
    icon: baseColors.gray[500],
    tabIconDefault: baseColors.gray[500],
    tabIconSelected: semanticColors.primary.DEFAULT,
  },

  dark: {
    // Text
    text: darkTheme.text.DEFAULT,
    textPrimary: darkTheme.text.primary,
    textSecondary: darkTheme.text.secondary,
    textTertiary: darkTheme.text.tertiary,
    textMuted: darkTheme.text.muted,
    textInverse: darkTheme.text.inverse,
    textLink: darkTheme.text.link,

    // Background
    background: darkTheme.background.DEFAULT,
    backgroundPaper: darkTheme.background.paper,
    backgroundSubtle: darkTheme.background.subtle,
    backgroundMuted: darkTheme.background.muted,
    backgroundInverse: darkTheme.background.inverse,

    // Primary
    primary: darkTheme.primary.DEFAULT,
    primaryLight: darkTheme.primary.light,
    primaryDark: darkTheme.primary.dark,
    primaryForeground: darkTheme.primary.foreground,

    // Secondary (Gold stands out more in dark mode)
    secondary: semanticColors.secondary.DEFAULT,
    secondaryLight: semanticColors.secondary.light,
    secondaryDark: semanticColors.secondary.dark,
    secondaryForeground: semanticColors.secondary.foreground,

    // Accent
    accent: baseColors.gold[400],
    accentLight: baseColors.gold[300],
    accentDark: baseColors.gold[500],

    // Surface
    surface: darkTheme.surface.DEFAULT,
    surfaceRaised: darkTheme.surface.raised,
    surfaceOverlay: darkTheme.surface.overlay,
    surfaceGlass: darkTheme.surface.glass,

    // Border
    border: darkTheme.border.DEFAULT,
    borderLight: darkTheme.border.light,
    borderDark: darkTheme.border.dark,
    borderFocus: darkTheme.border.focus,
    borderAccent: darkTheme.border.accent,

    // Status (same as light for consistency)
    success: semanticColors.success.DEFAULT,
    successLight: semanticColors.success.dark,
    warning: semanticColors.warning.DEFAULT,
    warningLight: semanticColors.warning.dark,
    error: semanticColors.error.DEFAULT,
    errorLight: semanticColors.error.dark,
    info: semanticColors.info.DEFAULT,
    infoLight: semanticColors.info.dark,

    // Interactive
    tint: baseColors.white,
    icon: baseColors.gray[400],
    tabIconDefault: baseColors.gray[400],
    tabIconSelected: baseColors.white,
  },
} as const;

// ============================================
// 🔤 FONTS
// ============================================

export const Fonts = Platform.select({
  ios: {
    sans: "system-ui",
    serif: "ui-serif",
    rounded: "ui-rounded",
    mono: "ui-monospace",
    display: "Didot",
    heading: "Prettywise",
  },
  android: {
    sans: "normal",
    serif: "serif",
    rounded: "normal",
    mono: "monospace",
    display: "Didot",
    heading: "Prettywise",
  },
  web: {
    sans: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    serif: "Georgia, 'Times New Roman', serif",
    rounded:
      "'SF Pro Rounded', 'Hiragino Maru Gothic ProN', Meiryo, 'MS PGothic', sans-serif",
    mono: "SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
    display: "Didot, Georgia, serif",
    heading: "'Prettywise', 'Helvetica Neue', sans-serif",
  },
});

// ============================================
// 📐 SPACING
// ============================================

export const Spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  "2xl": 48,
  "3xl": 64,
  "4xl": 96,
} as const;

// ============================================
// 🔘 BORDER RADIUS
// ============================================

export const BorderRadius = {
  none: 0,
  sm: 4,
  md: 8,
  lg: 12,
  xl: 16,
  "2xl": 24,
  "3xl": 32,
  full: 9999,
} as const;

// ============================================
// 📐 SHADOWS (re-export)
// ============================================

export { shadows as Shadows };

// ============================================
// 🎨 GRADIENTS (re-export)
// ============================================

export { gradients as Gradients };

// ============================================
// 📦 RE-EXPORT PALETTE
// ============================================

export {
  baseColors,
  darkTheme,
  lightTheme,
  semanticColors,
} from "@/styles/palette";

// ============================================
// 🔧 TYPE EXPORTS
// ============================================

export type ColorScheme = keyof typeof Colors;
export type ThemeColors = typeof Colors.light;
