import { createSlice } from '@reduxjs/toolkit'

export const wizardSlice = createSlice({
    initialState: {
        step: 0,
        skip: []
    }, reducers: {
        done(state) {
            state.skip = 0
            state.step = []
        }, next(state) {
            state.skip += 1
        }, prev(state) {
            if (0 < state.skip.length) state.skip = state.skip.pop()
            else state.skip -= 1
        }, skip(state) {
            state.skip.push(state.step)
            state.skip += 1
        }
    }, name: 'wizard'
})

export const { done, next, prev, skip } = wizardSlice.actions

export default wizardSlice.reducer