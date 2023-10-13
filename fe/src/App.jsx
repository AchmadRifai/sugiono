import { createBrowserRouter, RouterProvider, } from "react-router-dom"
import { Provider } from 'react-redux'
import Index from "./views/Index"
import store from './redux/index'
import Loader from "./componenents/Loader"

const router = createBrowserRouter([
  { path: '/', element: <Index /> }
])

export default function App() {
  return <Provider store={store}>
    <Loader />
    <RouterProvider router={router} />
  </Provider>
}