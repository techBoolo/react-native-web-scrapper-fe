import { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useSelector, useDispatch } from 'react-redux'
import { loginFromStorage } from '../redux/reducers/userSlice.js'

import { Home, Login, Admin } from '../screens/'
import { Logo, LoginButton, AdminButton, BackButton } from '../components/index.js'
import Tabs from './tabs.js'

const Stack = createNativeStackNavigator()

export default function Main() {
  const { user } = useSelector(state => state.user)
  const dispatch = useDispatch()

  useEffect(() => {
    const user = window.localStorage.getItem('user')
    if(user) {
      dispatch(loginFromStorage({ token: user }))
    }
  }, [])

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName=""
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
              user 
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

