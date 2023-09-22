import React from 'react'
import { BsSun, BsMoon } from 'react-icons/bs';

import { useThemeContext } from '../../Context/ThemeContext';
export default function ChangeThemeButton() {

    const {theme, setTheme} = useThemeContext()

    const element = document.documentElement
  
    const changeTheme = () => {
      if(theme === "dark") {
        setTheme("light")
        element.classList.remove('dark')
      } else {
        setTheme('dark')
        element.classList.add('dark')
      }
      
    }

  return (

   
    <button className=' outline-none custom-transition ' onClick={changeTheme}>

    {
      theme === "dark" ? <BsSun className=' text-color-2  inline text-2xl'/> : <BsMoon className=' text-color-2  inline text-2xl'/>
    }
  </button>
  )
}
