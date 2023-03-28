import { View, Text, StyleSheet } from 'react-native'
const Like = (props) => {

  return (
    <View style={styles.container}>
     <Text>like</Text> 
    </View>
  );
};

export default Like

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
