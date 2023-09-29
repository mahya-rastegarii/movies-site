import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { AiOutlineArrowLeft } from 'react-icons/ai'

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import {Autoplay, FreeMode} from 'swiper/modules';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';

// import './simpleSlider.css'
import Button from "./../Button/Button"
import BgRotate from '../BgRotate/BgRotate';



export default function SimpleSlider({ title, images,delay}) {
 
  
const [isAutoplay, setIsAutoplay]= useState(false)
//   const pagination={
//     clickable: true,
//     renderBullet: function (index, className) {
//       return '<span class="' + className + '">' + (index + 1) + '</span>';
//     },

//  }

  return (

    <div className="w-full flex justify-center items-start flex-col lg:my-12">


    <div className=" w-full flex justify-between items-center">
        <BgRotate width=' w-6/12  md:w-3/12 lg:w-2/12' padding='p-1 lg:p-2'>

     <div className="flex justify-center items-center">
       <h4 className=' text-color-1 font-bold'>{title}</h4>
       
    </div>
        </BgRotate>
        <div>
       <Button width="w-full" btnType="link"> مشاهده همه<AiOutlineArrowLeft className=' inline mr-2'/></Button>
        </div>
          
 
       </div>
  <div className='w-full h-full'>

        <Swiper
        
        
        className=" w-full h-full m-8 p-20"
        
        slidesPerView={5}
        spaceBetween={12}
        loop={true}
        freeMode={true}
      // centeredSlides={true}
     autoplay={{
          delay: delay,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        //  pagination={pagination}

        breakpoints={{
          640: {
            slidesPerView: 1,
          spaceBetween: 0
            
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 12
            
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 8
           
           
          },
        }}
        

        modules={[Autoplay,FreeMode]}
       
          
          >
      {images.map((slide, index) => (
        <SwiperSlide className="  bg-center bg-cover w-full h-44 lg:h-64 flex justify-center items-center hover:scale-105 custom-transition my-4 "  key={index}>
          <div className=' w-full h-full  flex flex-col justify-center items-center'>
          <img className="  w-full h-44 lg:h-64 rounded-md cursor-pointer  shadow-md " src={slide.image} alt={slide.name} />
          <div className='  px-2 -mt-3   rounded-lg shadow-md text-black  bg-color-hover '>
            <span className='text-md font-bold '>7.3</span>
            <span className='text-sm '>/10</span>
            </div>
            <span className=' text-md text-color-1 font-semibold'>{slide.name}</span>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>

      </div>
      </div>
  )
}
