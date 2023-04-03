import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import postService from '../../services/post.js'
import { updatePost } from '../../redux/reducers/postSlice.js'
import { notify } from '../../redux/reducers/notificationSlice.js'
import errorMessage from '../../utils/errorMessage.js'

const today = new Date(new Date().toDateString())
const Post = ({ post }) => {
  const [ loading, setLoading ] = useState(false)
  const dispatch = useDispatch()

  const scrappedDate = new Date(post.dateScrapped)

  const handleScrap = async (source) => {
    try {
      setLoading(true)
      const response = await postService.scrap(source) 
      dispatch(updatePost(response))
    } catch (err) {
      const message = errorMessage(err)
      dispatch(notify({ message, _status: 'error'}))
    } finally {
      setLoading(false)
    }
  }
  return (
      <View style={styles.container}>
        <Text style={styles.source}>{ post.source }</Text>
        <Text style={styles.dateScrapped}>{ post.dateScrapped }</Text>
        <TouchableOpacity
          style={[styles.btn]}
          disabled={(scrappedDate >= today || loading) ? true : false }
          onPress={() => handleScrap('reporter')}
        >
          <Text style={[{ color: `${ scrappedDate >= today ? 'gray' : 'skyblue'}`}]}>Scrap</Text>
        </TouchableOpacity>
      </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    alignItems: 'center', marginBottom: 20, gap: 5 
  },  
  source: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  dateScrapped: {
    fontSize: 12,
  },
  btn: {
    border: '1px solid #ccc',
    padding: 5,
  },
})
export default Post
