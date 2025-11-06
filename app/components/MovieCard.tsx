import {View, Text, TouchableOpacity, Image, Dimensions} from 'react-native'
import React from 'react'
import {Link} from "expo-router";
import {icons} from "@/constants/icons";


const MovieCard = ({poster_path, id, title, vote_average, release_date} : Movie) => {
    const screenWidth = Dimensions.get('window').width;
    const cardWidth = (screenWidth - 60) / 3; // 60 = padding (20*2) + gaps (20*2)

    return (
        <View style={{width: cardWidth}}>
            <Link href={`/movies/${id}`} asChild>
                <TouchableOpacity className='mb-4'>
                    <Image
                        source={{
                            uri: poster_path ?
                                `https://image.tmdb.org/t/p/w500${poster_path}` :
                                'https://placeholder.co/600x400/1a1a1a/ffffff.png',
                        }}
                        className='w-full h-52 rounded-lg'
                        resizeMode='cover'
                    />
                    <Text className='text-sm font-bold text-white mt-2' numberOfLines={2}>{title}</Text>
                    <View className='flex-row items-center justify-start gap-1 mt-1'>
                        <Image
                           source={icons.star}
                           className='size-4'
                        />
                        <Text className='text-xs text-white'>{Math.round(vote_average / 2)}</Text>
                    </View>
                    <View className='flex-row items-center justify-start'>
                        <Text className='text-xs text-light-300 font-medium mt-1'>
                            {release_date}
                        </Text>
                    </View>
                </TouchableOpacity>
            </Link>
        </View>
    );
}
export default MovieCard
