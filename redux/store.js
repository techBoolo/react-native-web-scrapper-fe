import { configureStore } from '@reduxjs/toolkit'
import notificationReducer from './reducers/notificationSlice.js'
import userReducer from './reducers/userSlice.js'

export default configureStore({
  reducer: {
    notification: notificationReducer,
    user: userReducer,
  }
})
