import React from 'react'

import coverMovies from '../../../assets/img/64ea84665f97f-57601-210x315.jpg';
export default function FavoritesList() {
  return (
    
    <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-4 my-12  gap-8 md:gap-4 place-items-center'>
         <div className="  md:w-5/12   lg:w-9/12 flex justify-center items-center cursor-pointer">
          <img className='w-full rounded-md' src={coverMovies}  alt="" />
         </div>
         <div className="  md:w-5/12  lg:w-9/12 flex justify-center items-center cursor-pointer">
          <img className='w-full rounded-md' src={coverMovies} alt="" />
         </div>
         <div className=" md:w-5/12 w-4/12  lg:w-9/12 flex justify-center items-center cursor-pointer">
          <img className='w-full rounded-md' src={coverMovies} alt="" />
         </div>
         <div className=" md:w-5/12 w-4/12  lg:w-9/12 flex justify-center items-center cursor-pointer">
          <img className='w-full rounded-md' src={coverMovies} alt="" />
         </div>
    </div>
  )
}
