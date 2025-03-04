import React from 'react'
import './Style.css'
import { NavLink } from 'react-router-dom'
export default function NavBar() {
  return (
    <div className='navbar-cont flex justify-between items-start h-[70px]'>
      <div>
        <img className='relative bottom-4' src='https://ik.imagekit.io/harrison/MERN%20Stack%20/Recipe_king__2_-removebg-preview.png' width="100px" alt=''/>
      </div>
      <nav className='primary-nav relative top-3'>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/recipe'>Recipe</NavLink>
      <NavLink to='/signup'>Signup</NavLink>
      <NavLink to='/login'>Login</NavLink>
    </nav>
    </div>
  )
}
