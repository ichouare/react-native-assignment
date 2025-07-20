import { NavigationContainer } from '@react-navigation/native';
import './global.css';

import { SafeAreaView } from 'react-native';
import BottomNavigation from './navigation/TabNavigation';








export default function App() {
 return( 
 
//  <SafeAreaView className='flex-1'>
 <NavigationContainer >
    <BottomNavigation />
  </NavigationContainer>
  // </SafeAreaView>
  )
}
