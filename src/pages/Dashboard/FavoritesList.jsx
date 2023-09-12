import React from 'react'

import coverMovies from '../../assets/img/64ea845ca1606-57593-210x315.jpg';
export default function FavoritesList() {
  return (
    
    <div className=' grid grid-cols-4 mx-4 my-12  gap-4 place-items-center'>
         <div className=" w-9/12 flex justify-center items-center cursor-pointer">
          <img className='w-full rounded-md' src={coverMovies} alt="" />
         </div>
         <div className=" w-9/12 flex justify-center items-center cursor-pointer">
          <img className='w-full rounded-md' src={coverMovies} alt="" />
         </div>
         <div className=" w-9/12 flex justify-center items-center cursor-pointer">
          <img className='w-full rounded-md' src={coverMovies} alt="" />
         </div>
         <div className=" w-9/12 flex justify-center items-center cursor-pointer">
          <img className='w-full rounded-md' src={coverMovies} alt="" />
         </div>
    </div>
  )
}
