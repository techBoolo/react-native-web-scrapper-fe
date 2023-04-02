import { useSelector } from 'react-redux'
import { View, Text, StyleSheet } from 'react-native'

const Notification = (props) => {
  const { data } = useSelector(state => state.notification)

  if(data) {
    return (
      <View style={
        [
          styles.container,
          { 
            backgroundColor:`${ data?._status == 'error' 
                ? '#ffd1d1' 
                : data?._status == 'success' 
                ? '#beffbe'  
                : '#b0b0ff' }`
          },
        ]
      }>
        <Text style={styles.message}>{ data?.message }</Text>
      </View>
    );
  } else return null
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    width: '100%',
    alignItems: 'center'
  },
  message: {
    
  }
})
export default Notification
