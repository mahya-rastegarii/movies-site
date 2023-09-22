import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Autoplay } from 'swiper/modules';

import './slider3D.css'

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import bg1 from '../../assets/img/Oppenheimer.jpg';
import bg2 from '../../assets/img/noHardFeelings.jpg';
import bg3 from '../../assets/img/theLittleMermaid.jpg';
import bg4 from '../../assets/img/qWQSnedj0LCUjWNp9fLcMtfgadp.jpg';
import bg5 from '../../assets/img/spider-man-across-the-spider-verse-2023-cover.jpg';
import bg6 from '../../assets/img/hiddenStrike.jpg';



export default function Slider3D() {

    const image = [bg1, bg2, bg3, bg4, bg5, bg6];

  return (
  <div className='w-full h-full'>

        <Swiper
        
        className=" w-full m-8 p-20"
        
        effect={'coverflow'}
        loop={true}
        centeredSlides={true}
        //  slidesPerView={'auto'}
        slidesPerView={3}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 4,
        }}
        
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        //  pagination={{ el: '.swiper-pagination', clickable: true }}
        //  navigation={{
          //    nextEl: '.swiper-button-next',
          //    prevEl: '.swiper-button-prev',
          //    clickable: true,
          //  }}

          breakpoints={{
            640: {
              slidesPerView: 1,
            
              
            },
            768: {
              slidesPerView: 2,
              
            },
            1024: {
              slidesPerView: 3,
             
            },
          }}
          
          modules={[Autoplay, EffectCoverflow]}
          
          >
      {image.map((img, index) => (
        <SwiperSlide className="swiper-3DSlider bg-center bg-cover w-full flex justify-center items-center relative"  key={index}>
          <img className=" block w-full h-44 lg:h-64 rounded-md " src={img} alt={img} />
        </SwiperSlide>
      ))}
    </Swiper>

      </div>
  )
}
