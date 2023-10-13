import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counter'
import loaderReducer from './loader'

export default configureStore({
    reducer: {
        counter: counterReducer,
        loader: loaderReducer
    },
})