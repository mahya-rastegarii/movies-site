
import React from 'react'
import {FiSearch} from 'react-icons/fi';

export const NavSearchBarDisplayLg =() => {
  return (
    
    <div className='   w-full drop-shadow-md bg-color-4 py-1 transition-all px-3 rounded-xl flex justify-between items-center  '> <input className=' w-full focus:placeholder:text-color-3 text-color-1 bg-transparent transition-all outline-none placeholder:text-slate-500input-search '  type="text" placeholder="جست و جو کنید ..." /> <FiSearch className=' text-color-2 text-xl'/></div>
   
   
  )
}

export const NavSearchBarDisplayMd =() => {
  return (
   
      <FiSearch className=' mx-6  text-color-2 text-xl'/>
    
  )
}
