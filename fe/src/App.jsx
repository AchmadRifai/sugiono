import { createBrowserRouter, RouterProvider, } from "react-router-dom"
import { Provider } from 'react-redux'
import Index from "./views/Index"
import store from './redux/index'

const router = createBrowserRouter([
  { path: '/', element: <Index /> }
])

export default function App() {
  return <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
}