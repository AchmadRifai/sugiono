import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        token: ''
    }, reducers: {
        setAuth: (state, action) => {
            state.token = action.payload
        }
    }
})

export const { setAuth } = authSlice.actions

export default authSlice.reducer