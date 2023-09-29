import React from 'react'
import { useState } from 'react';

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
import { useSliderContext } from '../../Context/SliderContext';
// import { useRef } from 'react';



export default function Slider3D() {

    const images = [
    {
      id:1,
       name: "Oppenheimer",
       src:bg1,
       score:8.2,
       genres:['بیوگرافی','جنایی'],
       desc:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non quasi dignissimos unde blanditiis fugit nulla voluptatibus labore reprehenderit eius repudiandae. Quo ratione eaque dolorem mollitia incidunt recusandae neque, praesentium accusamus."
    },
    {
      id:2,
       name: "noHardFeelings",
       src:bg2,
       score:8.1,
       genres:['عاشقانه','درام'],
       desc:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non quasi dignissimos unde blanditiis fugit nulla voluptatibus labore reprehenderit eius repudiandae. Quo ratione eaque dolorem mollitia incidunt recusandae neque, praesentium accusamus."
    },
    {
      id:3,
       name: "theLittleMermaid",
       src:bg3,
       score:7.1,
       genres:['فانتزی','درام','عاشقانه'],
       desc:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non quasi dignissimos unde blanditiis fugit nulla voluptatibus labore reprehenderit eius repudiandae. Quo ratione eaque dolorem mollitia incidunt recusandae neque, praesentium accusamus."
    },
    {
      id:4,
       name: "qWQSnedj0LCUjWNp9fLcMtfgadp",
       src:bg4,
       score:8.2,
       genres:['معمایی','جنایی','اکشن'],
       desc:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non quasi dignissimos unde blanditiis fugit nulla voluptatibus labore reprehenderit eius repudiandae. Quo ratione eaque dolorem mollitia incidunt recusandae neque, praesentium accusamus."
    },
    {
      id:5,
       name: "spider-man-across-the-spider-verse-2023-cover",
       src:bg5,
       score:7.8,
       genres:['جنایی','اکشن'],
       desc:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non quasi dignissimos unde blanditiis fugit nulla voluptatibus labore reprehenderit eius repudiandae. Quo ratione eaque dolorem mollitia incidunt recusandae neque, praesentium accusamus."
    },
     
    {
      id:6,
       name: "hiddenStrike",
       src:bg6,
       score:7.2,
       genres:['معمایی', 'اکشن'],
       desc:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non quasi dignissimos unde blanditiis fugit nulla voluptatibus labore reprehenderit eius repudiandae. Quo ratione eaque dolorem mollitia incidunt recusandae neque, praesentium accusamus."
    },     
      
    ];

    const [image, setImage] =useState(images)

     const {setImageInfo} = useSliderContext()
 
  
   
  return (
  <div className='w-full h-full'>

        <Swiper

     onSlideChange={(event) => {
      
     const filterImage = [...image.filter((item)=> item.id === event.realIndex+1)]
          const CurrentImg = filterImage[0]
          setImageInfo(CurrentImg)
         
     }}
        
        className=" w-full h-full m-8 p-20"
        
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
          delay: 5500,
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
      {image.map((img, id) => (
        <SwiperSlide className="swiper-3DSlider bg-center bg-cover w-full flex justify-center  items-center relative" onClick={()=>console.log(img.id)}  key={id} >
          <img className=" block w-full h-64 rounded-md " src={img.src}   alt={img.name}/>
        </SwiperSlide>
      ))}
    </Swiper>

      </div>
  )
}
