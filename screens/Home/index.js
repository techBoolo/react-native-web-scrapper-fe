import { useSelector } from 'react-redux'
import { FlatList } from 'react-native'

import Post from './Post.js'

const Home = (props) => {
   const { posts } = useSelector(state => state.post)

  return (
    <>
      <FlatList
        data={posts}
        renderItem={( {item}) => <Post post={item} />}
        keyExtractor={post => post.id}
      />
    </>
  );
};

export default Home
