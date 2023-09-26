import React from 'react';


import { BiMenu } from 'react-icons/bi';
import { useBackdropContext } from '../../Context/BackdropContext';
import ChangeThemeButton from '../Button/ChangeThemeButton';
import Logo from '../Logo/Logo';

import { NavSearchBarDisplayLg, NavSearchBarDisplayMd } from '../Search/NavSearchBar';
import Button from '../Button/Button';


export default function Navbar() {

  const {setShowMenu} =useBackdropContext()
  
  
  return (
    <div className=' w-full relative bg-color-3 border-b border-color-1 overflow-x-hidden p-6 flex justify-between items-center '>
      <div className=' w-full px-2'>
        <div className="lg:hidden flex justify-start items-center w-full">
       <button onClick={() => setShowMenu(true)}><BiMenu className=' text-color-2 text-2xl'/></button> 
          <NavSearchBarDisplayMd/>
          <ChangeThemeButton/>
        </div>
    
        <div className=' hidden lg:flex'>
      
        <ul className=' flex    justify-start items-center space-x-3 text-sm text-md'>

      <li className='w-24  lg:ml-3'>

         <Button bgColor="bg-color-2" width='w-full'>
ثبت نام
</Button>
</li>
<li className='w-24 '>
<Button bgColor="bg-color-2" width="w-full">
ورود
</Button>
 
</li>
<li>
<div className=' lg:flex hidden'>
<ChangeThemeButton/>
</div>

</li>
<li>
 
  <Button btnType='link' width='w-full' margin='ml-8'>
  250 فیلم برتر IMDb
  </Button>
 
</li>
<li>
<Button btnType='link' width='w-full'ml-8 margin='ml-8'>
 250 سریال برتر IMDb 
  </Button>
  
</li>


</ul>

        </div>
      </div>
      <div className='w-full px-2 flex justify-end items-center'>
      
       <div className="ml-6 w-6/12 hidden lg:block">

       <NavSearchBarDisplayLg/>
       </div>
       <a href='/'> <Logo size=' text-2xl md:text-3xl lg:text-4xl'/></a>
      </div>
    
    </div>
  )
}
