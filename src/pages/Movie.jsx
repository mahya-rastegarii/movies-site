
import React from 'react';
import { BsGlobe } from 'react-icons/bs';

import { MdOutlineDateRange, MdOutlineHighQuality, MdOutlineTimer } from 'react-icons/md';
import { RiUserLine } from 'react-icons/ri';


import CoverWrapper from '../components/Wrappers/CoverWrapper';
import DisclosureWrapper from '../components/Wrappers/DisclosureWrapper'
import BgRotateWrapper from '../components/Wrappers/BgRotateWrapper';

import bg2 from '../assets/img/64ea845ca1606-57593-210x315.jpg';
import bg from '../assets/img/theLittleMermaid.jpg';
import ImdbLabel from '../components/ImdbLabel';
export default function Movie() {
  return (

    <div className=' flex flex-col justify-center items-center mb-16 space-y-20'>
    
   <CoverWrapper  bg={bg}>
       <div className=" w-full z-10 p-10 flex justify-center items-center">
        <div className=" mx-3 w-3/12 flex justify-end items-center">
          <img className='rounded-2xl shadow-2xl ' width={270}  src={bg2} alt="theLittleMermaid" />
        </div>
        <div className=" mx-3 flex w-7/12 flex-col justify-start items-start text-white font-semibold space-y-4 ">
        <div className="flex w-full justify-between items-center">
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
          <div className=' flex justify-start items-center  '>
          <span className='border-2 font-sans border-slate-400 bg-transparent text-slate-400 font-semibold rounded-2xl px-3 py-1 mx-2 text-md '> اکشن</span>
          </div>
            <div className='w-full flex justify-start items-center'><MdOutlineHighQuality className=' inline ml-2 text-xl text-color-2'/><span className=' '>کیفیت : </span></div>
            <div className='w-full flex justify-start items-center'><MdOutlineTimer className=' inline ml-2 text-xl text-color-2'/><span className=' '>زمان : </span></div>
            <div className='w-full flex justify-start items-center'><MdOutlineDateRange className=' inline ml-2 text-xl text-color-2'/><span className=' '> سال انتشار : </span></div>
            {/* <div className='w-full flex justify-start items-center'><PiFilmReelBold className=' inline ml-2 text-xl text-color-2'/><span className=' '>ژانر : </span></div> */}
            <div className='w-full flex justify-start items-center'><RiUserLine className=' inline ml-2 text-xl text-color-2'/><span className=' '>کارگردان : </span></div>
            <div className='w-full flex justify-start items-center'><BsGlobe className=' inline ml-2 text-xl text-color-2'/><span className=' '>محصول کشور : </span></div>
            
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum, aut.</p>
            <div className="flex justify-between items-center">
                    <span className='  bg-green-600 p-2 rounded-lg text-sm'>زیرنویس چسبیده</span>
                </div>
        </div>
        </div>
       </div>
   </CoverWrapper>
    <div className="w-7/12 flex flex-col space-y-20">

    <BgRotateWrapper padding=' p-4'>
      
   <div className='w-full text-center text-color-1'>
 
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat nostrum aliquid cumque dolores consequuntur impedit exercitationem ipsam, sint perspiciatis enim. Quidem fugiat quisquam id expedita! Sunt eveniet animi mollitia amet.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat nostrum aliquid cumque dolores consequuntur impedit exercitationem ipsam, sint perspiciatis enim. Quidem fugiat quisquam id expedita! Sunt eveniet animi mollitia amet.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat nostrum aliquid cumque dolores consequuntur impedit exercitationem ipsam, sint perspiciatis enim. Quidem fugiat quisquam id expedita! Sunt eveniet animi mollitia amet.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat nostrum aliquid cumque dolores consequuntur impedit exercitationem ipsam, sint perspiciatis enim. Quidem fugiat quisquam id expedita! Sunt eveniet animi mollitia amet.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat nostrum aliquid cumque dolores consequuntur impedit exercitationem ipsam, sint perspiciatis enim. Quidem fugiat quisquam id expedita! Sunt eveniet animi mollitia amet.</p>
   
   </div>
  
    </BgRotateWrapper>
    <BgRotateWrapper padding="p-1" rotate1="-rotate-1" rotate2="rotate-1">
     

        <DisclosureWrapper title="بازیگران">
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi repellendus, sunt maxime nemo saepe quidem dolorum fugiat eligendi consequuntur nostrum provident amet magnam, totam doloribus aspernatur aperiam dolorem? Labore, totam?
        </DisclosureWrapper>
    
    </BgRotateWrapper>
           


   </div>
   </div>
  )
}
