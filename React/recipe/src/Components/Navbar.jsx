import React from 'react'
import './Style.css'
import { NavLink } from 'react-router-dom'
export default function NavBar() {
  return (
    <div className='navbar-cont flex justify-between items-start h-[70px]'>
      <div>
        <img className='relative bottom-5 right-4' src='https://ik.imagekit.io/harrison/MERN%20Stack%20/r-removebg-preview.png' width="120px" alt=''/>
      </div>
      <nav className='primary-nav relative top-3'>
      <NavLink to='/' className='nav-link nav-link-ltr'>Home</NavLink>
      <NavLink to='/recipe' className='nav-link nav-link-ltr'>Recipe</NavLink>
      <NavLink to='/signup' className='nav-link nav-link-ltr'>Signup</NavLink>
      <NavLink to='/login' className='nav-link nav-link-ltr'>Login</NavLink>
    </nav>
    </div>
  )
}
