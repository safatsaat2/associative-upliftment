import { Link } from "react-router-dom";
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import { Keyboard, Pagination, Navigation } from 'swiper/modules';

{/* <div className="carousel w-[370px] mx-auto mb-20">
          <div id="slide1" className="carousel-item relative w-full">
            
            
            
           
            

            <div className="absolute flex justify-between transform -translate-y-1/2 -left-1 -right-5 top-1/2">
              <a href="#slide2" style={{}} >
                <img src="https://i.ibb.co/QNmHzYR/buton.png" alt="" />

              </a>
              <a href="#slide2" >

                <img src="https://i.ibb.co/kyXpWHZ/buton-1.png" alt="" />
              </a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            
            
            
            
            

            <div className="absolute flex justify-between transform -translate-y-1/2 -left-1 -right-5 top-1/2">
              <a href="#slide1" style={{}} >
                <img src="https://i.ibb.co/QNmHzYR/buton.png" alt="" />

              </a>
              <a href="#slide1" >

                <img src="https://i.ibb.co/kyXpWHZ/buton-1.png" alt="" />
              </a>
            </div>
          </div>
        </div> */}
const Carro = () => {
  const toTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <>
      <div className=" max-w-7xl relative mx-auto mt-10">
        <h1 className="text-3xl lg:text-4xl font-bold pt-8 mb-5">Popular Services</h1>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            '@0.00': {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            '@0.75': {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            '@1.00': {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            '@1.50': {
              slidesPerView: 4,
              spaceBetween: 40,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Link to="/popularservice/1" onClick={toTop} className="w-[370px] mx-auto ml-4 ">
              <img src="https://i.ibb.co/gwF0fFx/1-3.png" className="rounded-md w-[370px] mx-auto h-full" />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/popularservice/2" onClick={toTop} className="w-[370px] mx-auto ml-4">
              <img src="https://i.ibb.co/b5V5mfR/2-1.png" className="rounded-md w-[370px] mx-auto h-full" />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/popularservice/4" onClick={toTop} className="w-[370px] mx-auto ml-4">
              <img src="https://i.ibb.co/g915hv3/3.png" className="rounded-md w-[370px] mx-auto h-full" />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/popularservice/6" onClick={toTop} className="w-[370px] mx-auto ml-4">
              <img src="https://i.ibb.co/r436jpc/4.png" className="rounded-md w-[370px] mx-auto h-full" />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/popularservice/5" onClick={toTop} className="w-[370px] mx-auto ml-4">
              <img src="https://i.ibb.co/3rXxLtt/5.png" className="rounded-md w-[370px] mx-auto h-full" />
            </Link>
          </SwiperSlide>
          <SwiperSlide><Link to="/popularservice/8" onClick={toTop} className="w-[370px] mx-auto ml-4">
            <img src="https://i.ibb.co/Gtwq3VK/1-4.png" className="rounded-md w-[370px] mx-auto h-full" />
          </Link></SwiperSlide>
          <SwiperSlide>
            <Link to="/popularservice/7" onClick={toTop} className="w-[370px] mx-auto ml-4">
              <img src="https://i.ibb.co/6t9C7dz/2-2.png" className="rounded-md w-[370px] mx-auto h-full" />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/popularservice/5" onClick={toTop} className="w-[370px] mx-auto ml-4">
              <img src="https://i.ibb.co/NV6cFkL/3-2.png" className="rounded-md w-[370px] mx-auto h-full" />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/popularservice/9" onClick={toTop} className="w-[370px] mx-auto ml-4">
              <img src="https://i.ibb.co/j4Sb3LC/4-1.png" className="rounded-md w-[370px] mx-auto h-full" />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/popularservice/10" onClick={toTop} className="w-[370px] mx-auto ml-4">
              <img src="https://i.ibb.co/KFL38df/5-2.png" className="rounded-md w-[370px] mx-auto h-full" />
            </Link>
          </SwiperSlide>
        </Swiper>
      </div>

      
    </>
  );
};

export default Carro;
