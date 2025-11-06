import { Text, TouchableOpacity, View } from "react-native";

export default function ServiceCard() {
  return (
    <View className="p-4 bg-white rounded-2xl shadow mb-3">
      <Text className="text-lg font-semibold text-gray-800">
        Massage Thư Giãn
      </Text>
      <Text className="text-gray-500 mb-3">45 phút - 250.000đ</Text>
      <TouchableOpacity className="bg-primary py-2 px-4 rounded-xl">
        <Text className="text-white text-center font-medium">
          Đặt Ngay
        </Text>
      </TouchableOpacity>
    </View>
  );
}
