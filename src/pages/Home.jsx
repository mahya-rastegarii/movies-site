import React from 'react';

import './style.css';

import Newest from '../components/Newest'
import AdvancedSearchBox from '../components/AdvancedSearchBox';
import GenreSideBar from '../components/sideBar/GenreSideBar'
import SimpleSlider from '../components/sliders/SimpleSlider';
import SerialSideBar from '../components/sideBar/SerialSideBar';



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



export default function Home() {



  // const image = [bg1, bg2, bg3, bg4, bg5, bg6, bg7, bg8, bg9, bg10, bg11];

  const sliders = [
    {
      // id:sliders.length + 1,
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
      title: "همه سریال ها",
      
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
      title: " همه فیلم ها",
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
  return (
    // <div className=' w-9/12 text-xl  font-semibold text-center text-red-700'></div>
   <div className=' w-full flex flex-col justify-center items-center'>
      <Newest/>
       <div className=' w-full px-2 flex justify-center items-start my-2'>
        <div className="flex w-3/12 flex-col space-y-2 ml-2">
        <GenreSideBar/>
        <SerialSideBar/>
        </div>
        <div className="w-9/12 flex flex-col mb-36 mr-3">
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
