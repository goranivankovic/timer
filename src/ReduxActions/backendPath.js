import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  path: 'http://check.ma-go.net',
}

export const backendPath = createSlice({
  name: 'backPath',
  initialState,
  reducers: {
    trutheFunctionAdmin: (state) => {

      state.path=true
    },
    lieFunctionAdmin: (state) => {
        state.path=false
    }
    }
 
  
})

// Action creators are generated for each case reducer function
export const { trutheFunctionAdmin, lieFunctionAdmin} = backendPath.actions

export default backendPath.reducer