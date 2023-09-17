import React from 'react';

import { MdOutlineDateRange, MdOutlineHighQuality, MdOutlineTimer } from 'react-icons/md';
// import { PiFilmReelBold } from 'react-icons/pi';
import { BsGlobe } from 'react-icons/bs';
import { LuDownload } from 'react-icons/lu';
import { RiUserLine } from 'react-icons/ri';

import image from '../assets/img/64ea844aa5218-57583-210x315.jpg';

import BgRotateWrapper from './Wrappers/BgRotateWrapper';
import ImdbLabel from './ImdbLabel';
export default function 
() {
  return (
    <BgRotateWrapper>

   
    <div className='w-full p-4  flex  justify-center items-center  rounded-md shadow-md'>
       <img className=' rounded-md shadow-xl' src={image} width={200} alt="coverImage" />
       <div className='w-full flex flex-col justify-center items-center mr-4'>
        <div className="flex w-full justify-between items-center">
            <h4 className=' font-bold text-color-1 text-lg'> Name</h4>
            {/* <div className=' flex flex-col justify-center  items-center ml-4'>
                <div className=' flex justify-center items-center'>
                <span className='  text-color-1 font-semibold text-sm '>10/</span>
                <span className=' font-bold text-color-2 text-lg'>7.1</span>
                </div>
                <span className=' bg-color-hover shadow-md px-2 rounded-md font-bold text-color-1 text-md'> IMDb </span>
              </div> */}
              <ImdbLabel textColor='text-color-1'/>
        </div>
        <div className="flex w-full flex-col text-color-1 text-bold space-y-3 ">
        <div className=' flex justify-start opacity-60 items-center my-4 text-color-1 text-sm'>
          <span className='border  border-color-3 bg-transparent  rounded-xl px-3 py-1 mx-2 '> اکشن</span>
          <span className='border  border-color-3 bg-transparent  rounded-xl px-3 py-1 mx-2 '> فانتزی</span>
          <span className='border  border-color-3 bg-transparent  rounded-xl px-3 py-1 mx-2 '> کلاسیک</span>
          </div>
            <div className='w-full flex justify-start items-center'><MdOutlineHighQuality className=' inline ml-2 text-xl text-color-2'/><span className=' '>کیفیت : </span></div>
            <div className='w-full flex justify-start items-center'><MdOutlineTimer className=' inline ml-2 text-xl text-color-2'/><span className=' '>زمان : </span></div>
            <div className='w-full flex justify-start items-center'><MdOutlineDateRange className=' inline ml-2 text-xl text-color-2'/><span className=' '> سال انتشار : </span></div>
            {/* <div className='w-full flex justify-start items-center'><PiFilmReelBold className=' inline ml-2 text-xl text-color-2-500'/><span className=' '>ژانر : </span></div> */}
            <div className='w-full flex justify-start items-center'><RiUserLine className=' inline ml-2 text-xl text-color-2'/><span className=' '>کارگردان : </span></div>
            <div className='w-full flex justify-start items-center'><BsGlobe className=' inline ml-2 text-xl text-color-2'/><span className=' '>محصول کشور : </span></div>
            
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum, aut.</p>
        </div>
        <div className="w-full flex justify-end items-center text-color-1 px-3">
            <button className=' bg-color-hover rounded-md px-2 text-lg  py-1 font-bold shadow-md hover:bg-color-hover custom-transition'>دانلود<LuDownload className='inline mr-1'/></button>
        </div>
       </div>

    </div>
    </BgRotateWrapper>
  )
}
