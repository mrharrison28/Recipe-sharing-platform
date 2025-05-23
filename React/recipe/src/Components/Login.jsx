import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Style.css'
import NavBar from './Navbar';

export default function Login() {
  const navigate = useNavigate();
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
          navigate('/')
      })
      .catch(err => {
        alert(err);
      });
  };

  const handleLog = (e) => {
    setLog({ ...log, [e.target.name]: e.target.value });
  };

  return (
    <div className="containers">
      <NavBar/>
      <form className="login-form" onSubmit={handle}>
        <div className='main1'>
        {/* <h2>Login</h2> */}
        <div className='main'>
            <div className='form'>
              <h1 className='text-center pt-10 text-[30px]'>welcome back!!</h1>
        <label className='pt-10'>Email:</label>
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
        
        <button className='btn1' type="submit">Login</button>
        <p className="error-message">{mess}</p>
        <p className='login-para'>Don't have an account? <span className='sign' onClick={() => navigate('/signup') }>Sign up</span></p> 
        </div>
        </div>
        </div>
      </form>
{setMess}
    </div>
  );
}
