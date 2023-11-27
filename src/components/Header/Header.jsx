import React from 'react'
import "./Header.css"
import { NavLink } from 'react-router-dom'


export default function Header() {
  return (
    <nav className='topNav'>
        <NavLink to="/" >Home</NavLink>
        <NavLink to="/products" >Products</NavLink>
    </nav>
  )
}
