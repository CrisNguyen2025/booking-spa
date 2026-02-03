/**
 * 🎨 Palette Sample - Demo Component
 *
 * Sample component showing how to use the theme palette
 * in both NativeWind (Tailwind) and React Native StyleSheet
 */

import React from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { baseColors, semanticColors, shadows } from "./palette";

// ============================================
// 🎨 COLOR SWATCH COMPONENT
// ============================================

interface ColorSwatchProps {
  name: string;
  color: string;
  textDark?: boolean;
}

const ColorSwatch = ({ name, color, textDark = false }: ColorSwatchProps) => (
  <View style={[styles.swatch, { backgroundColor: color }, shadows.sm]}>
    <Text style={[styles.swatchText, textDark && styles.swatchTextDark]}>
      {name}
    </Text>
    <Text style={[styles.swatchHex, textDark && styles.swatchTextDark]}>
      {color}
    </Text>
  </View>
);

// ============================================
// 📦 SECTION COMPONENT
// ============================================

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

const Section = ({ title, children }: SectionProps) => (
  <View style={styles.section}>
    <Text style={styles.sectionTitle}>{title}</Text>
    <View style={styles.swatchGrid}>{children}</View>
  </View>
);

// ============================================
// 🖼️ MAIN SAMPLE COMPONENT
// ============================================

