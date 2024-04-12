'use client'

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";

import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="mt-2">
      <div className="main-container">
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 5000 }}
          speed={500}
          pagination={{ clickable: true }}
          spaceBetween={10}
          slidesPerView={1}
          className="h-full w-full"
        >
          <SwiperSlide>
       
              <img src="/slider/slider-image-1.jpg"  alt="Image 1" className="absolute h-full w-full object-cover" />
      
           
          </SwiperSlide>
          <SwiperSlide>
       
            <img src="/slider/slider-image-2.jpg"  alt="Image 1" className="absolute h-full w-full object-cover" />
         
       
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Hero;
