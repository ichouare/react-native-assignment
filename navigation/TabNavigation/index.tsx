
import { CircleUserRound, Compass, Home, Spline } from 'lucide-react-native';
import { Text, View } from 'react-native';
import ExplorerScreen from '../../screens/Explorer';
import HomeScreen from '../../screens/Home';
import SettingScreen from '../../screens/setting';
import ProfileScreen from '../../screens/User';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import StackNavigation from '../StackExplorerScreen';
import HomeStack from '../StackHomeScreen';
import SettingStack from '../StackSettingScreen';
import UserStack from '../StackUserScreen';



const Tab = createBottomTabNavigator()
const BottomNavigation = () => {
  return (
   <Tab.Navigator 
  screenOptions={
    {
      tabBarShowLabel : false,
      tabBarStyle: { 
        display:'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        rowGap: 16,
        position: 'relative', 
        bottom: 21,  
        marginHorizontal: 'auto',
        width: 340, height: 64,
        borderRadius: 16 ,
        backgroundColor: "#35351B",
        paddingHorizontal: 13,
      },
        
      tabBarItemStyle: {
        flex : 1, 
        height: '100%',
        width: '100%',
        display: "flex",
        flexDirection: 'row',
        alignItems:'stretch',
        },
        headerShown: false,
    }
  }
   >
      <Tab.Screen name="Home" component={HomeStack} 
      options={
       { 
        title: "Home",
        tabBarIcon: ({ focused }) => (
      <View style={{
        width: 95,
        height: 40,
        display: "flex",
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        rowGap: 20,
        gap: 4,
        backgroundColor: focused ? '#4D4D36' : 'transparent',
        borderRadius: 30,
        padding: 4
      }}>
        <Home size={24} color={focused ? 'white' : 'gray'} />
        {focused && <Text style={{ fontSize: 12, color: 'white' }}>Home</Text>}
      </View>
    ),
  }} />
      <Tab.Screen name="Explorer" component={StackNavigation}
      options={
       { 
        title: "Explorer",
        tabBarIcon: ({ focused }) => (
      <View style={{
        width: 95,
        height: 40,
        display: "flex",
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        rowGap: 20,
        gap: 4,
        backgroundColor: focused ? '#4D4D36' : 'transparent',
        borderRadius: 30,
        padding: 4
      }}>
        
        <Compass size={24} color={focused ? 'white' : 'gray'} />
        {focused && <Text style={{ fontSize: 12, color: 'white' }}>Explorer</Text>}
      </View>
        )
       
      }
    }
      />
      <Tab.Screen name="setting" component={SettingStack}
       options={
       { 
        title: "Setting",
       tabBarIcon: ({ focused }) => (
      <View style={{
        width: 95,
        height: 40,
        display: "flex",
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        rowGap: 20,
        gap: 4,
        backgroundColor: focused ? '#4D4D36' : 'transparent',
        borderRadius: 30,
        padding: 4
      }}>
        <Spline size={24} color={focused ? 'white' : 'gray'} />
        {focused && <Text style={{ fontSize: 12, color: 'white' }}>Setting</Text>}
      </View>
        )
       
      }
    }
      
      />
      <Tab.Screen name="Profile" component={UserStack} 
       options={
       { 
        title: "Profile",
        tabBarIcon: ({ focused }) => (
      <View style={{
        width: 95,
        height: 40,
        display: "flex",
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        rowGap: 20,
        gap: 4,
        backgroundColor: focused ? '#4D4D36' : 'transparent',
        borderRadius: 30,
        padding: 4
      }}>
        <CircleUserRound size={24} color={focused ? 'white' : 'gray'} />
        {focused && <Text style={{ fontSize: 12, color: 'white' }}>User</Text>}
      </View>
        )
       
      }
     } />
    </Tab.Navigator>
  )
}

export default BottomNavigation