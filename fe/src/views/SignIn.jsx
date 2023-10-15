import { Button, TextField } from '@mui/material'
import { useState } from 'react'
import Msg from '../componenents/Msg'
import { useDispatch } from 'react-redux'
import { setAuth } from '../redux/auth'
import FullForm from '../layout/FullForm'

export default function SignIn() {
    const [msg] = useState(''), [email, setEmail] = useState(''), [sandi, setSandi] = useState(''), dispatch = useDispatch()
    const login = () => dispatch(setAuth(email))
    return <FullForm title='Sign In'>
        <TextField margin="normal" required value={email} onChange={e => setEmail(e.target.value)} fullWidth id="email" label="Email" name="email" autoComplete="email" autoFocus />
        <TextField margin="normal" required fullWidth value={sandi} onChange={e => setSandi(e.target.value)} name="password" label="Password" type="password" id="password" autoComplete="current-password" />
        <Button type="submit" onClick={login} fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>Sign In</Button>
        {msg ? <Msg>{msg}</Msg> : ''}
    </FullForm>
}