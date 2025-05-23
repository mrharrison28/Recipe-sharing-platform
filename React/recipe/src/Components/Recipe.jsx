import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import NavBar from './Navbar';
import './Style.css'; 
import Footer from './Footer';

export default function Recipe() {
  const [list, setList] = useState([]);
  const cardRefs = useRef([]);
  const [inView, setInView] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:2803/recipe/recipe')
      .then(res => setList(res.data.message))
      .catch(err => console.log(err));
  }, []);

  const navigate = useNavigate();

  useEffect(() => {
    cardRefs.current = cardRefs.current.slice(0, list.length + 1); // +1 for Add Card

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const index = Number(entry.target.dataset.index);
        if (entry.isIntersecting) {
          setInView((prev) => {
            const updated = [...prev];
            updated[index] = true;
            return updated;
          });
          observer.unobserve(entry.target); // animate once
        }
      });
    }, {
      threshold: 0.3,
    });

    cardRefs.current.forEach((el) => el && observer.observe(el));

    return () => observer.disconnect();
  }, [list]);

  return (
    <>
      <div className='bg-[#111516]'>
        <NavBar />
      </div>

      <div className="recipe-containers">
        {list.map((x, index) => (
          <div
            key={x._id}
            className={`recipe-card ${inView[index] ? 'fade-in' : ''}`}
            ref={(el) => (cardRefs.current[index] = el)}
            data-index={index}
          >
            <div className="cardimg">
              <img src={x.image} alt="recipe" />
            </div>

            <div className="title">
              <p><span>{x.name}</span></p>
            </div>

            <div className="curve_three"></div>
            <div className="curve_four"></div>

            <div className="tag">
              <button onClick={() => navigate(`/recipe/${x._id}`)}>
                <span>View Recipe</span>
              </button>
            </div>

            <div className="curve_one"></div>
            <div className="curve_two"></div>
          </div>
        ))}

        {/* Add new card */}
        <div
          className={`recipe-card ${inView[list.length] ? 'fade-in' : ''}`}
          ref={(el) => (cardRefs.current[list.length] = el)}
          data-index={list.length}
        >
          <div className="cardimg">
            <Link to="/recipe/add" className="block">
              <img
                src="https://ik.imagekit.io/harrison/MERN%20Stack%20/positive-symbol-plus-sign-white-icon-vector-15479330-removebg-preview.png"
                alt="Add Recipe"
              />
            </Link>
          </div>

          <div className="title">
            <p><span>Add your recipe</span></p>
          </div>

          <div className="curve_three"></div>
          <div className="curve_four"></div>

          <div className="tag">
            <button onClick={() => navigate('/recipe/add')}>
              <span>Add now</span>
            </button>
          </div>

          <div className="curve_one"></div>
          <div className="curve_two"></div>
        </div>
      </div>
      <Footer/>
    </>
  );
}
