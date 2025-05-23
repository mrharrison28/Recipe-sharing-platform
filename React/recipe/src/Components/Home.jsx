import React from 'react'
import './Style.css'
import Footer from './Footer'
import { useNavigate } from 'react-router-dom'
import NavBar from './Navbar'
export default function Home() {
  const navigate = useNavigate()
  return (
    <div className='fonts'>
      <section className=" bg">
        <NavBar/>
        <div className=" 2xl:container mx-auto  text-white">
            <div className="w-[95%] mx-auto grid grid-cols-1">
                <div className="flex flex-col justify-center items-center h-[100vh] gap-3">
                <h1 className="text-[25px] font-[600]">Delicious Recipe for Cook</h1>
                <p className="text-[16px] font-[400]">Cook Smart & Healthy</p>
                <div className="flex gap-3">
                <button className="bg-[#cf8512] text-white text-[16px] p-2 rounded-md font-[500]" onClick={()=>{navigate('/recipe')}}>View Recipe</button>
                <button className="bg-none text-[#cf8512] text-[16px] border-[3px] border-[#cf8512] font-[500] rounded-lg p-2" onClick={()=>{navigate('/recipe/add')}}>Add Recipe</button>
            </div>
            </div>
            </div>
        </div>
    </section>
    <section className="p-5">
        <div className=" 2xl:container mx-auto font-[poppins]">
            <div className="w-[95%] mx-auto">
                <h1 className="text-[24px] font-[800] py-4">About Us</h1>
                <p className="text-[17px] font-[400] pb-4">We are more than just a recipe site — we’re a community where anyone can cook, share, and grow their culinary skills, all for free.</p>
            </div>
            </div>
    </section>
    <section className="p-5 mb-10">
        <div className=" 2xl:container mx-auto font-[poppins]">
            <div className=" bg-white w-[95%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4">
                <div className="bg-white rounded-2xl flex flex-col items-center justify-center p-7 gap-2 shadow-lg h-[280px]">   
                    <h1 className="text-[20px] font-[700] pb-5">Original & Unique Recipes</h1>
                    <p className="text-[17px] font-[400]">Browse a variety of authentic recipes from global cuisines. Discover dishes created and tested by real home cooks. Each recipe includes step-by-step guidance and tips.</p>
                </div>
                <div className="bg-white rounded-2xl flex flex-col justify-center items-center p-7 gap-2 shadow-lg">
                    <h1 className="text-[20px] font-[700] pb-5">Share & Explore Your Skills</h1>
                    <p className="text-[17px] font-[400]">Upload your own recipes and showcase your cooking talent. Build your profile as a food creator and inspire others. Take part in cooking challenges and trending recipe themes.</p>
                </div>
                <div className="bg-white rounded-2xl flex flex-col justify-center items-center p-7 gap-2 shadow-lg">
                    <h1 className="text-[20px] font-[700] pb-5">Free Learning for Everyone</h1>
                    <p className="text-[17px] font-[400]">100% free access to all features. Learn how to cook from scratch with beginner-friendly recipes. Whether you’re a newbie or pro, there’s something new to learn every day.</p>
                </div>
            </div>
        </div>
    </section>
    {/* <section class="p-5">
        <div class="2xl:container mx-auto font-[poppins]">
            <div class="w-[95%] mx-auto grid grid-cols-1 md:grid-cols-2">
                <div class="flex flex-row justify-center items-center">
                    <img src="https://ik.imagekit.io/harrison/Food%20Store/healthy-food-plate-img.png"
                        alt="healthy food"/>
                </div>
                <div class="flex  flex-col justify-center items-start gap-3">
                    <h1 class="text-[36px] font-[600]">Healthy, Organic, Delicious Recipe</h1>
                    <p class="text-[16px] font-[400]">Say no to harmful chemicals and go fully organic with our range of
                        fresh fruits and veggies.
                        Pamper your body and your senses with the true and unadulterated gifts from mother nature. with
                        the true and unadulterated gifts from mother nature.</p>
                    <button class="bg-[#c8ab00] text-white text-[16px] p-2 rounded-md font-[500]" onClick={()=>{navigate('/recipe')}}>View Recipe</button>
                </div>
            </div>
        </div>
    </section> */}
    <Footer/>
    </div>
    
  )
}
