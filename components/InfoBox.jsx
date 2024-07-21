import clsx from "clsx";
import { View, Text } from "react-native";

const InfoBox = ({ title, titleStyles, subtitle, containerStyles }) => {
  return (
    <View className={containerStyles}>
      <Text
        className={clsx("text-white text-center font-psemibold", titleStyles)}
      >
        {title}
      </Text>
      <Text className="text-sm text-gray-100 text-center font-pregular">
        {subtitle}
      </Text>
    </View>
  );
};

export default InfoBox;
