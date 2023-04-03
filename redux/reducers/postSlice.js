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
    }
  }
})

export const { posts } = postSlice.actions
export default postSlice.reducer
