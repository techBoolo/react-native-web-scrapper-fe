import { Text, View, StyleSheet } from 'react-native'

// instead of the text we can add our logo here
const Logo = (props) => {

  return (
    <View>
      <Text style={styles.title}>Boo</Text> 
    </View>
  );
};

export default Logo

const styles = StyleSheet.create({
  title: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16
  }
})
