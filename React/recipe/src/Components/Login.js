import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Style.css'
// import { useAuth } from './Auth';
// import './login.css';

export default function Login() {
  const navigate = useNavigate();
//   const auth = useAuth();
  const [mess, setMess] = useState('');
  const [log, setLog] = useState({
    email: '',
    password: ''
  });

  const handle = (e) => {
    e.preventDefault();
    axios.post('http://localhost:2803/users/login', log)
      .then(res => {
        alert(res.data.message);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const handleLog = (e) => {
    setLog({ ...log, [e.target.name]: e.target.value });
  };

  return (
    <div className="containers">
      <form className="login-form" onSubmit={handle}>
        <div className='main1'>
        {/* <h2>Login</h2> */}
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
        <label>Email:</label>
        <input className='inp1'
          type="text" 
          name="email"  
          value={log.email} 
          onChange={handleLog} 
        />
        
        <label>Password:</label>
        <input className='inp1'
          type="password" 
          name="password" 
          value={log.password} 
          onChange={handleLog} 
        />
        
        <button className='btn1' type="submit">LOGIN</button>
        <p className="error-message">{mess}</p>
        <p className='login-para'>Don't have an account? <span className='sign' onClick={() => navigate('/signup') }>Sign up</span></p> 
        </div>
        </div>
        </div>
      </form>
    </div>
  );
}