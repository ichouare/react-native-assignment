import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
const Stack = createNativeStackNavigator();

import ExplorerScreen from '../../screens/Explorer';
import HomeScreen from '../../screens/Home';
const StackNavigation = () => {
  return (
   <Stack.Navigator screenOptions={
    {
        headerStyle: {
            backgroundColor: "#EFE8DF",
        },
        headerTitleAlign: 'center',
        headerTintColor: "black",
    }
   }>
      <Stack.Screen name="Explorer" component={ExplorerScreen} />
    </Stack.Navigator>
  )
}

export default StackNavigation