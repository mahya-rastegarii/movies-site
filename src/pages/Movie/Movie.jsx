
import React from 'react';
import { BsGlobe } from 'react-icons/bs';

import { MdOutlineDateRange, MdOutlineHighQuality, MdOutlineTimer } from 'react-icons/md';
import { RiUserLine } from 'react-icons/ri';


import DisclosureWrapper from '../../components/Disclosure/DisclosureWrapper'
import BgRotate from "../../components/BgRotate/BgRotate";

import bg2 from '../../assets/img/64ea845ca1606-57593-210x315.jpg';
import bg from '../../assets/img/theLittleMermaid.jpg';
import ImdbLabel from '../../components/Label/ImdbLabel'
import GenreLabel from '../../components/Label/GenreLabel';
import HeaderBackdrop from '../../components/Backdrop/HeaderBackdrop';
export default function Movie() {
  return (

    <div className=' flex flex-col justify-center items-center mb-16 space-y-20'>
    
   <HeaderBackdrop  bg={bg}>
       <div className=" w-full z-10 lg:p-10 flex lg:flex-row  flex-col justify-center items-center p-4 ">
        <div className=" mx-3 w-full lg:w-3/12 flex justify-center lg:justify-end items-center">
          <img className='rounded-2xl shadow-2xl w-64  '   src={bg2} alt="theLittleMermaid" />
        </div>
        <div className=" mx-3 flex w-7/12 flex-col lg:justify-start justify-center items-start text-white font-semibold space-y-4 ">
        <div className="flex flex-col space-y-2 lg:space-y-0 lg:flex-row w-full justify-center lg:justify-between items-center">
            <h4 className=' font-bold text-white text-lg'> Name</h4>

            {/* <div className=' flex flex-col justify-center  items-center '>
                <div className=' flex justify-center items-center'>
                <span className='  text-white font-semibold text-sm '>10/</span>
                <span className=' font-bold text-color-2 text-lg'>7.1</span>
                </div>
                <span className=' bg-color-hover shadow-md px-2 rounded-md font-bold text-white text-md'> IMDb </span>
             
              </div> */}

              <ImdbLabel/>
        </div>
        <div className="flex w-full flex-col text-white  space-y-4 ">
          <div className=' flex lg:justify-start items-center justify-center text-slate-300'>
          {/* <span className='border-2 font-sans border-slate-400 bg-transparent text-slate-400 font-semibold rounded-2xl px-3 py-1 mx-2 text-md '> اکشن</span> */}
          <GenreLabel borderColor="border-slate-300">اکشن</GenreLabel>
          <GenreLabel borderColor="border-slate-300">اکشن</GenreLabel>
          </div>
            <div className='w-full flex lg:flex-col lg:justify-start justify-center lg:space-y-5 items-center'>
            <div className='w-full flex  lg:justify-start justify-center items-center'>  <MdOutlineHighQuality className=' inline ml-2 text-xl text-color-2'/><span className=' '>کیفیت : </span></div>
            <div className='w-full flex  lg:justify-start justify-center items-center'><MdOutlineTimer className=' inline ml-2 text-xl text-color-2 mr-7 lg:mr-0'/><span className=' '>زمان : </span></div>
              </div>
            <div className='w-full flex lg:justify-start lg:flex-col justify-center lg:space-y-5 items-center'>
               <div className='w-full flex  lg:justify-start justify-center items-center'><MdOutlineDateRange className=' inline ml-2 text-xl text-color-2'/><span className=' '> سال انتشار : </span></div>
             <div className='w-full flex  lg:justify-start justify-center items-center'><RiUserLine className=' inline ml-2 text-xl text-color-2 mr-7 lg:mr-0'/><span className=' '>کارگردان : </span></div>
              </div>
            {/* <div className='w-full flex justify-start items-center'><PiFilmReelBold className=' inline ml-2 text-xl text-color-2'/><span className=' '>ژانر : </span></div> */}
            <div className='w-full flex  lg:justify-start justify-center items-center'>
              <BsGlobe className=' inline ml-2 text-xl text-color-2'/><span className=' '>محصول کشور : </span>
              </div>
            
            <div className='w-full flex lg:justify-start justify-center items-center'><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum, aut.</p></div>
            <div className="flex flex-col lg:flex-row justify-between items-center">
                    <span className='  bg-green-600 p-2 rounded-lg text-sm'>زیرنویس چسبیده</span>
                </div>
        </div>
        </div>
       </div>
   </HeaderBackdrop>
    <div className=" md:w-10/12 w-full lg:w-7/12 flex flex-col p-5 space-y-20">

    <BgRotate padding=' p-4'>
      
   <div className='w-full text-right text-color-1'>
 
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat nostrum aliquid cumque dolores consequuntur impedit exercitationem ipsam, sint perspiciatis enim. Quidem fugiat quisquam id expedita! Sunt eveniet animi mollitia amet.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat nostrum aliquid cumque dolores consequuntur impedit exercitationem ipsam, sint perspiciatis enim. Quidem fugiat quisquam id expedita! Sunt eveniet animi mollitia amet.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat nostrum aliquid cumque dolores consequuntur impedit exercitationem ipsam, sint perspiciatis enim. Quidem fugiat quisquam id expedita! Sunt eveniet animi mollitia amet.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat nostrum aliquid cumque dolores consequuntur impedit exercitationem ipsam, sint perspiciatis enim. Quidem fugiat quisquam id expedita! Sunt eveniet animi mollitia amet.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat nostrum aliquid cumque dolores consequuntur impedit exercitationem ipsam, sint perspiciatis enim. Quidem fugiat quisquam id expedita! Sunt eveniet animi mollitia amet.</p>
   
   </div>
  
    </BgRotate>
    <BgRotate padding="p-1" rotate1="-rotate-1" rotate2="rotate-1">
     

        <DisclosureWrapper title="بازیگران">
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi repellendus, sunt maxime nemo saepe quidem dolorum fugiat eligendi consequuntur nostrum provident amet magnam, totam doloribus aspernatur aperiam dolorem? Labore, totam?
        </DisclosureWrapper>
    
    </BgRotate>
           


   </div>
   </div>
  )
}
