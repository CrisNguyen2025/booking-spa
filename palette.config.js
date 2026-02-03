const baseColors = {
  navy: {
    50: "#E8EDF5",
    100: "#C5D1E5",
    200: "#9EB4D3",
    300: "#7797C1",
    400: "#5982B3",
    500: "#3B6EA5",
    600: "#1D3F75",
    700: "#153260",
    800: "#102647",
    900: "#0A1A30",
    950: "#050D18",
  },
  gold: {
    50: "#FFF9E8",
    100: "#FFEFC5",
    200: "#FFE189",
    300: "#FCDCAB",
    400: "#E8B94D",
    500: "#D29A2A",
    600: "#B8841F",
    700: "#9A6D18",
    800: "#7D5712",
    900: "#61420D",
    950: "#3D2908",
  },
  cream: {
    50: "#FFFDF9",
    100: "#FFF9EF",
    200: "#FEF1DD",
    300: "#FDEFDC",
    400: "#FEE6BE",
    500: "#F5DDB2",
    600: "#E8CFA2",
    700: "#D9BE8E",
    800: "#C5A876",
    900: "#A68C5B",
    950: "#7D6942",
  },
  terracotta: {
    50: "#FEF3F2",
    100: "#FDE7E4",
    200: "#FBD0CA",
    300: "#F7AEA4",
    400: "#F18476",
    500: "#E65A4A",
    600: "#B84E44",
    700: "#9A3F38",
    800: "#7D3530",
    900: "#662E2A",
    950: "#381614",
  },
  gray: {
    50: "#F9FAFB",
    100: "#F2F2F2",
    200: "#E5E7EB",
    300: "#D1D5DB",
    400: "#A7A7A7",
    500: "#6B7280",
    600: "#4B5563",
    700: "#374151",
    800: "#1F2937",
    900: "#111827",
    950: "#030712",
  },
  white: "#FFFFFF",
  black: "#000000",
};

const semanticColors = {
  primary: {
    DEFAULT: baseColors.navy[600],
    light: baseColors.navy[400],
    dark: baseColors.navy[800],
    foreground: baseColors.white,
    muted: baseColors.navy[100],
  },
  secondary: {
    DEFAULT: baseColors.gold[500],
    light: baseColors.gold[300],
    dark: baseColors.gold[700],
    foreground: baseColors.navy[900],
    muted: baseColors.gold[100],
  },
  accent: {
    DEFAULT: baseColors.gold[400],
    light: baseColors.gold[200],
    dark: baseColors.gold[600],
    foreground: baseColors.navy[800],
  },
};

const gradients = {
  primary: {
    css: "linear-gradient(135deg, #102647 0%, #1D3F75 100%)",
  },
  gold: {
    css: "linear-gradient(135deg, #FFFDF9 0%, #FFE189 100%)",
  },
  cream: {
    css: "linear-gradient(135deg, #FFFDF9 0%, #FEE6BE 100%)",
  },
  beige: {
    css: "linear-gradient(135deg, #FFF9EF 0%, #FEF1DD 100%)",
  },
  hero: {
    css: "linear-gradient(135deg, #102647 0%, #1D3F75 50%, #D29A2A 100%)",
  },
  glass: {
    css: "linear-gradient(135deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0.05) 100%)",
  },
};

module.exports = { baseColors, semanticColors, gradients };
