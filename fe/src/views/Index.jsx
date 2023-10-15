import * as React from 'react'
import SignIn from './SignIn'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import Initial from './Initial'

export default function Index() {
    const token = useSelector(state => state.auth.token), initial = useSelector(state => state.initial.willInitial)
    return <div>
        {initial ? <Initial /> : token ? <Navigate to='/dashboard' replace /> : <SignIn />}
    </div>
}