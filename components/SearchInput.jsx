import clsx from "clsx";
import { View, TextInput, TouchableOpacity, Image, Alert } from "react-native";
import { icons } from "../constants";
import { router, usePathname } from "expo-router";
import { useState } from "react";

const SearchInput = ({ initialQuery }) => {
  const pathname = usePathname();
  const [query, setQuery] = useState(initialQuery || "");

  return (
    <View className="bg-black-100 border-black-200 border-[1px] h-[58px] w-full px-4 rounded-xl focus:border-secondary items-center flex-row space-x-4">
      <TextInput
        className=" flex-1 text-white text-base font-psemibold placeholder:font-pregular "
        onChangeText={(e) => setQuery(e)}
        value={query}
        placeholder="Search for a video topic"
        placeholderTextColor="#7B7B8B"
        keyboardAppearance="dark"
      />

      <TouchableOpacity
        onPress={() => {
          if (!query.trim()) {
            setQuery("");
            return Alert.alert(
              "Missing query",
              "Please input something to search results across database"
            );
          }

          if (pathname.startsWith("/search")) {
            router.setParams({ query });
          } else {
            router.push(`/search/${query}`);
          }
        }}
      >
        <Image className="w-5 h-5" source={icons.search} resizeMode="contain" />
      </TouchableOpacity>
    </View>
  );
};

export default SearchInput;
