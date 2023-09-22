import React from 'react'
import Button from '../Button/Button'
import ChangeThemeButton from '../Button/ChangeThemeButton'

export default function NavbarMenu() {
  return (
    <ul className=' flex flex-col  lg:flex-row space-y-7 lg:space-y-0 justify-center lg:justify-start items-center lg:space-x-3 text-sm lg:text-md'>

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
   
    <Button type='link' width='w-full' margin='ml-8'>
    250 فیلم برتر IMDb
    </Button>
   
  </li>
  <li>
  <Button type='link' width='w-full'ml-8 margin='ml-8'>
   250 سریال برتر IMDb 
    </Button>
    
  </li>

  <li className=' lg:hidden'>
 <Button type='link' width="w-full">
 همه فیلم ها 
 </Button>
 
</li>

<li className=' lg:hidden'>
 
 <Button type='link' width="w-full">
 همه سریال ها 
 </Button>

</li>
</ul>
  )
}
