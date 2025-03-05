/* eslint-disable jsx-a11y/img-redundant-alt */
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate} from 'react-router-dom'

export default function Recipe() {
    const[list,setList]=useState([])
        useEffect(()=>{
            axios.get('https://recipe-sharing-platform-back.onrender.com')
            .then(res=>setList(res.data.message))
            .catch(err=>console.log(err))
        },[])
    const navigate=useNavigate()
  return (
    <>
    <div class="recipe-containers ">
        {list.map(x=>(
        <div class="recipe-card">
        
            
            <div class="cardimg">
                <img src={x.image} alt="image"/>
            </div>
            
            <div class="title">
                <p><span>{x.name}</span></p>
            </div>
           
            <div class="curve_three"></div>
            <div class="curve_four"></div>
            
            <div class="tag"><button onClick={()=>{navigate(`/recipe/${x._id}`)}}><span>View Recipe</span></button></div>
            <div class="curve_one"></div>
            <div class="curve_two"></div>
            
            {/*  */}
       
        </div>
 ))}
        {/* add new */}
        <div class="recipe-card">
            <div class="cardimg">
            <Link to="/recipe/add" className='block'>
            <img src='https://ik.imagekit.io/harrison/MERN%20Stack%20/positive-symbol-plus-sign-white-icon-vector-15479330-removebg-preview.png' alt=''/>
                    </Link>
            </div>
            <div class="title">
                <p><span>Add your recipe</span></p>
            </div>
            <div class="curve_three"></div>
            <div class="curve_four"></div>
            <div class="tag"><button onClick={()=>{navigate('/recipe/add')}}><span>Add now</span></button></div>
            <div class="curve_one"></div>
            <div class="curve_two"></div>
        </div>
        
        </div>
        </>
    
  )
}
