import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Cart from './components/Cart/Cart.jsx';
import Home from './components/Home/Home.jsx'
import './index.css'


let router=createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App/>} >
        <Route path="" element={<Home/>}  />
        <Route path="/cart" element={<Cart/>}  />
      </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
