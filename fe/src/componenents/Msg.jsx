import { Alert, AlertTitle } from "@mui/material"

export default function Msg({ children }) {
    return <Alert severity="error">
        <AlertTitle>Error</AlertTitle>
        {children}
    </Alert>
}