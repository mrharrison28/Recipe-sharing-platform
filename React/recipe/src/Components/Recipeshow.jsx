import axios from 'axios';
import React, { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import DeleteBtn from './DeleteBtn';
import NavBar from './Navbar';
import './Style.css'; 
import Footer from './Footer';

export default function Recipeshow() {
  const [list, setList] = useState({});
  const { pid } = useParams();

  const observeRef = useRef([]);
  const [inView, setInView] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:2803/recipe/recipe/${pid}`)
      .then(res => setList(res.data.message))
      .catch(err => console.log(err));
  }, [pid]);

  const ingredients = list.ingredients ? list.ingredients.split('\n') : [];
  const steps = list.steps ? list.steps.split('\n') : [];

  useEffect(() => {
    observeRef.current = observeRef.current.slice(0, ingredients.length + steps.length);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const index = Number(entry.target.dataset.index);
        if (entry.isIntersecting) {
          setInView((prev) => {
            const updated = [...prev];
            updated[index] = true;
            return updated;
          });
          observer.unobserve(entry.target); // trigger only once
        }
      });
    }, {
      threshold: 0.3,
    });

    observeRef.current.forEach((el) => el && observer.observe(el));

    return () => observer.disconnect();
  }, [ingredients.length, steps.length]);

  return (
    <div className='bg-[#111516] text-white font-[poppins]'>
      <NavBar />
      <div className='2xl:container mx-auto h-[250vh]'>
        <div className='flex justify-end p-4'>
          <DeleteBtn />
        </div>
        <div className='w-[90%] mx-auto'>
          <h1 className='main-text text-[50px] text-center p-4 pb-8'>Explore your Recipe</h1>
          <div className='flex flex-col items-center'>
            <img src={list.image} alt='' className='border-[3px] border-[#fff] rounded-xl' />
            <h1 className='cursive text-[25px] pt-5'>{list.name}</h1>
          </div>

          <div className='flex justify-center mt-20 gap-6'>
            <div className='w-[600px] p-5 leading-[2]'>
              <h1 className='text text-[35px] font-[cursive] text-yellow-500'>Ingredients:</h1><br />
              {ingredients.map((ingredient, index) => {
                const isBullet = /^\s*[-•]/.test(ingredient);
                return (
                  <p
                    key={index}
                    ref={el => observeRef.current[index] = el}
                    data-index={index}
                    className={`ingredient-step ${inView[index] ? 'fade-in' : ''}`}
                  >
                    {isBullet ? ingredient : <strong className='text-[17px]'>{ingredient}</strong>}
                  </p>
                );
              })}
            </div>

            <div className='border-l-[3px] ml-5 mt-24 h-[100vh]' />

            <div className='w-[600px] p-5 leading-[2]'>
              <h1 className='text text-[35px] text-yellow-500'>Steps to follow:</h1><br />
              {steps.map((step, index) => {
                const isNumbered = /^\s*\d+\./.test(step);
                return (
                  <p
                    key={index}
                    ref={el => observeRef.current[ingredients.length + index] = el}
                    data-index={ingredients.length + index}
                    className={`ingredient-step ${inView[ingredients.length + index] ? 'fade-in' : ''}`}
                  >
                    {isNumbered ? <strong className='text-[17px]'>{step}</strong> : step}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
