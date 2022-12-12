import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  superVar: false,
}

export const superProtect = createSlice({
  name: 'super',
  initialState,
  reducers: {
    trutheFunctionSuper: (state) => {

      state.superVar=true
    },
    lieFunctionSuper: (state) => {
        state.superVar=false
    }
    }
 
  
})

// Action creators are generated for each case reducer function
export const { trutheFunctionSuper, lieFunctionSuper } = superProtect.actions

export default superProtect.reducer