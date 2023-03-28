import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/Ionicons'
import AwIcon from 'react-native-vector-icons/FontAwesome'

import { Home, Like, Comment } from '../screens'

const Tab = createBottomTabNavigator()

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: { borderWidth: 0 },
          elevation: 0
      }}
    >
      <Tab.Screen name='Home' component={Home} 
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon
              name='home'
              size={ focused ? 30 : 20 }
              color={ focused ? '#00f' : 'gray' }
            />
          )
        }}
      />
      <Tab.Screen name='Like' component={Like} 
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon
              name='heart'
              size={ focused ? 30 : 20 }
              color={ focused ? '#00f' : 'gray' }
            />
          )
        }}
      />
      <Tab.Screen name='Comment' component={Comment} 
        options={{
          tabBarIcon: ({ focused }) => (
            <AwIcon
              name='comment'
              size={ focused ? 30 : 20 }
              color={ focused ? '#00f' : 'gray' }
            />
          )
        }}
      />
    </Tab.Navigator>
  )
}

export default Tabs
