import React from 'react'
import { ActivityIndicator, FlatList, ImageBackground, Pressable, Text, View } from 'react-native'
import { useGetArticles } from '../../hooks/useGetArticles'
import { PencilLine } from 'lucide-react-native'
import { getTimeFromNow } from '../../utils/helpers/getTime'
import useSearchStore from '../../stores/SearchStore'



const images = {
  img1: require('../../assets/images/img1.png'),
  img2: require('../../assets/images/img2.png'),
  img3: require('../../assets/images/img3.png'),
};

const Articles = () => {
  const searchQuery = useSearchStore(state => state.searchQuery)
  const setSearchQuery = useSearchStore(state => state.setSearchQuery)
    const {data, isLoading, isError, error} = useGetArticles(searchQuery)
    // if (isLoading) return <Text>is loading...</Text>
  if (isLoading) return (
    <View className='flex-1 flex-row  items-center justify-center'>
        <ActivityIndicator />
    </View>
  );
if (isError) return <Text>Error: {error.message}</Text>;

return (
    <View className='flex-1 flex-row ms-[20px] mx-4   '>

  <FlatList
    data={data}
    renderItem={({ item }) => (
        <Pressable className=" bg-[#6664371F] m-1 w-[320px] max-w-full h-[269px] rounded-3xl justify-between ">
            <ImageBackground 
             source={images[item.image]} 
            resizeMode="cover"
            className='flex-1 flex justify-between p-4'
             imageStyle={{ borderRadius: 16 }}
            >
        <Text className=' text-primary text-badge-text w-[111px] h-[28px] rounded-full bg-white text-center p-1'>{item.title}</Text>
        <View className='flex-1 max-h-[95px] rounded-[16px] bg-white '>
            <View className='flex-1 flex-row items-center justify-between p-2'>
                <View className='flex-row items-center max-w-[150px] gap-1 min-h-[20px] '>
                    <PencilLine size={12} color="#666437" className='text-primary' />
                    <Text className='text-small-text text-primary'>{item.details.creator}</Text>
                </View>
                <View>
                    <Text className='text-[9px] text-primary'>
                       {getTimeFromNow(item.details.time)}
                    </Text>
                </View>
            </View>
            <View className='p-2'>
                <Text className='max-h-[40px] '
                  numberOfLines={2}
                    ellipsizeMode="tail"
                >
                    {item.details.description}
                </Text>
            </View>
        </View>
            </ImageBackground>
      </Pressable>
    )}
    keyExtractor={(item) => item.id.toString()}
    bounces={false}
    showsHorizontalScrollIndicator={false}
    showsVerticalScrollIndicator={false}
    ListEmptyComponent={
    <View className='flex-1 h-[200px] items-center justify-center gap-4  '> 
        <Text>No Articles Availble for your search Now !!</Text>
        <Pressable className='flex-row items-center justify-center w-[140px] h-[42px] bg-primary rounded-full py-1'>
          <Text className='text-white' onPress={() => setSearchQuery("Pour moi")}>Reset ur Search</Text>
        </Pressable>
    </View>}
    />
    </View>
);
}

export default Articles