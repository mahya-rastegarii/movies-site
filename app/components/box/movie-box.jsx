
import { MdOutlineDateRange, MdOutlineHighQuality, MdOutlineTimer } from 'react-icons/md';
// import { PiFilmReelBold } from 'react-icons/pi';
import { BsGlobe } from 'react-icons/bs';
import { LuDownload } from 'react-icons/lu';
import { RiUserLine } from 'react-icons/ri';
import { PiTelevisionLight } from 'react-icons/pi';
import { GrStatusUnknown } from 'react-icons/gr';


import React from 'react'
import Link from "next/link";
import BackgroundRotate from '../background/backgroundRotate';
import ImdbLabel from '../label/imdb-label';
import GenreLabel from '../label/genre-label';
import Image from 'next/image';

function MovieBox({data}) {

  
 

  return (
    <BackgroundRotate>

   
    <div className='w-full p-4   flex flex-col space-y-4 md:space-y-0 md:flex-row justify-center items-center  rounded-md shadow-md'>
       <Image className=' rounded-md shadow-xl '  src={data.pic}  alt="coverImage" width={220}  height={160}/>
       <div className='w-full flex flex-col justify-center items-center md:mr-4'>
        <div className="flex w-full flex-col md:flex-row justify-between items-center">
            <h4 className=' font-bold text-color-1 text-lg'>{data.type} {data.name} </h4>
            {/* <div className=' flex flex-col justify-center  items-center ml-4'>
                <div className=' flex justify-center items-center'>
                <span className='  text-color-1 font-semibold text-sm '>10/</span>
                <span className=' font-bold text-color-2 text-lg'>7.1</span>
                </div>
                <span className=' bg-color-hover shadow-md px-2 rounded-md font-bold text-color-1 text-md'> IMDb </span>
              </div> */}
              <ImdbLabel textColor='text-color-1' score={data.rate}/>
        </div>
        <div className="flex w-full flex-col text-color-1 text-bold space-y-3 ">
        <div className=' flex justify-center md:justify-start opacity-60 items-center my-4 text-color-1 text-sm'>
          {/* <span className='border  border-color-3 bg-transparent  rounded-xl px-3 py-1 mx-2 '> اکشن</span>
          <span className='border  border-color-3 bg-transparent  rounded-xl px-3 py-1 mx-2 '> فانتزی</span>
          <span className='border  border-color-3 bg-transparent  rounded-xl px-3 py-1 mx-2 '> کلاسیک</span> */}
        {
          data.genre?.map((g, index) => (

          <GenreLabel key={index} borderColor= "border-color-3" >
            {g}
          </GenreLabel>
          ))
        }
         
          </div>
            {/* <div className='w-full flex justify-start items-center'><MdOutlineHighQuality className=' inline ml-2 text-xl text-color-2'/><span className=' '>کیفیت : </span></div> */}
            <div className='w-full flex justify-start items-center'><MdOutlineTimer className=' inline ml-2 text-xl text-color-2'/><span className=' '>زمان : {data.time}  دقیقه </span></div>
            {
            data.year ?  <div className='w-full flex  lg:justify-start justify-center items-center'><MdOutlineDateRange className=' inline ml-2 text-xl text-color-2'/><span className=' '> سال انتشار : {data.year}</span></div> : <div className='w-full flex  lg:justify-start justify-center items-center'><GrStatusUnknown className=' inline ml-2 text-xl text-color-2'/><span className=' '>  وضعیت پخش : {data.status}</span></div>
          }    
            {/* <div className='w-full flex justify-start items-center'><PiFilmReelBold className=' inline ml-2 text-xl text-color-2-500'/><span className=' '>ژانر : </span></div> */}
            {
              data.director ? <div className='w-full flex  lg:justify-start justify-center items-center'><RiUserLine className=' inline ml-2 text-xl text-color-2 mr-7 lg:mr-0'/><span className=' '>کارگردان : {data.director}</span></div> : <div className='w-full flex  lg:justify-start justify-center items-center'><PiTelevisionLight className=' inline ml-2 text-xl text-color-2 mr-7 lg:mr-0'/><span className=' '> شبکه : {data.tv}</span></div>
            } 
            <div className='w-full flex justify-start items-center'><BsGlobe className=' inline ml-2 text-xl text-color-2'/><span className=' '>محصول کشور : {data.country}</span></div>
            
            <p> {data.summary} </p>
        </div>
        <div className="w-full flex justify-center md:justify-end items-center text-color-1 px-3 mt-4">
            <Link href={`/movies/${data.id}`}  className=' w-full md:w-3/12 bg-color-hover rounded-md px-2 text-lg  py-1 font-bold shadow-md hover:bg-color-hover custom-transition' >دانلود<LuDownload className='inline mr-1'/></Link>
        </div>
       </div>

    </div>
    </BackgroundRotate>
  )
}

export default MovieBox