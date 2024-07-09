import clsx from "clsx";
import { TouchableOpacity, Text } from "react-native";

const CustomButton = ({
  handlePress,
  title,
  containerStyles,
  textStyles,
  isLoading,
}) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      className={clsx(
        "bg-secondary rounded-xl min-h-[58] justify-center items-center",
        containerStyles,
        isLoading && "opacity-50"
      )}
      disabled={isLoading}
      activeOpacity={0.7}
    >
      <Text
        className={clsx("text-primary font-psemibold text-base", textStyles)}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
