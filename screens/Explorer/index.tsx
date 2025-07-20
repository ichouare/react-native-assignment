import { View, Text, ScrollView, TextInput, SafeAreaView } from 'react-native'
import React from 'react'

import { Search } from 'lucide-react-native'
import { useGetSuggestions } from '../../hooks/useGetSuggestions'
import Suggestions from '../../components/Explorer/suggestions'
import Articles from '../../components/Explorer/Articles'
import SearchInput from '../../components/Explorer/SearchInput'

const ExplorerScreen = () => {
  const {data, status} = useGetSuggestions()
  return (
    <SafeAreaView className='flex-1 p-0 ' >
     <SearchInput/>
      <View className='flex-1'>
        <Suggestions />
        <Articles />
      </View>
    </SafeAreaView >
  )
}

export default ExplorerScreen