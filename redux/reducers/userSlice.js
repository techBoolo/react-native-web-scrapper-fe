import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import userService from '../../services/user.js'
import errorMessage from '../../utils/errorMessage.js'

const initialState = {
  user: null
}

export const loginFromStorage = createAsyncThunk(
  'user/loginFromStorage',
  async ({ token }, thunkAPI) => {
    try {
      await userService.authenticate(token)
      return { token }
    } catch (error) {
      const message = errorMessage(error)
      window.localStorage.removeItem('user')
      return thunkAPI.rejectWithValue(message)
    }
  }
)

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginFromStorage.fulfilled, (state, action) => {
        state.user = action.payload
      })
      .addCase(loginFromStorage.rejected, (state, action) => {
        console.log(action);
        state.user = null
      })
  }
})

export const { login } = userSlice.actions
export default userSlice.reducer
