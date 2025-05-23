import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Style.css';
import NavBar from './Navbar';

export default function Recipeadd() {
  const navigate = useNavigate();
  const [message, setMessage] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    image: '',
    ingredients: '• ',
    steps: '1. '
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Enter key for bullet points in ingredients
  const handleBulletKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const value = formData.ingredients;
      const newValue = value + '\n• ';
      setFormData({ ...formData, ingredients: newValue });
    }
  };

  // Handle Enter key for numbered steps
  const handleNumberedKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const lines = formData.steps.split('\n');
      const nextNumber = lines.length + 1;
      const newValue = formData.steps + `\n${nextNumber}. `;
      setFormData({ ...formData, steps: newValue });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send text as-is, or parse if needed
    axios.post('http://localhost:2803/recipe/recipe', formData)
      .then(res => {
        alert('Recipe added successfully! Redirecting...');
        setTimeout(() => {
          navigate('/recipe');
        }, 500);
      })
      .catch(err => {
        setMessage('');
        alert('Something went wrong');
      });
  };

  return (
    <div className='add-containers'>
      <NavBar/>
      <form onSubmit={handleSubmit}>
        <div className='add-main1'>
          <div className='add-main'>
            <div className='add-form'>
            <h1 className='text-center pb-7 text-[30px]'>Add new Recipe</h1>
              <label>Enter Recipe Name:</label><br />
              <input name='name' value={formData.name} onChange={handleChange} required /><br />

              <label>Image URL:</label><br />
              <input name='image' value={formData.image} onChange={handleChange} required /><br />

              <label>Enter Ingredients:</label><br />
              <textarea
                name='ingredients'
                value={formData.ingredients}
                onChange={handleChange}
                onKeyDown={handleBulletKeyDown}
                required
              /><br />

              <label>Enter Steps:</label><br />
              <textarea
                name='steps'
                value={formData.steps}
                onChange={handleChange}
                onKeyDown={handleNumberedKeyDown}
                required
              /><br />

              <button className='btn1' type='submit'>Add Recipe</button>
            </div>
          </div>
        </div>
      </form>
      {message}
    </div>
  );
}
