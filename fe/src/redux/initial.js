import { createSlice } from '@reduxjs/toolkit'

export const initialSlice = createSlice({
    name: 'initial',
    initialState: {
        user: {
            username: '',
            password: '',
            name: '',
            role: []
        }, server: {
            host: '',
            user: '',
            idRsa: '',
            idPubRsa: '',
            password: ''
        }, github: {
            user: '',
            pat: ''
        }, gitlab: {
            user: '',
            pat: ''
        }, willInitial: true,
        step: 1
    },
    reducers: {
        setInitial: (state, action) => { },
        setUserUsername: (state, action) => { },
        setUserPassword: (state, action) => { },
        setUserName: (state, action) => { },
        setUserRole: (state, action) => { },
        setServerHost: (state, action) => { },
        setServerUser(state, action) { },
        setServerIdRsa(state, action) { },
        setServerIdPubRsa(state, action) { },
        setGithubUser(state, action) { },
        setGithubPat(state, action) { },
        setGitlabUser(state, action) { },
        setGitlabPat(state, action) { },
        setServerPassword(state, action) { },
        setStep(state, action) { }
    }
})

export const { setInitial, setUserName, setUserPassword, setUserRole, setUserUsername, setServerHost, setServerPassword, setStep,
    setServerIdPubRsa, setServerIdRsa, setServerUser, setGithubPat, setGithubUser, setGitlabPat, setGitlabUser } = initialSlice.actions

export default initialSlice.reducer