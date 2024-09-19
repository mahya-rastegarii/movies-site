
import { BsSun, BsMoon } from 'react-icons/bs';

export default function ChangeThemeButton() {

  

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

   
    <button className=' outline-none custom-transition ' >

    {/* {
      theme === "dark" ?
       <BsSun className=' text-color-2  inline text-2xl'/> 
       : */}
        <BsMoon className=' text-color-2  inline text-2xl'/>
    {/* } */}
  </button>
  )
}
