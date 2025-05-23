import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import './Style.css'
import NavBar from './Navbar'
export default function Signup() {
    const navigate=useNavigate()
    const[message,setMessage]=useState('')
    const[formData,setFormData]=useState({
        username:'',
        name:'',
        email:'',
        password:''
    })
    const handleChange=(e)=>{
        setFormData({...formData,[e.target.name]:e.target.value})
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        axios.post('http://localhost:2803/users/signup',formData)
        
        .then(res=>{
            alert('Signup Successfull Redirecting to Login...')
            setTimeout(() => {
                navigate('/login')
             });
        })
        .catch(err=>{
            setMessage('')
            alert('Something went wrong')
        })
    }
  return (
    <div className='containers'>
      <NavBar/>
      <form onSubmit={handleSubmit}>
        <div className='main1'>
        <div className='main'>
            <div className='signup-form'>
            <h1 className='text-center py-5 text-[30px]'>Create an account</h1>
        <label>UserName:</label>
        <input type='text' name='username' value={formData.username} onChange={handleChange} required/><br></br>
        <label>Name:</label>
        <input type='text' name='name' value={formData.name} onChange={handleChange} required/><br></br>
        <label>Email:</label>
        <input type='email' name='email' value={formData.email} onChange={handleChange} required/><br></br>
        <label>Password:</label>
        <input type='password' name='password' value={formData.password} onChange={handleChange} required/><br></br>
        <button className='btn1' type='submit'>Signup</button>
        <p className='login-para'>Already have an account? <span className='sign' onClick={() => navigate('/login') }>Login</span></p>
        </div>
        </div>
        </div>
      </form>
      
      {message}
    </div>
  )
}
