import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
const Stack = createNativeStackNavigator();

import SettingScreen from '../../screens/setting';
const SettingStack = () => {
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
      <Stack.Screen name="Setting" component={SettingScreen} />
    </Stack.Navigator>
  )
}

export default SettingStack