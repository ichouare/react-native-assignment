import { View, Text, TextInput } from 'react-native'
import React, { useState } from 'react'
import { Search } from 'lucide-react-native'
import useSearchStore from '../../stores/SearchStore'

const SearchInput = () => {
  const [search, setSearch] = useState("")
  const setSearchQuery = useSearchStore(state => state.setSearchQuery)
  return (
    <View className='flex-1 max-h-[150px] items-center justify-center bg-primary_light rounded-e-3xl px-[15px] gap-4' >
      <Text className='text-description text-primary' > Des infos claires, sans tabou, pour répondre à toutes tes questions.</Text>
      < View className=' bg-white flex-1 flex-row items-center h-[64px] max-h-[46px] max-w-[390px] w-full rounded-[12px] px-2 ' >
        <TextInput placeholder='Recherche...' className='flex-1  bg-transparent ' value={search} onChangeText={setSearch} />
        <View className='w-[47px] h-[38px] bg-primary rounded-[12px] items-center justify-center ' >
          <Search size={24} color='#FFF' onPress={() => setSearchQuery(search)} />
        </View>
      </View>
    </View>
  )
}

export default SearchInput