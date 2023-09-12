import React from 'react';
import Slider3D from './sliders/Slider3D';


// import {FaArrowRight, FaArrowLeft} from 'react-icons/fa';
import bg from '../assets/img/theLittleMermaid.jpg';

import CoverWrapper from './Wrappers/CoverWrapper';
import ImdbLabel from './ImdbLabel';


export default function Newest() {


  return (
    <>

    <CoverWrapper bg={bg}>
        <div className='w-5/12 flex flex-col justify-center items-start z-10 space-y-14'>
            <h2 className='font-bold text-2xl text-white '> Title </h2>
            <div className='w-9/12 flex justify-start items-end '>
              {/* <div className=' flex flex-col justify-center  items-center ml-4'>
                <div className=' flex justify-center items-center'>
                <span className='  text-white text-sm   rounded-e-md'>10/</span>
                <span className=' font-bold text-color-2 text-xl'>7.1</span>
                </div>
                <span className=' bg-color-hover  px-3 py-1 rounded-md font-extrabold text-black text-md'> IMDb </span>
              </div> */}

              <ImdbLabel/>
              <div className=' flex justify-between items-center  space-x-5'>
                <span className='border font-sans border-slate-300 bg-transparent text-slate-300 font-semibold rounded-lg px-3 py-1 mx-2 text-md '> اکشن</span>
              </div>
            </div>
            <p className='w-9/12 font-serif text-lg text-white '>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi similique aut eum ex nulla odio sunt autem sit. Harum sit laborum quia necessitatibus fugit illo atque iste aliquam illum accusamus!</p>
        </div>
        <div className=' w-5/12  flex justify-center items-center backdrop-blur-md  border shadow-md border-white border-opacity-5 px-3 py-7 rounded-sm  z-10'> 

          <Slider3D/>


         </div>
         {/* <div className='flex justify-center top-0 right-0 m-4 items-center  absolute '>
             <span className=' text-white text-lg'> جدیدترین ها </span>
         </div> */}
  </CoverWrapper> 
    </>
  )
}
