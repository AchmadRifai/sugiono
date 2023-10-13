import * as React from 'react'
import { Button } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from '../redux/counter'

export default function Index() {
    const count = useSelector(state => state.counter.counter), dispatch = useDispatch()
    return <div>
        <p><Button onClick={() => dispatch(increment())} variant='contained'>Plus {count}</Button></p>
        <p><Button onClick={() => dispatch(decrement())} variant='contained'>Minus {count}</Button></p>
    </div>
}