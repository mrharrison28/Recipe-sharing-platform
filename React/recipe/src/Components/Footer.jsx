import React from "react";
import { Instagram, Youtube, Facebook, Twitter } from "lucide-react";
export default function Footer() {
  return (
    <>
      <section class="bg-[#191f24] h-[200px]">
        <div class="2xl:container mx-auto font-[poppins]">
          <div class="w-[95%] mx-auto grid grid-cols-1 ">
            <div>
            <div className="flex justify-around items-center">
              <div>
                <img
                  src="https://ik.imagekit.io/harrison/MERN%20Stack%20/r-removebg-preview.png"
                  width="200px"
                  alt=""
                />
              </div>
              <div className="border-[1.5px] h-[150px] border-[#3a4854]"></div>
              {/* contact us */}
              <div className="text-white flex flex-col gap-3">
                <p className="font-bold text-[18px]">Contact us</p>
                <div className="flex gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="1.5em"
                    height="1.5em"
                  >
                    <path
                      fill="currentColor"
                      d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7m0 9.5a2.5 2.5 0 0 1 0-5a2.5 2.5 0 0 1 0 5"
                    ></path>
                  </svg>
                  <p>69, Middle Streer, Thoppur</p>
                </div>
                <div className="flex gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="1.5em"
                    height="1.5em"
                  >
                    <path
                      fill="currentColor"
                      d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24c1.12.37 2.33.57 3.57.57c.55 0 1 .45 1 1V20c0 .55-.45 1-1 1c-9.39 0-17-7.61-17-17c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1c0 1.25.2 2.45.57 3.57c.11.35.03.74-.25 1.02z"
                    ></path>
                  </svg>
                  <p>Phone: 8438974801</p>
                </div>
                <div className="flex gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="1.5em"
                    height="1.5em"
                  >
                    <path
                      fill="currentColor"
                      d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 4l-8 5l-8-5V6l8 5l8-5z"
                    ></path>
                  </svg>

                  <p>Email: RecipeMaker's@gmail.com</p>
                </div>
              </div>
              <div className="border-[1.5px] h-[150px] border-[#3a4854]"></div>
              <div className="flex flex-col justify-start items-start gap-3 text-white">
                <p className="font-bold text-[18px]">Follow us on</p>
                <div className="flex gap-3">
                  <Instagram size={28} />
                  <Facebook size={28} />
                  <Youtube size={32} className="relative bottom-0.5" />
                  <Twitter size={28} />
                </div>
              </div>
            </div>
            
            </div>
          </div>
        </div>
        <p className="bg-[#191f24] w-[100%] text-[#404f5c] text-center pb-2">Copyright &copy; 2025 RecipeMaker's All rights reserved</p>
      </section>
    </>
  );
}
