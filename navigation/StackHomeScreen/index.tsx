import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
const Stack = createNativeStackNavigator();

import HomeScreen from '../../screens/Home';
import ExplorerScreen from '../../screens/Explorer';
const HomeStack = () => {
  return (
   <Stack.Navigator screenOptions={
    {
        headerStyle: {
            backgroundColor: "#EFE8DF"
        },
        headerTitleAlign: 'center',
        headerTintColor: "black",
    }
   }>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Explorer" component={ExplorerScreen} />
    </Stack.Navigator>
  )
}

export default HomeStack