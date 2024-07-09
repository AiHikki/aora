import { View, Text } from "react-native";

const FormField = ({ title, value }) => {
  return (
    <View className="space-y-2">
      <Text className="text-gray-100 text-base font-pmedium">{title}</Text>
    </View>
  );
};

export default FormField;
