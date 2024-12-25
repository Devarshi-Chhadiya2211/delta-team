import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Signup from '../Pages/Signup'
import Login from '../Pages/Login'
import Home from '../Pages/Home'
import AddProduct from '../Pages/AddProduct'
import AddtoCart from '../Pages/AddtoCart'

const MainRoutes = () => {
  return (
    <>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/addproduct" element={<AddProduct/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/addtocart" element={<AddtoCart/>}/>
    </Routes>
    </>
  )
}

export default MainRoutes