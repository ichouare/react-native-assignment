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
          backgroundColor: "#EFE8DF",
        },
        headerTitleAlign: 'center',
        headerTintColor: "black",
        headerLargeTitleShadowVisible: false,

      }
    } >
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="ExplorerScreen" component={ExplorerScreen} />
    </Stack.Navigator >
  )
}

export default HomeStack