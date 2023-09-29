import React from 'react';

import './style/style.css';

// import Newest from '../components/Newest'
import AdvancedSearchBox from '../components/Search/AdvancedSearchBox';
import GenreSideBar from '../components/sideBar/GenreSideBar'
import SimpleSlider from '../components/sliders/SimpleSlider';
import SerialSideBar from '../components/sideBar/SerialSideBar';
import HeaderBackdrop from "../components/Backdrop/HeaderBackdrop"

import bg from '../assets/img/theLittleMermaid.jpg';
import bg1 from '../assets/img/Oppenheimer.jpg';
import bg2 from '../assets/img/noHardFeelings.jpg';
import bg3 from '../assets/img/theLittleMermaid.jpg';
import bg4 from '../assets/img/qWQSnedj0LCUjWNp9fLcMtfgadp.jpg';
import bg5 from '../assets/img/spider-man-across-the-spider-verse-2023-cover.jpg';
import bg6 from '../assets/img/hiddenStrike.jpg';
import bg7 from '../assets/img/64ea844aa5218-57583-210x315.jpg';
import bg8 from '../assets/img/64ea845ca1606-57593-210x315.jpg';
import bg9 from '../assets/img/64ea84665f97f-57601-210x315.jpg';
import bg10 from '../assets/img/64ea84842f123-57619-210x315.jpg';
import bg11 from '../assets/img/64ea8477aa6ef-57615-210x315.jpg'
import ImdbLabel from '../components/Label/ImdbLabel';
import GenreLabel from '../components/Label/GenreLabel';
import Slider3D from '../components/sliders/Slider3D';
import { useBackdropContext } from '../Context/BackdropContext';
import SidebarMenu from '../components/sideBar/SidebarMenu';
import { useState } from 'react';
import { useSliderContext } from '../Context/SliderContext';
import { Link } from 'react-router-dom';



