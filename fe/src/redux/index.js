import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counter'
import loaderReducer from './loader'
import authReducer from './auth'

export default configureStore({
    reducer: {
        counter: counterReducer,
        loader: loaderReducer,
        auth: authReducer
    },
})