import { configureStore } from '@reduxjs/toolkit'
import notificationReducer from './reducers/notificationSlice.js'
import userReducer from './reducers/userSlice.js'
import postReducer from './reducers/postSlice.js'

export default configureStore({
  reducer: {
    notification: notificationReducer,
    user: userReducer,
    post: postReducer,
  }
})
