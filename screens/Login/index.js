import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
const Login = ({ navigation }) => {

  const handleLogin = () => {
    navigation.navigate('Admin')
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.btnContainer} onPress={handleLogin}>
        <Text style={styles.btnText}>
          login      
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  btnContainer: {
    padding: 10,
    backgroundColor: '#00f' 
  },
  btnText: {
    color: '#fff'
  }
})
