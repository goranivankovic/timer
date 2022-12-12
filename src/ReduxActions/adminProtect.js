import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  adminVar: false,
}

export const adminProtect = createSlice({
  name: 'admin',
  initialState,
  reducers: {
    trutheFunctionAdmin: (state) => {

      state.adminVar=true
    },
    lieFunctionAdmin: (state) => {
        state.adminVar=false
    }
    }
 
  
})

// Action creators are generated for each case reducer function
export const { trutheFunctionAdmin, lieFunctionAdmin} = adminProtect.actions

export default adminProtect.reducer