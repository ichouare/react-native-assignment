import { NavigationContainer } from '@react-navigation/native';
import './global.css';

import { SafeAreaView } from 'react-native';
import BottomNavigation from './navigation/TabNavigation';
import { QueryProvider } from './constants/Providers/QueryProvider';








export default function App() {
 return( 
 
//  <SafeAreaView className='flex-1'>
<QueryProvider>
 <NavigationContainer >
    <BottomNavigation />
  </NavigationContainer>
</QueryProvider>
  // </SafeAreaView>
  )
}
