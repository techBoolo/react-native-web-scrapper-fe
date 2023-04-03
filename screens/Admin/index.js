import { useSelector } from 'react-redux'
import { View, Text, FlatList } from 'react-native'
import { Notification } from '../../components/index.js'

import Post from './Post.js'

const Admin = (props) => {
//  const { posts } = useSelector(state => state.post)

  const posts = [
    { id: 1, source: 'source', dateScrapped: 'Mon Apr 3 2023'},
    { id: 2, source: 'source',dateScrapped: 'Sun Apr 2 2023'},
    { id: 3, source: 'source',dateScrapped: 'Sat Apr 1 2023'},
    { id: 4, source: 'source',dateScrapped: 'Mon Apr 3 2023'},
    { id: 5, source: 'source',dateScrapped: 'Mon Apr 3 2023'},
    { id: 6, source: 'source',dateScrapped: 'Mon Apr 3 2023'},
    { id: 7, source: 'source', dateScrapped: 'Mon Apr 3 2023'},
  ]
  return (
    <>
      <Notification />
      <View style={{ alignItems: 'center', marginVertical: 10 }}>
        <Text>Admin</Text>
      </View>
      <FlatList
        data={posts}
        renderItem={({ item }) => <Post post={item} />}
        keyExtractor={item => item.id }
      />
    </>
  );
};

export default Admin
