import { View, Text, SafeAreaView, TouchableOpacity, StyleSheet } from 'react-native'

const Post = ({ post }) => {

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.source}>{post.source}</Text>
        <View style={styles.contentContainer}>
          <Text style={styles.title}>{post.title}</Text>
          <Text style={styles.content}>{post.content}</Text>
          <TouchableOpacity style={styles.link}>
            <Text style={{ color: 'skyblue', fontSize: 16 }}>link...</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10
  },
  source: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  contentContainer: {
    padding: 10,
    borderLeftWidth: 1,
    borderLeftColor: '#ccc'
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    paddingBottom: 10,
  },
  content: {
    textAlign: 'justify',
  },
  link: {
    alignItems: 'flex-end',
    marginTop: 10
  }
})

export default Post
