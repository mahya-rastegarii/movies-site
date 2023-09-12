import React from 'react';

import {FiSearch} from 'react-icons/fi';
import { BsSun, BsMoon } from 'react-icons/bs';
import { LuLogIn, LuUserPlus } from 'react-icons/lu';
import Button from './Button/Button';
import Logo from './Logo';


export default function Navbar() {
  return (
    <div className=' w-full relative bg-color-3 border-b border-color-1 overflow-x-hidden p-6 flex justify-between items-center '>
      <div className=' w-full px-2 '>
        <ul className=' flex justify-start items-center space-x-3'>
            {/* <div className=" w-full flex justify-center items-center text-sm font-semibold  text-slate-200 ml-3"> */}
          <li className='w-24  ml-3'>

      <Button bgColor="bg-color-2" width='w-full'>
        ثبت نام
      </Button>
     </li>
     <li className='w-24 '>
      <Button bgColor="bg-color-2" width="w-full">
        ورود
      </Button>
            {/* </div> */}

          </li>
          <li>
      <button className=' outline-none custom-transition '><BsSun className=' text-color-2  inline text-2xl'/></button>

          </li>
          <li className=''>
            <button className='mr-8 hover:text-color-2 custom-transition w-full text-color-1 bg-transparent text-sm'>250 فیلم برتر IMDb</button>
          </li>
          <li>

            <button className='mr-8 hover:text-color-2 custom-transition w-full text-color-1 bg-transparent text-sm'> 250 سریال برتر IMDb </button>
          </li>
        </ul>
      </div>
      <div className='w-full px-2 flex justify-end items-center'>
       <div className=' ml-6 w-6/12 drop-shadow-md bg-color-4 py-1 transition-all px-3 rounded-md flex justify-between items-center  '> <input className=' w-full focus:placeholder:text-slate-700 text-slate-200 bg-transparent transition-all outline-none placeholder:text-slate-500input-search '  type="text" placeholder="جست و جو کنید ..." /> <FiSearch className=' text-yellow-500 text-xl'/></div>
       <a href='/'> <Logo size=' text-4xl'/></a>
      </div>
    
    </div>
  )
}
