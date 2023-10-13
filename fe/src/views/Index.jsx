import * as React from 'react'
import SignIn from './SignIn'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

export default function Index() {
    const token = useSelector(state => state.auth.token)
    return <div>
        {token ? <Navigate to='/dashboard' replace /> : <SignIn />}
    </div>
}