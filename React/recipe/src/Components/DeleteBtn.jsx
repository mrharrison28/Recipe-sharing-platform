import React, { useState } from 'react'
import './Style.css'
import axios from 'axios';
import {useNavigate, useParams } from 'react-router-dom';
export default function DeleteBtn() {
    document.querySelectorAll('.button').forEach(button => button.addEventListener('click', e => {
        if(!button.classList.contains('delete')) {
            button.classList.add('delete');
            setTimeout(() => button.classList.remove('delete'), 3200);
        }
        e.preventDefault();
    }));
    const navigate=useNavigate()
    const {pid}=useParams()
    const[message,setMessage]=useState('')
    const handleSubmit=(e)=>{
        e.preventDefault()
        axios.delete(`http://localhost:2803/recipe/recipes/${pid}`)
        
        .then(res=>{
            
            setTimeout(() => {
                navigate('/recipe')
             },3200);
        })
        .catch(err=>{
            setMessage('')
            alert('Something went wrong')
        })
    }
  return (
    <button class="button" onClick={handleSubmit}>
        <div class="trash">
            <div class="top">
                <div class="paper"></div>
            </div>
            <div class="box"></div>
            <div class="check">
                <svg viewBox="0 0 8 6">
                    <polyline points="1 3.4 2.71428571 5 7 1"></polyline>
                </svg>
            </div>
        </div>
        <span>Delete Recipe</span>
    </button>
  )
}
