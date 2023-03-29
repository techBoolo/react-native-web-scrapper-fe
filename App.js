import { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Home, Login, Admin } from './screens/'
import Logo from './components/Logo'
import LoginButton from './components/LoginButton'
import AdminButton from './components/AdminButton'
import BackButton from './components/BackButton'
import Tabs from './navigation/tabs.js'

const Stack = createNativeStackNavigator()

export default function App() {
  const [ isLogin, setIsLogin ] = useState(false)
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerStyle: { 
            backgroundColor: '#00f',
            height: 40 
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold'
          }
        }}
      >
        <Stack.Screen name='Home' component={Tabs} 
          options={({ navigation }) => ({
            headerTitle: (props) => (<Logo {...props} />),
            headerRight: (props) => ( 
              isLogin 
                ? (<AdminButton {...props} navigation={navigation} />) 
                : (<LoginButton {...props} navigation={navigation}/> ) 
            ),
          })}
        />
        <Stack.Screen name='Login' component={Login} 
          options={{ title: '' }}
        />
        <Stack.Screen name='Admin' component={Admin} 
          options={({ navigation }) => ({ 
            title: '',
            headerLeft: (props) => (<BackButton {...props} navigation={navigation} />),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

