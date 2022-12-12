import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  userVar: false,
}

export const userProtect = createSlice({
  name: 'user',
  initialState,
  reducers: {
    trutheFunction: (state) => {

      state.userVar=true
    },
    lieFunction: (state) => {
        state.userVar=false
    }
    }
 
  
})

// Action creators are generated for each case reducer function
export const { trutheFunction, lieFunction } = userProtect.actions

export default userProtect.reducer