import { configureStore } from '@reduxjs/toolkit'

import userProtect from '../ReduxActions/userProtect'
import adminProtect from '../ReduxActions/adminProtect'
import superProtect from '../ReduxActions/superProtect'
import backendPath from '../ReduxActions/backendPath'

export const store = configureStore({
  reducer: {

    user : userProtect,
    admin : adminProtect,
    super : superProtect,
    backPath : backendPath

  },
})