import { Button } from "@mui/material"
import { useDispatch, useSelector } from "react-redux"
import { Navigate } from "react-router-dom"
import { setAuth } from "../redux/auth"

export default function Dashboard() {
    const token = useSelector(state => state.auth.token), dispatch = useDispatch()
    const logout = () => dispatch(setAuth(''))
    return <div>
        {token ? <Button onClick={logout} variant='contained'>Logout</Button> : <Navigate replace to='/'/>}
    </div>
}