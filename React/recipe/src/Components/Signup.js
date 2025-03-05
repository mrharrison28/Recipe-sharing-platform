import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import './Style.css'
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
        axios.post('https://recipe-sharing-platform-back.onrender.com',formData)
        
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
      <form onSubmit={handleSubmit}>
        <div className='main1'>
        <div className='main'>
        <div className='images1'>
              <h1>Food recipe platform</h1>
              <div className='points'>
              <ul>
                <li>Explore new recipes!</li>
                <li>recipes Ingredients & Steps to follow</li>
                <li>Here you can upload your favouite recipe</li>
                <li>Step By Step Directions for Mixing & Handling.</li>
                  <li> The recipe should have directions for how to<br></br> prepare it.</li>
              </ul>
              </div>
              <img src='https://ik.imagekit.io/harrison/MERN%20Stack%20/istockphoto-1190330112-612x612-removebg-preview.png' alt=''/>
              
            </div>
            <div className='form'>
        <label>UserName:</label>
        <input type='text' name='username' value={formData.username} onChange={handleChange} required/><br></br>
        <label>Name:</label>
        <input type='text' name='name' value={formData.name} onChange={handleChange} required/><br></br>
        <label>Email:</label>
        <input type='email' name='email' value={formData.email} onChange={handleChange} required/><br></br>
        <label>Password:</label>
        <input type='password' name='password' value={formData.password} onChange={handleChange} required/><br></br>
        <button className='btn1' type='submit'>Signup</button>
        </div>
        </div>
        </div>
      </form>
      
      {message}
    </div>
  )
}
