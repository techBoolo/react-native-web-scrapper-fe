import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
const LoginButton = ({ navigation }) => {

  return (
    <TouchableOpacity
      style={styles.login}
      onPress={() => navigation.navigate('Login')}
    >
      <Text style={styles.loginText}>login</Text> 
    </TouchableOpacity>
  );
};

export default LoginButton

const styles = StyleSheet.create({
  login: {
    padding: 10,
  },
  loginText: {
    color: '#fff',
    fontWeight: 'bold',
  }
})
