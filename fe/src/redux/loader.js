import { createSlice } from '@reduxjs/toolkit'

export const loaderSlice = createSlice({
    name: 'loader',
    initialState: {
        load: false
    },
    reducers: {
        loading: state => {
            state.load = true
        },
        loaded: state => {
            state.load = false
        }
    }
})

export const { loaded, loading } = loaderSlice.actions

export default loaderSlice.reducer