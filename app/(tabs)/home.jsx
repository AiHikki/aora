import {
  View,
  Text,
  Image,
  FlatList,
  RefreshControl,
  Alert,
} from "react-native";
import { useEffect, useState } from "react";
import { useGlobalContext } from "../../context/GlobalProvider";
import { images } from "../../constants";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchInput from "../../components/SearchInput";
import Trending from "../../components/Trending";
import EmptyState from "../../components/EmptyState";
import { getAllPosts, getLatestPosts } from "../../lib/appwrite";
import useAppwrite from "../../lib/useAppwrite";
import VideoCard from "../../components/VideoCard";

const Home = () => {
  const { data: posts, refetch } = useAppwrite(getAllPosts);
  const { data: latestPosts } = useAppwrite(getLatestPosts);
  const [refreshing, setRefreshing] = useState(false);
  const { user } = useGlobalContext();

  const onRefresh = async () => {
    setRefreshing(true);
    await refetch();
    setRefreshing(false);
  };

  return (
    <SafeAreaView className="bg-primary h-full">
      <FlatList
        data={posts}
        keyExtractor={(item) => item.$id}
        renderItem={({ item }) => <VideoCard video={item} />}
        ListHeaderComponent={() => (
          <View className="space-y-6 my-6 px-4">
            <View className="flex-row justify-between items-center">
              <View>
                <Text className="text-gray-100 text-sm font-pmedium">
                  Welcome Back
                </Text>
                <Text className="text-white font-psemibold text-2xl">
                  {user.username}
                </Text>
              </View>
              <Image
                source={images.logoSmall}
                resizeMode="contain"
                className="w-[30px] h-[35px]"
              />
            </View>

            <SearchInput />

            <View className="w-full flex-1 mt-9">
              <Text className="text-gray-100 font-pregular text-sm">
                Trending Videos
              </Text>

              <Trending posts={latestPosts} />
            </View>
          </View>
        )}
        ListEmptyComponent={
          <EmptyState
            title="No Videos Found"
            subtitle="Be the first one to upload the video"
          />
        }
        refreshControl={
          <RefreshControl
            tintColor="#fff"
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }
      />
    </SafeAreaView>
  );
};

export default Home;
