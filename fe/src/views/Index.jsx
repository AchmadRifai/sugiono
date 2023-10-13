import * as React from 'react'
import { Button } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from '../redux/counter'
import { loading } from '../redux/loader'

export default function Index() {
    const count = useSelector(state => state.counter.counter), dispatch = useDispatch()
    return <div>
        <p><Button onClick={() => dispatch(increment())} variant='contained'>Plus {count}</Button></p>
        <p><Button onClick={() => dispatch(decrement())} variant='contained'>Minus {count}</Button></p>
        <p><Button onClick={() => dispatch(loading())} variant='contained'>Loading</Button></p>
    </div>
}