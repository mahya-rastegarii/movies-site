import React from 'react';

// import { BsSun, BsMoon } from 'react-icons/bs';
import { BiMenu } from 'react-icons/bi';
import { useBackdropContext } from '../../Context/BackdropContext';
import ChangeThemeButton from '../Button/ChangeThemeButton';
import Logo from '../Logo/Logo';
import NavbarMenu from '../Menu/NavbarMenu';
import { NavSearchBarDisplayLg, NavSearchBarDisplayMd } from '../Search/NavSearchBar';
// import { useThemeContext } from '../Context/ThemeContext';

export default function Navbar() {

  const {setShowMenu} =useBackdropContext()
  
  // const {theme, setTheme} = useThemeContext()

  // const element = document.documentElement

  // const changeTheme = () => {
  //   if(theme === "dark") {
  //     setTheme("light")
  //     element.classList.remove('dark')
  //   } else {
  //     setTheme('dark')
  //     element.classList.add('dark')
  //   }
    
  // }


  return (
    <div className=' w-full relative bg-color-3 border-b border-color-1 overflow-x-hidden p-6 flex justify-between items-center '>
      <div className=' w-full px-2'>
        <div className="lg:hidden flex justify-start items-center w-full">
       <button onClick={() => setShowMenu(true)}><BiMenu className=' text-color-2 text-2xl'/></button> 
          <NavSearchBarDisplayMd/>
          <ChangeThemeButton/>
        </div>
        {/* <ul className=' hidden lg:flex justify-start items-center space-x-3 text-sm lg:text-md'>
          
          <li className='w-24  ml-3'>

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
     
      <ChangeThemeButton/>

          </li>
          <li className=''>
            <button className='mr-8 hover:text-color-2 custom-transition w-full text-color-1 bg-transparent text-sm'>250 فیلم برتر IMDb</button>
          </li>
          <li>

            <button className='mr-8 hover:text-color-2 custom-transition w-full text-color-1 bg-transparent text-sm'> 250 سریال برتر IMDb </button>
          </li>
        </ul> */}
        <div className=' hidden lg:flex'>
        <NavbarMenu/>

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
