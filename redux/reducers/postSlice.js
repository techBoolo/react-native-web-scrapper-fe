import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  posts: []
}

const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    posts: (state, action) => {
      state.posts = action.payload
    },
    updatePost: (state, action) => {
      const newPost = action.payload
      state.posts = state.posts.map(post => {
        if(newPost.source == post.source) {
          return newPost
        } else {
          return post
        }
      })
    }
  }
})

export const { posts, updatePost } = postSlice.actions
export default postSlice.reducer
