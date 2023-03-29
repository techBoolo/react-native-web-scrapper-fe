import { useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native'
import userServices from '../../services/user.js'
import errorMessage from '../../utils/errorMessage.js'
import Icon from 'react-native-vector-icons/Ionicons'
const Login = ({ navigation }) => {
  const [ name, setName ] = useState('')
  const [ password, setPassword ] = useState('')

  const handleLogin = async () => {
    const loginInfo = { name, password }

    try {
      const response = await userServices.login(loginInfo)
      const { message, token } = response.data
      // save token in redux and local/secure storage
      navigation.navigate('Admin')
    } catch (err) {
      const message = errorMessage(err)
      console.log(message);  // notify user 
      return
    }

  }

  return (
    <View style={styles.container}>
      <Text>S</Text>
      <View style={styles.fieldContainer}>
        <Icon name='person-outline' size={20} color='#ccc' />
        <TextInput onChangeText={ text => setName(text) } selectTextOnFocus={true} style={styles.name}/>
      </View>
      <View style={styles.fieldContainer}>
        <Icon name='lock-closed-outline' size={20} color='#ccc' />
        <TextInput secureTextEntry={true}  selectTextOnFocus={true} onChangeText={ text => setPassword(text) } style={styles.password}/>
      </View>
      <TouchableOpacity style={styles.btnContainer} onPress={handleLogin}>
        <Text style={styles.btnText}>
          Login
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login

const styles = StyleSheet.create({
  container: {
    padding: 15,
    gap: 15,
    alignItems: 'center',
    marginTop: 50,
  },
  fieldContainer: {
    flexDirection: 'row',
    padding: 5,
    paddingLeft: 10,
    width: '100%',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    justifyContent: 'center',
    alginItems: 'center'
  },
  icon: {
    paddingLeft: 20,
  },
  name: {
    paddingLeft: 10,
    width: '100%',
    outlineStyle: 'none',
  },
  password: {
    paddingLeft: 10,
    width: '100%',
    outlineStyle: 'none',
  },
  btnContainer: {
    padding: 10,
    backgroundColor: '#00f',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnText: {
    color: '#fff'
  }
})
