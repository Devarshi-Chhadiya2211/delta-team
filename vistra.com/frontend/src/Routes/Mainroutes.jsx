import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import Signup from '../Pages/Signup'
import Login from '../Pages/Login'
import Home from '../Pages/Home'

const MainRoutes = () => {
  return (
    <>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
    </Routes>
    </>
  )
}

export default MainRoutes