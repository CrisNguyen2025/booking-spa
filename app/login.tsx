import { Ionicons } from "@expo/vector-icons";
import { BlurView } from "expo-blur";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { Stack, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Animated, {
  FadeIn,
  FadeInDown,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from "react-native-reanimated";

export default function LoginScreen() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const logoY = useSharedValue(0);

  useEffect(() => {
    logoY.value = withRepeat(withTiming(-10, { duration: 2100 }), -1, true);
  }, [logoY]);

  const animatedLogoStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: logoY.value }],
  }));

  const handleLogin = () => {
    router.replace("/(tabs)");
  };

  return (
    <View className="flex-1 bg-[#050D18]">
      <Stack.Screen options={{ headerShown: false }} />

      {/* 🖼️ Background */}
      <Animated.View
        entering={FadeIn.duration(1500)}
        className="absolute w-full h-full"
      >
        <Image
          source={require("../assets/images/login-bg.png")}
          className="w-full h-full"
          contentFit="cover"
          style={{ opacity: 0.5 }}
        />
      </Animated.View>

      <LinearGradient
        colors={["transparent", "rgba(5, 13, 24, 0.8)", "#050D18"]}
        className="absolute w-full h-full"
      />

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        className="flex-1"
      >
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            justifyContent: "center",
            paddingBottom: 40,
          }}
          className="px-6"
          showsVerticalScrollIndicator={false}
        >
          {/* 🏷️ Logo Section */}
          <Animated.View
            entering={FadeInDown.delay(200).duration(800)}
            style={animatedLogoStyle}
            className="items-center mb-10"
          >
            <Image
              source={require("../assets/images/logo.png")}
              className="w-20 h-20 mb-4"
              contentFit="contain"
            />
            <Text
              className="text-4xl text-white text-center tracking-[10px] uppercase font-light"
              style={{ fontFamily: Platform.OS === "ios" ? "Didot" : "serif" }}
            >
              ZELENE
            </Text>
            <Text className="text-gold-400 text-[10px] tracking-[4px] uppercase mt-2 opacity-80">
              Spa & Wellness
            </Text>
          </Animated.View>

          {/* 🛡️ Login Glass Card */}
          <Animated.View entering={FadeInDown.delay(500).duration(800)}>
            <BlurView
              intensity={Platform.OS === "ios" ? 40 : 80}
              tint="dark"
              className="overflow-hidden border border-white/10 p-8 rounded-[40px] bg-white/5"
            >
              <Text className="text-white text-xl mb-8 font-light tracking-widest text-center uppercase">
                Welcome
              </Text>

              {/* 📧 Email */}
              <View className="mb-4">
                <View className="flex-row items-center bg-white/5 border border-white/10 rounded-2xl px-5 py-4">
                  <Ionicons
                    name="mail-outline"
                    size={18}
                    color="rgba(210, 154, 42, 0.6)"
                  />
                  <TextInput
                    placeholder="Email Address"
                    placeholderTextColor="rgba(255,255,255,0.2)"
                    className="flex-1 ml-4 text-white text-base"
                    value={email}
                    onChangeText={setEmail}
                    autoCapitalize="none"
                  />
                </View>
              </View>

              {/* 🔑 Password */}
              <View className="mb-6">
                <View className="flex-row items-center bg-white/5 border border-white/10 rounded-2xl px-5 py-4">
                  <Ionicons
                    name="lock-closed-outline"
                    size={18}
                    color="rgba(210, 154, 42, 0.6)"
                  />
                  <TextInput
                    placeholder="Password"
                    placeholderTextColor="rgba(255,255,255,0.2)"
                    className="flex-1 ml-4 text-white text-base"
                    secureTextEntry={!showPassword}
                    value={password}
                    onChangeText={setPassword}
                  />
                  <TouchableOpacity
                    onPress={() => setShowPassword(!showPassword)}
                  >
                    <Ionicons
                      name={showPassword ? "eye-off-outline" : "eye-outline"}
                      size={20}
                      color="rgba(210, 154, 42, 0.3)"
                    />
                  </TouchableOpacity>
                </View>
              </View>

              {/* ✨ Enter Button */}
              <TouchableOpacity onPress={handleLogin} activeOpacity={0.8}>
                <LinearGradient
                  colors={["#D29A2A", "#B8841F"]}
                  className="py-5 rounded-2xl items-center"
                >
                  <Text className="text-navy-950 text-xs font-bold tracking-[6px] uppercase">
                    Enter
                  </Text>
                </LinearGradient>
              </TouchableOpacity>

              <View className="mt-8 items-center">
                <TouchableOpacity>
                  <Text className="text-white/30 text-[10px] tracking-[2px] uppercase">
                    Register Account
                  </Text>
                </TouchableOpacity>
              </View>
            </BlurView>
          </Animated.View>

          {/* 🌿 Footer */}
          <Animated.View
            entering={FadeIn.delay(1000)}
            className="mt-12 items-center"
          >
            <Text className="text-white/20 text-[8px] uppercase tracking-[5px]">
              Est. 2026
            </Text>
          </Animated.View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
}
