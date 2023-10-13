import * as React from 'react'
import { Backdrop, CircularProgress } from '@mui/material'
import { useSelector } from 'react-redux'

export default function Loader() {
    const load = useSelector(state => state.loader.load)
    return <Backdrop open={load} sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <CircularProgress size='30em' color='inherit' />
    </Backdrop>
}