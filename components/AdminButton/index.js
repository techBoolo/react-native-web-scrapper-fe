import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
const AdminButton = ({ navigation }) => {

  return (
    <TouchableOpacity
      style={styles.admin}
      onPress={() => navigation.navigate('Admin')}
    >
      <Text style={styles.adminText}>admin</Text> 
    </TouchableOpacity>
  );
};

export default AdminButton

const styles = StyleSheet.create({
  admin: {
    padding: 10,
  },
  adminText: {
    color: '#fff',
    fontWeight: 'bold',
  }
})
