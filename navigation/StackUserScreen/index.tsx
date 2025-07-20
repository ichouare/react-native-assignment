import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
const Stack = createNativeStackNavigator();

import SettingScreen from '../../screens/setting';
import ProfileScreen from '../../screens/User';
const UserStack = () => {
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
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
  )
}

export default UserStack