export default function Home() {



  // const image = [bg1, bg2, bg3, bg4, bg5, bg6, bg7, bg8, bg9, bg10, bg11];
  const sliders = [
    {
        // id:sliders.length + 1,
        delay:2500,
      title: " جدیدترین سریال ها",
      images : [
        {
            name: "Oppenheimer",
            image:bg1
        },
        {
            name: "Oppenheimer",
            image:bg2
        },
        {
            name: "Oppenheimer",
            image:bg3
        },
        {
            name: "Oppenheimer",
            image:bg4
        },
        {
            name: "Oppenheimer",
            image:bg5
        },
        {
            name: "Oppenheimer",
            image:bg6
        },
        {
            name: "Oppenheimer",
            image:bg7
        },
        {
            name: "Oppenheimer",
            image:bg8
        },
        {
            name: "Oppenheimer",
            image:bg9
        },
        {
            name: "Oppenheimer",
            image:bg10
        },
        {
            name: "Oppenheimer",
            image:bg11
        },
      ]
    },
    {
    //   id:sliders.length + 1,
    delay:2700,
      title: "محبوب ترین فیلم ها",
      images : [
        {
            name: "Oppenheimer",
            image:bg1
        },
        {
            name: "Oppenheimer",
            image:bg2
        },
        {
            name: "Oppenheimer",
            image:bg3
        },
        {
            name: "Oppenheimer",
            image:bg4
        },
        {
            name: "Oppenheimer",
            image:bg5
        },
        {
            name: "Oppenheimer",
            image:bg6
        },
        {
            name: "Oppenheimer",
            image:bg7
        },
        {
            name: "Oppenheimer",
            image:bg8
        },
        {
            name: "Oppenheimer",
            image:bg9
        },
        {
            name: "Oppenheimer",
            image:bg10
        },
        {
            name: "Oppenheimer",
            image:bg11
        },
      ]
    },
    {
      // id:sliders.length + 1,
      delay:3000,

      title: "محبوب ترین سریال ها",
      
      images : [
        {
            name: "Oppenheimer",
            image:bg1
        },
        {
            name: "Oppenheimer",
            image:bg2
        },
        {
            name: "Oppenheimer",
            image:bg3
        },
        {
            name: "Oppenheimer",
            image:bg4
        },
        {
            name: "Oppenheimer",
            image:bg5
        },
        {
            name: "Oppenheimer",
            image:bg6
        },
        {
            name: "Oppenheimer",
            image:bg7
        },
        {
            name: "Oppenheimer",
            image:bg8
        },
        {
            name: "Oppenheimer",
            image:bg9
        },
        {
            name: "Oppenheimer",
            image:bg10
        },
        {
            name: "Oppenheimer",
            image:bg11
        },
      ]
    },
  
    {
      // id:sliders.length + 1,
      delay:3200,

      title: "بالاترین امتیاز",
      
      images : [
        {
            name: "Oppenheimer",
            image:bg1
        },
        {
            name: "Oppenheimer",
            image:bg2
        },
        {
            name: "Oppenheimer",
            image:bg3
        },
        {
            name: "Oppenheimer",
            image:bg4
        },
        {
            name: "Oppenheimer",
            image:bg5
        },
        {
            name: "Oppenheimer",
            image:bg6
        },
        {
            name: "Oppenheimer",
            image:bg7
        },
        {
            name: "Oppenheimer",
            image:bg8
        },
        {
            name: "Oppenheimer",
            image:bg9
        },
        {
            name: "Oppenheimer",
            image:bg10
        },
        {
            name: "Oppenheimer",
            image:bg11
        },
      ]
    },
  
  ]


  const {imageInfo}= useSliderContext()
  const genres = imageInfo.genres
  return (
    // <div className=' w-9/12 text-xl  font-semibold text-center text-red-700'></div>
   <div className=' w-full flex flex-col justify-center items-center '>
     

     <HeaderBackdrop bg={imageInfo.src}>
        <div className='w-full md:w-8/12 lg:w-5/12 flex flex-col justify-center items-center lg:items-start z-10 space-y-4 lg:space-y-14 '>
            <h2 className='font-bold text-2xl text-white '> {imageInfo.name} </h2>
            <div className='w-9/12 flex-col flex lg:flex-row justify-center lg:justify-start items-center  space-y-3 lg:space-y-0 lg:items-end '>
             

              <ImdbLabel score={imageInfo.score}/>

              <div className=' flex justify-between items-center  text-slate-300 space-x-5 ' key={imageInfo.id}>
              {
                genres?.map(genre => (

                     
                         <GenreLabel borderColor='border-slate-300'>{genre}</GenreLabel>
                         
                         
                         ))
                        }
                        </div>
            </div>
            <p className=' hidden lg:block  w-9/12 font-serif text-lg text-white '>{imageInfo.desc}</p>
            <Link className='w-full md:w-2/12' to="/Movie"><button className=' w-full bg-color-hover rounded-md px-2 text-lg  py-1 font-bold shadow-md hover:bg-color-hover custom-transition'>دانلود</button></Link>
        </div>
        <div className=' w-full md:w-8/12 lg:w-5/12  flex justify-center items-center backdrop-blur-md  border shadow-sm border-white border-opacity-5 px-3 py-7 rounded-sm  z-10'> 

          <Slider3D />


         </div>
       
  </HeaderBackdrop> 
  

       <div className=' w-full px-2  flex-col-reverse flex lg:flex-row justify-center items-start mb-12 my-2  lg:mb-0'>
        <div className="flex w-full lg:w-3/12  flex-col md:flex-row md:space-y-0 md:mb-12 lg:mb-0 lg:space-y-2 lg:flex-col space-y-2">
        <GenreSideBar/>
        <SerialSideBar/>
        </div>
        <div className="  lg:w-9/12  w-full flex flex-col mb-36 lg:mr-3">
       <AdvancedSearchBox/>
        
        {
          sliders.map( (slider, index) => (
          
            <SimpleSlider {...slider}key={index}/>
          
          ))
        }
        </div>
       </div>
  
    

   </div>
  )
}
