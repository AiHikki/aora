import clsx from "clsx";
import { View, TextInput, TouchableOpacity, Image } from "react-native";
import { icons } from "../constants";

const SearchInput = ({ value, handleChangeText, otherStyles }) => {
  return (
    <View className="bg-black-100 border-black-200 border-[1px] h-[58px] w-full px-4 rounded-xl focus:border-secondary items-center flex-row space-x-4">
      <TextInput
        className=" flex-1 text-white text-base font-psemibold placeholder:font-pregular "
        onChangeText={handleChangeText}
        value={value}
        placeholder="Search for a video topic"
        placeholderTextColor="#7B7B8B"
        keyboardAppearance="dark"
      />

      <TouchableOpacity onPress={() => {}}>
        <Image className="w-5 h-5" source={icons.search} resizeMode="contain" />
      </TouchableOpacity>
    </View>
  );
};

export default SearchInput;
