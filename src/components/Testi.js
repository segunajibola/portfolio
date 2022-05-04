import shegzy from '../assets/logo.png';
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const Testi = () => {
  return (
    <div name='testimonials' className='w-full text-gray-300 bg-[#0a192f]'>
      <div className='flex flex-col justify-center items-center w-full h-full pt-20'>
        {/* <div className='relative pt-20 pl-4'>
            <p className='opacity-10 text-9xl font-bold inline border-b-4 border-yellow-600'>Contact</p>
        </div> */}
        <div className='max-w-[1000px] w-full'>
          <div className='absolute pb-8 pl-4'> 
          {/* absolute -mt-16 pb-8 pl-4 --- relative pt-20 pl-4*/}
            <p className='text-8xl font-bold inline tracking-tighter opacity-10 border-b-4 border-yellow-600'>
              Testimonials
            </p>
          </div>
        </div>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
          <div className='sm:text-right mt-16 md:mt-20 text-2xl font-bold'>
            <p>What others are saying.</p>
          </div>
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="w-[38rem]"
          >
            <SwiperSlide className="md:mt-1 p-2">
              <figure className="bg-gray-800 grid rounded-xl p-5 shadow-lg shadow-gray-700">
                <img className="w-32 h-32 rounded-full mx-auto" src={shegzy} alt="" />
                <div className="pt-6 text-center space-y-3 text-gray-500">
                  <blockquote className='mx-auto'>
                      <p className="text-lg font-semibold text-gray-300 mx-4">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum adipisci maxime eligendi tempora tempore, consequuntur nihil, libero tenetur sed nesciunt, unde accusantium! Ea sint saepe quaerat quia est eius fugit.
                      </p>
                  </blockquote>
                  <figcaption className="font-medium">
                      <div className="">
                          John hff
                      </div>
                      <div className="">
                            Staff Engineer, ABL
                      </div>
                  </figcaption>
                </div>
              </figure>
            </SwiperSlide>
            <SwiperSlide className="md:mt-1 p-2">
              <figure className="bg-gray-800 grid rounded-xl p-5 shadow-lg shadow-gray-700">
                <img className="w-32 h-32 rounded-full mx-auto" src={shegzy} alt="" />
                <div className="pt-6 text-center space-y-3 text-gray-500">
                  <blockquote className='mx-auto'>
                      <p className="text-lg font-semibold text-gray-300 mx-4">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum adipisci maxime eligendi tempora tempore, consequuntur nihil, libero tenetur sed nesciunt, unde accusantium! Ea sint saepe quaerat quia est eius fugit.
                      </p>
                  </blockquote>
                  <figcaption className="font-medium">
                      <div className="">
                          John Doe
                      </div>
                      <div className="">
                            Staff Engineer, ABL
                      </div>
                  </figcaption>
                </div>
              </figure>
            </SwiperSlide>  
          </Swiper>
          
          
        </div>
      </div>
    </div>
  )
}

export default Testi