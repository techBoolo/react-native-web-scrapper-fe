import { TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

const BackButton = ({ navigation }) => {

  return (
    <TouchableOpacity
      style={{ padding: 15 }}
      onPress={() => navigation.navigate('Home')}
    >
      <Icon name='arrow-back' color='#fff' size={24} /> 
    </TouchableOpacity>
  );
};

export default BackButton