export const PaletteSample = () => {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>🎨 Zelene Theme Palette</Text>
        <Text style={styles.headerSubtitle}>
          Modern Spa & Wellness Design System
        </Text>
      </View>

      {/* Primary - Navy Blues */}
      <Section title="🌊 Primary (Navy)">
        <ColorSwatch name="50" color={baseColors.navy[50]} textDark />
        <ColorSwatch name="100" color={baseColors.navy[100]} textDark />
        <ColorSwatch name="200" color={baseColors.navy[200]} textDark />
        <ColorSwatch name="300" color={baseColors.navy[300]} textDark />
        <ColorSwatch name="400" color={baseColors.navy[400]} />
        <ColorSwatch name="500" color={baseColors.navy[500]} />
        <ColorSwatch name="600" color={baseColors.navy[600]} />
        <ColorSwatch name="700" color={baseColors.navy[700]} />
        <ColorSwatch name="800" color={baseColors.navy[800]} />
        <ColorSwatch name="900" color={baseColors.navy[900]} />
      </Section>

      {/* Secondary - Gold */}
      <Section title="✨ Secondary (Gold)">
        <ColorSwatch name="50" color={baseColors.gold[50]} textDark />
        <ColorSwatch name="100" color={baseColors.gold[100]} textDark />
        <ColorSwatch name="200" color={baseColors.gold[200]} textDark />
        <ColorSwatch name="300" color={baseColors.gold[300]} textDark />
        <ColorSwatch name="400" color={baseColors.gold[400]} textDark />
        <ColorSwatch name="500" color={baseColors.gold[500]} textDark />
        <ColorSwatch name="600" color={baseColors.gold[600]} />
        <ColorSwatch name="700" color={baseColors.gold[700]} />
        <ColorSwatch name="800" color={baseColors.gold[800]} />
        <ColorSwatch name="900" color={baseColors.gold[900]} />
      </Section>

      {/* Cream/Background */}
      <Section title="🍦 Background (Cream)">
        <ColorSwatch name="50" color={baseColors.cream[50]} textDark />
        <ColorSwatch name="100" color={baseColors.cream[100]} textDark />
        <ColorSwatch name="200" color={baseColors.cream[200]} textDark />
        <ColorSwatch name="300" color={baseColors.cream[300]} textDark />
        <ColorSwatch name="400" color={baseColors.cream[400]} textDark />
        <ColorSwatch name="500" color={baseColors.cream[500]} textDark />
        <ColorSwatch name="600" color={baseColors.cream[600]} textDark />
        <ColorSwatch name="700" color={baseColors.cream[700]} textDark />
        <ColorSwatch name="800" color={baseColors.cream[800]} />
        <ColorSwatch name="900" color={baseColors.cream[900]} />
      </Section>

      {/* Terracotta/Error */}
      <Section title="🔥 Error (Terracotta)">
        <ColorSwatch name="50" color={baseColors.terracotta[50]} textDark />
        <ColorSwatch name="100" color={baseColors.terracotta[100]} textDark />
        <ColorSwatch name="200" color={baseColors.terracotta[200]} textDark />
        <ColorSwatch name="300" color={baseColors.terracotta[300]} textDark />
        <ColorSwatch name="400" color={baseColors.terracotta[400]} />
        <ColorSwatch name="500" color={baseColors.terracotta[500]} />
        <ColorSwatch name="600" color={baseColors.terracotta[600]} />
        <ColorSwatch name="700" color={baseColors.terracotta[700]} />
        <ColorSwatch name="800" color={baseColors.terracotta[800]} />
        <ColorSwatch name="900" color={baseColors.terracotta[900]} />
      </Section>

      {/* Semantic Colors */}
      <Section title="🎯 Semantic Colors">
        <ColorSwatch name="Primary" color={semanticColors.primary.DEFAULT} />
        <ColorSwatch
          name="Secondary"
          color={semanticColors.secondary.DEFAULT}
          textDark
        />
        <ColorSwatch
          name="Accent"
          color={semanticColors.accent.DEFAULT}
          textDark
        />
        <ColorSwatch name="Success" color={semanticColors.success.DEFAULT} />
        <ColorSwatch
          name="Warning"
          color={semanticColors.warning.DEFAULT}
          textDark
        />
        <ColorSwatch name="Error" color={semanticColors.error.DEFAULT} />
        <ColorSwatch name="Info" color={semanticColors.info.DEFAULT} />
      </Section>

      {/* Sample Buttons */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>🔘 Sample Buttons</Text>
        <View style={styles.buttonRow}>
          <Pressable style={[styles.button, styles.buttonPrimary, shadows.md]}>
            <Text style={styles.buttonPrimaryText}>Primary</Text>
          </Pressable>
          <Pressable
            style={[styles.button, styles.buttonSecondary, shadows.md]}
          >
            <Text style={styles.buttonSecondaryText}>Secondary</Text>
          </Pressable>
          <Pressable style={[styles.button, styles.buttonOutline]}>
            <Text style={styles.buttonOutlineText}>Outline</Text>
          </Pressable>
        </View>
      </View>

      {/* Sample Cards */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>🃏 Sample Cards</Text>

        {/* Light Card */}
        <View style={[styles.card, styles.cardLight, shadows.md]}>
          <Text style={styles.cardTitle}>Light Surface Card</Text>
          <Text style={styles.cardDescription}>
            Perfect for content on cream backgrounds. Uses surface colors with
            soft shadows.
          </Text>
          <View style={styles.cardFooter}>
            <Pressable style={[styles.cardButton, styles.buttonPrimary]}>
              <Text style={styles.buttonPrimaryText}>Action</Text>
            </Pressable>
          </View>
        </View>

        {/* Dark Card */}
        <View style={[styles.card, styles.cardDark, shadows.lg]}>
          <Text style={styles.cardTitleLight}>Dark Premium Card</Text>
          <Text style={styles.cardDescriptionLight}>
            Premium look for highlighted content. Uses primary dark with gold
            accents.
          </Text>
          <View style={styles.cardFooter}>
            <Pressable style={[styles.cardButton, styles.buttonSecondary]}>
              <Text style={styles.buttonSecondaryText}>Learn More</Text>
            </Pressable>
          </View>
        </View>
      </View>

      {/* Usage Examples */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>📝 Usage Examples</Text>
        <View style={[styles.codeBlock, shadows.sm]}>
          <Text style={styles.codeTitle}>NativeWind (Tailwind):</Text>
          <Text style={styles.code}>
            {`<View className="bg-primary text-primary-foreground">
  <Text className="text-navy-800">Navy Text</Text>
  <Text className="text-gold-500">Gold Accent</Text>
</View>`}
          </Text>
        </View>
        <View style={[styles.codeBlock, shadows.sm]}>
          <Text style={styles.codeTitle}>React Native StyleSheet:</Text>
          <Text style={styles.code}>
            {`import { Colors, Shadows } from '@/constants/theme';
import { baseColors } from '@/app/styles/palette';

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.light.background,
    ...Shadows.md,
  },
  text: {
    color: baseColors.navy[800],
  },
});`}
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

// ============================================
// 🎨 STYLES
// ============================================

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: baseColors.cream[50],
  },
  content: {
    padding: 20,
    paddingBottom: 40,
  },

  // Header
  header: {
    marginBottom: 32,
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: "700",
    color: baseColors.navy[800],
    marginBottom: 8,
  },
  headerSubtitle: {
    fontSize: 16,
    color: baseColors.gray[500],
  },

  // Section
  section: {
    marginBottom: 32,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: baseColors.navy[700],
    marginBottom: 16,
  },

  // Swatch Grid
  swatchGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  swatch: {
    width: 80,
    height: 80,
    borderRadius: 12,
    padding: 8,
    justifyContent: "flex-end",
  },
  swatchText: {
    fontSize: 12,
    fontWeight: "600",
    color: baseColors.white,
  },
  swatchTextDark: {
    color: baseColors.navy[800],
  },
  swatchHex: {
    fontSize: 9,
    color: "rgba(255,255,255,0.8)",
    marginTop: 2,
  },

  // Buttons
  buttonRow: {
    flexDirection: "row",
    gap: 12,
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: "center",
  },
  buttonPrimary: {
    backgroundColor: semanticColors.primary.DEFAULT,
  },
  buttonPrimaryText: {
    color: baseColors.white,
    fontWeight: "600",
  },
  buttonSecondary: {
    backgroundColor: semanticColors.secondary.DEFAULT,
  },
  buttonSecondaryText: {
    color: baseColors.navy[900],
    fontWeight: "600",
  },
  buttonOutline: {
    borderWidth: 2,
    borderColor: semanticColors.primary.DEFAULT,
    backgroundColor: "transparent",
  },
  buttonOutlineText: {
    color: semanticColors.primary.DEFAULT,
    fontWeight: "600",
  },

  // Cards
  card: {
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
  },
  cardLight: {
    backgroundColor: baseColors.white,
  },
  cardDark: {
    backgroundColor: baseColors.navy[800],
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: baseColors.navy[800],
    marginBottom: 8,
  },
  cardTitleLight: {
    fontSize: 18,
    fontWeight: "600",
    color: baseColors.cream[50],
    marginBottom: 8,
  },
  cardDescription: {
    fontSize: 14,
    color: baseColors.gray[500],
    lineHeight: 20,
    marginBottom: 16,
  },
  cardDescriptionLight: {
    fontSize: 14,
    color: baseColors.cream[200],
    lineHeight: 20,
    marginBottom: 16,
  },
  cardFooter: {
    flexDirection: "row",
  },
  cardButton: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 8,
  },

  // Code Block
  codeBlock: {
    backgroundColor: baseColors.navy[900],
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
  },
  codeTitle: {
    fontSize: 12,
    fontWeight: "600",
    color: baseColors.gold[400],
    marginBottom: 8,
  },
  code: {
    fontFamily: "monospace",
    fontSize: 11,
    color: baseColors.cream[100],
    lineHeight: 18,
  },
});

export default PaletteSample;
