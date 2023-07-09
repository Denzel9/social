import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  email: '',
  authId: '',
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.email = action.payload.email
      state.authId = action.payload.authId
    },
    deleteUser: (state) => {
      state.email = ''
      state.authId = ''
    },
  },
})

export const { addUser, deleteUser } = userSlice.actions
