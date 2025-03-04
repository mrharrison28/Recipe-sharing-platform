import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function Recipeshow() {
        const[list,setList]=useState({})
        const {pid}=useParams()
        useEffect(()=>{
            axios.get(`http://localhost:2803/recipe/recipe/${pid}`)
            .then(res=>setList(res.data.message))
            .catch(err=>console.log(err))
        
        },[pid])
  return (
    <div className='2xl:container bg-[#22223b] h-[200vh]'>
        
        <div className='w-[90%] mx-auto bg-[#22223b] text-white font-[poppins]' > 
        <h1 className='text-[30px] text-center p-4'>Explore your Recipe</h1>
        <div className='flex flex-col justify-center items-center '>
            <img src={list.image} alt='' className='border-[3px] border-[#ffffff] rounded-xl'/>
            <h1 className='text-[25px] pt-5'>{list.name}</h1>
        </div>
        <div className='flex justify-center mt-20 gap-6 '>
            <div className='w-[600px] h-[400px] p-5 box-border leading-[2]'>
            <h1>Ingredients:</h1><br></br>
            <p className='w-[600px]'>{list.ingredients}</p>
            </div>
            <div className='border-l-[3px] ml-5'>
            </div>
            <div className=' w-[600px] h-[400px] p-5 box-border leading-[2]'>
            <h1>Steps to follow:</h1><br></br>
            <p>{list.steps}</p>
            </div>
        </div>
        </div>
      
    </div>
  )
}
