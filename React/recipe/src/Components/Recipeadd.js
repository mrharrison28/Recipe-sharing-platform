import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Style.css'
export default function Recipeadd() {
    const navigate=useNavigate()
    const[message,setMessage]=useState('')
    const[formData,setFormData]=useState({
        name:'',
        image:'',
        ingredients:'',
        steps:''
    })
    const handleChange=(e)=>{
        setFormData({...formData,[e.target.name]:e.target.value})
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        axios.post('https://recipe-sharing-platform-back.onrender.com',formData)
        
        .then(res=>{
            alert('Signup Successfull Redirecting to Recipe Page...')
            setTimeout(() => {
                navigate('/recipe')
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
            <div className='form form1'>
            {/* <h1 className='text-[30px] relative bottom-6'>Enter your Recipe</h1> */}
        <label>Enter Recipe name:</label><br></br>
        <input name='name' value={formData.name} onChange={handleChange} required/><br></br>
        <label>Image URL: </label><br></br>
        <input name='image' value={formData.image} onChange={handleChange} required/><br></br>    
        <label>Enter Ingredients:</label><br></br>
        <textarea name='ingredients' value={formData.ingredients} onChange={handleChange} required></textarea><br></br>
        <label>Enter steps :</label><br></br>
        <textarea name='steps' value={formData.steps} onChange={handleChange} required></textarea><br></br>
        <button className='btn1' type='submit'>Add Recipe</button>
        </div>
        </div>
        </div>
      </form>
      
      {message}
    </div>
  )
}
