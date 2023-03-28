import { View, Text, StyleSheet } from 'react-native'
const Comment = (props) => {

  return (
    <View style={styles.container}>
     <Text>comments</Text> 
    </View>
  );
};

export default Comment

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
