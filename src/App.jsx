import { useState } from 'react'
import './App.css'
import Home from './pages/Home/Home'
import { Route, Routes } from 'react-router-dom'
import Products from './pages/Products/Products'


function App() {

  return (
    <>
       <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/products" element={<Products/>}/>
       </Routes>
    </>
  )
}

export default App
