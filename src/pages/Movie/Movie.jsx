
import React, { useEffect } from 'react';
import { BsGlobe } from 'react-icons/bs';

import { MdOutlineDateRange, MdOutlineHighQuality, MdOutlineTimer } from 'react-icons/md';
import { RiUserLine } from 'react-icons/ri';
import { PiTelevisionLight } from 'react-icons/pi';
import { GrStatusUnknown } from 'react-icons/gr';
import { FaRegCommentDots } from "react-icons/fa";

import DisclosureWrapper from '../../components/Disclosure/DisclosureWrapper'
import BgRotate from "../../components/BgRotate/BgRotate";
import bg2 from '../../assets/img/64ea845ca1606-57593-210x315.jpg';
import bg from '../../assets/img/theLittleMermaid.jpg';
import ImdbLabel from '../../components/Label/ImdbLabel'
import GenreLabel from '../../components/Label/GenreLabel';
import HeaderBackdrop from '../../components/Backdrop/HeaderBackdrop';
import { useDataFetchContext } from '../../Context/DataFetchContext';
import DownloadBox from '../../components/box/DownloadBox';
import { Combobox } from '@headlessui/react';
import CommentBox from '../../components/box/CommentBox';
import Button from '../../components/Button/Button';
export default function Movie() {

  const {data}= useDataFetchContext()
  

  useEffect(()=> {
    console.log(data)
  },[data])
  return (

    <div className=' flex flex-col justify-center items-center mb-16 space-y-20'>
    
   <HeaderBackdrop  bg={data.cover}>
       <div className=" w-full z-10 lg:p-10 flex lg:flex-row  flex-col justify-center items-center p-4 ">
        <div className=" mx-3 w-full lg:w-3/12 flex justify-center lg:justify-end items-center">
          <img className='rounded-2xl shadow-gray-900 shadow-2xl w-80 '   src={data.pic} alt="theLittleMermaid" />
        </div>
        <div className=" mx-3 flex w-7/12 flex-col lg:justify-start justify-center items-start text-white font-semibold space-y-4 ">
        <div className="flex flex-col space-y-2 lg:space-y-0 lg:flex-row w-full justify-center lg:justify-between items-center">
            <h4 className=' font-bold text-white text-lg'>دانلود  {data.name}</h4>

            {/* <div className=' flex flex-col justify-center  items-center '>
                <div className=' flex justify-center items-center'>
                <span className='  text-white font-semibold text-sm '>10/</span>
                <span className=' font-bold text-color-2 text-lg'>7.1</span>
                </div>
                <span className=' bg-color-hover shadow-md px-2 rounded-md font-bold text-white text-md'> IMDb </span>
             
              </div> */}

              <ImdbLabel score={data.rate}/>
        </div>
        <div className="flex w-full flex-col text-white  space-y-4 ">
          <div className=' flex lg:justify-start items-center justify-center text-slate-300'>
          {
               data.genre?.map((genre, index) => (

                     
                         <GenreLabel  borderColor='border-slate-300' key={index}>{genre}</GenreLabel>
                         
                         
                         ))
                        }
                      
          </div>
            <div className='w-full flex lg:flex-col lg:justify-start justify-center lg:space-y-5 items-center'>
            {/* <div className='w-full flex  lg:justify-start justify-center items-center'>  <MdOutlineHighQuality className=' inline ml-2 text-xl text-color-2'/><span className=' '>کیفیت : </span></div> */}
            <div className='w-full flex  lg:justify-start justify-center items-center'><MdOutlineTimer className=' inline ml-2 text-xl text-color-2 mr-7 lg:mr-0'/><span className=' '>زمان : {data.time}</span></div>
              </div>
            <div className='w-full flex lg:justify-start lg:flex-col justify-center lg:space-y-5 items-center'>
          {
            data.year ?  <div className='w-full flex  lg:justify-start justify-center items-center'><MdOutlineDateRange className=' inline ml-2 text-xl text-color-2'/><span className=' '> سال انتشار : {data.year}</span></div> : <div className='w-full flex  lg:justify-start justify-center items-center'><GrStatusUnknown className=' inline ml-2 text-xl text-color-2'/><span className=' '>  وضعیت پخش : {data.status}</span></div>
          }    
            {
              data.director ? <div className='w-full flex  lg:justify-start justify-center items-center'><RiUserLine className=' inline ml-2 text-xl text-color-2 mr-7 lg:mr-0'/><span className=' '>کارگردان : {data.director}</span></div> : <div className='w-full flex  lg:justify-start justify-center items-center'><PiTelevisionLight className=' inline ml-2 text-xl text-color-2 mr-7 lg:mr-0'/><span className=' '> شبکه : {data.tv}</span></div>
            } 
              </div> 
            {/* <div className='w-full flex justify-start items-center'><PiFilmReelBold className=' inline ml-2 text-xl text-color-2'/><span className=' '>ژانر : </span></div> */}
            <div className='w-full flex  lg:justify-start justify-center items-center'>
              <BsGlobe className=' inline ml-2 text-xl text-color-2'/><span className=' '>محصول کشور : {data.country}</span>
              </div>
            
            <div className='w-full flex lg:justify-start justify-center items-center'><p>{data.summary}</p></div>
            <div className="flex flex-col lg:flex-row justify-between items-center">
                    <span className='  bg-green-600 p-2 rounded-lg text-sm'>زیرنویس چسبیده</span>
                </div>
        </div>
        </div>
       </div>
   </HeaderBackdrop>
    <div className=" md:w-10/12 w-full lg:w-7/12 flex flex-col p-5 space-y-20">

   {
    data?.desc &&
   <BgRotate padding=' p-4'>
      
   <div className='w-full text-right text-color-1'>
 
     {
      data.desc
     }
   
   </div>
  
    </BgRotate>
    
     }
    
    <BgRotate padding="p-1" rotate1="-rotate-1" rotate2="rotate-1">
     

        <DisclosureWrapper  title="لینک های دانلود" open="true">
           <div className="p-8 flex flex-col space-y-3">
            <div>

            <DisclosureWrapper bg="bg-color-2" rounded="rounded-lg" border="border-color-1" title="نسخه زیرنویس چسبیده فارسی">
              <div className=" w-full flex flex-col justify-center items-center space-y-6 pt-4">

                 <DownloadBox quality='1080p'/>
                 <DownloadBox quality='720p'/>
                 <DownloadBox quality='480p'/>
              </div>
            </DisclosureWrapper>
            </div>
          <div>

            <DisclosureWrapper bg="bg-color-2" rounded="rounded-lg" border="border-color-1" title="نسخه دوبله فارسی">
            <div className=" w-full flex flex-col justify-center items-center space-y-6 pt-4">

          <DownloadBox quality='1080p'/>
          <DownloadBox quality='720p'/>
          <DownloadBox quality='480p'/>
           </div>
            </DisclosureWrapper>
          </div>
           </div>
        </DisclosureWrapper>

        
    </BgRotate>
           
     
     <BgRotate padding="p-1" rotate1="-rotate-1" rotate2="rotate-1">

     <DisclosureWrapper title="نظرات" open="true">
      <div className="w-full  flex flex-col justify-center items-center p-4 space-y-2">
        <textarea rows="6" className='w-full bg-color-2 rounded-md p-2 outline-none  border shadow-sm resize-y focus:placeholder:opacity-75 focus:border-2 border-color-1' placeholder="دیدگاه خود را بنویسید..."></textarea>
        <div className=' w-full flex flex-col justify-center items-center'>
        <Button width="w-3/12" bgColor='bg-color-hover'> ارسال دیدگاه </Button>
        </div>
      </div>
      <hr className=' border-color-1 opacity-50' />
     <div className=" w-full flex flex-col justify-center items-center space-y-6 pt-4">
      <div className="w-full flex justify-between px-4">
        <FaRegCommentDots className='inline text-color-2 text-2xl'/>
      
        <span className='text-xl text-color-2 '>2</span>  
        
      </div>
      <CommentBox/>
    </div>
   </DisclosureWrapper>

      </BgRotate>  

   </div>
   </div>
  )
}
