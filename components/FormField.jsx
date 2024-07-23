import clsx from "clsx";
import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { icons } from "../constants";

const FormField = ({
  title,
  value,
  handleChangeText,
  otherStyles,
  placeholder,
  keyboardType,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View className={clsx("space-y-2", otherStyles)}>
      <Text className="text-gray-100 text-base font-pmedium">{title}</Text>

      <View className="bg-black-100 border-black-200 border h-[58px] w-full px-4 rounded-xl focus:border-secondary items-center flex-row">
        <TextInput
          className=" flex-1 text-white text-base  font-psemibold placeholder:font-pregular"
          onChangeText={handleChangeText}
          value={value}
          placeholder={placeholder}
          placeholderTextColor="#7B7B8B"
          secureTextEntry={title === "Password" && !showPassword}
          keyboardType={keyboardType}
          keyboardAppearance="dark"
          autoCapitalize="none"
        />
        {title === "Password" && (
          <TouchableOpacity onPress={() => setShowPassword((prev) => !prev)}>
            <Image
              className="w-5 h-5"
              source={showPassword ? icons.eyeHide : icons.eye}
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default FormField;
