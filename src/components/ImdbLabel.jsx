import React from 'react'

export default function ImdbLabel() {
  return (
    <div className=' flex flex-col justify-center  items-center ml-4'>
                <div className=' flex justify-center items-center'>
                <span className='  text-color-1 font-semibold text-sm '>10/</span>
                <span className=' font-bold text-color-2 text-lg'>7.1</span>
                </div>
                <span className=' bg-color-hover shadow-md px-2 rounded-md font-bold text-color-1 text-md'> IMDb </span>
              </div>
  )
}
