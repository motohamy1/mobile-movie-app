import { images } from "@/constants/images";
import { icons } from "@/constants/icons";
import { useRouter } from "expo-router";
import { ScrollView, View, Image, Text, ActivityIndicator, FlatList } from "react-native";
import SearchBar from "../components/SearchBar";
import useFetch from "@/services/useFetch";
import { fetchMovies } from "@/services/api";
import MovieCard from "@/app/components/MovieCard";
import React from "react";
import { getTrendingMovies } from "@/services/appwrite";
import TrendingCard from "@/app/components/TrendingCard";

export default function Index() {
  const router = useRouter();

  const {
      data: trendingMovies,
      loading: trendingLoading,
      error: trendingError
  } = useFetch<TrendingMovie[]>(getTrendingMovies);

  const { data: movies, loading: moviesLoading, error: moviesError } = useFetch<Movie[]>(
          () => fetchMovies({ query: '' }))

  return (
    <View className="flex-1 bg-primary">
      <Image
          source={images.bg}
          className="absolute w-full z-0"
          resizeMode="cover"
      />
      <ScrollView
        className="flex-1 px-5"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
            paddingBottom: 10,
            minHeight: "100%",
        }}
      >
        <Image source={icons.logo} className="w-12 h-10 mt-20 mb-5 mx-auto" />

        {moviesLoading || trendingLoading ? (
          <ActivityIndicator
            size="large"
            color="#0000ff"
            className="mt-10 self-center"
          />
        ) : moviesError || trendingError ? (
          <Text className="text-red-500 text-center mt-10">
            Error: {moviesError?.message || trendingError?.message}
          </Text>
        ) : (
          <View className="flex-1 mt-5">
            <SearchBar
              onPress={() => router.push("/search")}
              placeholder="Search for a movie"
            />
              {trendingMovies && trendingMovies.length > 0 && (
                  <View className="mt-10">
                      <Text className="text-lg text-white font-bold mb-3">
                            Trending Searches
                      </Text>
                  </View>
              )}
            {trendingMovies && trendingMovies.length > 0 && (
                <FlatList
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    ItemSeparatorComponent={() => <View className="w-4" />}
                    className="mb-4 mt-3"
                    data={trendingMovies}
                    renderItem={({ item, index }) => (
                        <TrendingCard movie={item} index={index} />
                    )}
                    keyExtractor={(item) => item.movie_id.toString()}
                />
            )}


            <Text className="text-lg text-white font-bold mt-5 mb-3">Latest Movies</Text>

            {movies && movies.length > 0 ? (
                <FlatList
                    data={movies}
                    renderItem={({ item }) => <MovieCard {...item} />}
                    keyExtractor={(item) => item.id.toString()}
                    numColumns={3}
                    className="mt-2 pb-32"
                    columnWrapperStyle={{
                        justifyContent: 'flex-start',
                        gap: 20,
                        paddingRight: 5,
                        marginBottom: 16
                    }}
                    scrollEnabled={false}
                />
            ) : (
                <Text className="text-white text-center mt-10">No movies available</Text>
            )}
          </View>

      )}
        </ScrollView>
    </View>

  );
}
