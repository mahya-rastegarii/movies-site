import React, { useEffect, useState } from 'react'

import coverMovies from "@/public/pic/bg1.webp";
i
export default function FavoritesList() {


 
  
 

 
  return (
    
    <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-4 my-12  gap-8 md:gap-4 place-items-center'>
    
        <div className="  md:w-5/12   lg:w-9/12 flex justify-center items-center cursor-pointer space-y-3">
        <img className='w-full rounded-md' src={coverMovies}  alt="" />
        <span className='text-color-1 font-semibold'> MoveName</span>
       </div>
       
       
    </div>
  )
}
