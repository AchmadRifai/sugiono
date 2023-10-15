import { Box, Container, CssBaseline, ThemeProvider, Typography, createTheme } from "@mui/material"
import Copyright from "../componenents/Copyright"

const defaultTheme = createTheme()

export default function FullForm({ title, children }) {
    return <ThemeProvider theme={defaultTheme}>
        <Container component='main' maxWidth='xs'>
            <CssBaseline />
            <Box sx={{ marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center', }}>
                <Typography component='h1' variant='h5'>{title}</Typography>
                <Box component='form' noValidate sx={{ mt: 1 }}>
                    {children}
                </Box>
            </Box>
            <Copyright sx={{ mt: 8, mb: 4 }} />
        </Container>
    </ThemeProvider>
}