import { Box, Button, Container, CssBaseline, TextField, Typography } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import Copyright from '../componenents/Copyright'
import { useState } from 'react'
import Msg from '../componenents/Msg'
import { useDispatch } from 'react-redux'
import { setAuth } from '../redux/auth'

const defaultTheme = createTheme()

export default function SignIn() {
    const [msg] = useState(''), [email, setEmail] = useState(''), [sandi, setSandi] = useState(''), dispatch = useDispatch()
    const login = () => dispatch(setAuth(email))
    return <ThemeProvider theme={defaultTheme}>
        <Container component='main' maxWidth='xs'>
            <CssBaseline />
            <Box sx={{ marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center', }}>
                <Typography component='h1' variant='h5'>Sign In</Typography>
                <Box component='form' noValidate sx={{ mt: 1 }}>
                    <TextField margin="normal" required value={email} onChange={e => setEmail(e.target.value)} fullWidth id="email" label="Email" name="email" autoComplete="email" autoFocus />
                    <TextField margin="normal" required fullWidth value={sandi} onChange={e => setSandi(e.target.value)} name="password" label="Password" type="password" id="password" autoComplete="current-password" />
                    <Button type="submit" onClick={login} fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>Sign In</Button>
                </Box>
                {msg ? <Msg>{msg}</Msg> : ''}
            </Box>
            <Copyright sx={{ mt: 8, mb: 4 }} />
        </Container>
    </ThemeProvider>
}