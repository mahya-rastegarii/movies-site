import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {Autoplay, FreeMode} from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';

import './simpleSlider.css'
import BgRotateWrapper from '../Wrappers/BgRotateWrapper';



export default function SimpleSlider({ title, images}) {
 
  

//   const pagination={
//     clickable: true,
//     renderBullet: function (index, className) {
//       return '<span class="' + className + '">' + (index + 1) + '</span>';
//     },

//  }

  return (

    <div className="w-full flex justify-center items-start flex-col my-6">


    
        <BgRotateWrapper width='w-2/12' padding='p-2'>

     <div className="flex justify-center items">
       <h4 className=' text-color-1 font-bold'>{title}</h4>
       
    </div>
        </BgRotateWrapper>
 
   
  <div className='w-full h-full'>

        <Swiper
        
        className=" w-full h-full m-8 p-20"
        
        slidesPerView={5}
        spaceBetween={8}
        loop={true}
        freeMode={true}
        // centeredSlides={true}
        // autoplay={{
        //   delay: 2500,
        //   disableOnInteraction: false,
        // }}
        //  pagination={pagination}
        modules={[Autoplay,FreeMode]}
       
          
          >
      {images.map((slide, index) => (
        <SwiperSlide className="  bg-center bg-cover w-full h-64 flex justify-center items-center"  key={index}>
          <div className=' w-full h-full  flex flex-col justify-center items-center'>
          <img className="  w-full h-64 rounded-md cursor-pointer" src={slide.image} alt={slide.name} />
          <div className='  px-2 -mt-3   rounded-lg shadow-xl text-black  bg-color-hover '>
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
