import Svg, { Path } from "react-native-svg";

export function IconCheck({ size = 24, color = "#22c55e" }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M20 6L9 17l-5-5"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
// import Logo from "@/assets/logo.svg";
{/* <Logo width={120} height={40} style={{ opacity: 0.8 }} /> */}
{/* <IconCheck size={28} color="#16a34a" /> */}
