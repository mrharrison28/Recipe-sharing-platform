import React from 'react'
import './Style.css'
import Footer from './Footer'
import { useNavigate } from 'react-router-dom'
export default function Home() {
  const navigate = useNavigate()
  return (
    <div className='fonts'>
      <section className="p-5 bg">
        <div className=" 2xl:container mx-auto font-[poppins] text-white">
            <div className="w-[95%] mx-auto grid grid-cols-1">
                <div className="flex flex-col justify-center items-center h-[100vh] gap-3">
                <h1 className="text-[25px] font-[600]">Get Delicious Recipe Anytime</h1>
                <p className="text-[16px] font-[400]">Eat Smart & Healthy</p>
                <div className="flex gap-3">
                <button className="bg-[#c8ab00] text-white text-[16px] p-2 rounded-md font-[500]" onClick={()=>{navigate('/recipe')}}>View Recipe</button>
                <button className="bg-none text-[#c8ab17] text-[16px] border-[3px] border-[#c8ab17] font-[500] rounded-lg p-2" onClick={()=>{navigate('/recipe/add')}}>Add Recipe</button>
            </div>
            </div>
            </div>
        </div>
    </section>
    <section className="p-5">
        <div className=" 2xl:container mx-auto font-[poppins]">
            <div className="w-[95%] mx-auto">
                <h1 className="text-[24px] font-[800]">Why Choose Us?</h1>
                <p className="text-[16px] font-[400]">We use both original recipes and classNameic versions of famous food
                    items.</p>
            </div>
            </div>
    </section>
    <section className="p-5">
        <div className=" 2xl:container mx-auto font-[poppins]">
            <div className=" bg-white w-[95%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4">
                <div className="bg-white rounded-2xl flex flex-col items-center p-5 gap-2 shadow-lg">
                    <img src="https://ik.imagekit.io/harrison/MERN%20Stack%20/food-serve.webp" alt=""/>
                    <h1 className="text-[18px] font-[600]">Food Recipe</h1>
                    <p className="text-[16px] font-[400]">Experience fine dining at the comfort of your home. All our orders
                        are carefully packed
                        and arranged to give you the nothing less than perfect.</p>
                </div>
                <div className="bg-white rounded-2xl flex flex-col items-center p-5 gap-2 shadow-lg">
                    <img src="https://ik.imagekit.io/harrison/Food%20Store/fruits-img.png" alt=""/>
                    <h1 className="text-[18px] font-[600]">Fresh Ingredients</h1>
                    <p className="text-[16px] font-[400]">The Fresh Food group provides fresh-cut fruits and vegetables
                        directly picked from our partner
                        farms and farm houses so that you always get them tree to plate.</p>
                </div>
                <div className="bg-white rounded-2xl flex flex-col items-center p-5 gap-2 shadow-lg">
                    <img src="https://ik.imagekit.io/harrison/Food%20Store/offers-img.png" alt=""/>
                    <h1 className="text-[18px] font-[600]">Best procedures</h1>
                    <p className="text-[16px] font-[400]">Food Coupons & Offers upto 50% OFF and Exclusive Promo Codes on
                        All Online Food Orders.</p>
                </div>
            </div>
        </div>
    </section>
    <section class="p-5">
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
    </section>
    <Footer/>
    </div>
    
  )
}
