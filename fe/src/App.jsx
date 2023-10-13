import { createBrowserRouter, RouterProvider, } from "react-router-dom"
import { Provider } from 'react-redux'
import Index from "./views/Index"
import store from './redux/index'
import Loader from "./componenents/Loader"
import Test from "./views/Test"
import Dashboard from "./views/Dashboard"

const router = createBrowserRouter([
  { path: '/', element: <Index /> },
  { path: '/test', element: <Test /> },
  { path: '/dashboard', element: <Dashboard /> }
])

export default function App() {
  return <Provider store={store}>
    <Loader />
    <RouterProvider router={router} />
  </Provider>
}