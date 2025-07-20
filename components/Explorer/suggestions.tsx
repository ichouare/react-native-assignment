import { View, Text, FlatList, Pressable } from 'react-native'
import React from 'react'
import { useGetSuggestions } from '../../hooks/useGetSuggestions'
import useSearchStore from '../../stores/SearchStore'
import { cn } from '../../utils/cn'

const Suggestions = () => {
  const { data, isLoading, isError, error } = useGetSuggestions()
  const { searchQuery, setSearchQuery } = useSearchStore()

  // console.log(searchQuery)

  // if (isLoading) return <Text>is loading...</Text>
  if (isLoading) return (
    <View className='flex-1 flex-row ms-[20px]  max-h-[100px] items-center justify-start'>
      <Pressable className="p-2 bg-gray-300 m-1  min-w-[96px] min-h-[36px] rounded-full">
        <Text className='text-center capitalize text-primary text-badge-text'></Text>
      </Pressable>
      <Pressable className="p-2 bg-gray-300 m-1  min-w-[96px] min-h-[36px] rounded-full">
        <Text className='text-center capitalize text-primary text-badge-text'></Text>
      </Pressable>
      <Pressable className="p-2 bg-gray-300 m-1  min-w-[96px] min-h-[36px] rounded-full">
        <Text className='text-center capitalize text-primary text-badge-text'></Text>
      </Pressable>
    </View>
  );
  if (isError) return <Text>Error: {error.message}</Text>;

  return (
    <View className='flex-1 flex-row ms-[20px]  max-h-[100px] items-center justify-center'>

      <FlatList
        data={data}
        renderItem={({ item }) => (
          <Pressable className={cn("p-2 bg-[#6664371F] m-1  w-[96px] h-[36px] rounded-full",
            searchQuery === item.title && 'bg-primary')} onPress={() => {
              setSearchQuery(item.title)
            }}>
            <Text className={cn('text-center capitalize text-primary text-badge-text', searchQuery === item.title && 'text-white')}>{item.title}</Text>
          </Pressable>
        )}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        bounces={false}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}

export default Suggestions