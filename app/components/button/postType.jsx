

'use client';

import  { useState } from 'react'
import Button from './button';







export default function PostType() {


  
  const [active, setActive] = useState("movies")
  
  


  const changeActiveBtnType = (e) => {
    const value = e.target.name
    setActive(value)
  }
  





 const btns =[
  {
    name: "movies",
    content: "فیلم",
  },
  {
    name: "series",
    content:"سریال",
  },

]

  return (
    <div className='w-full flex justify-between shadow-md items-center bg-color-4 rounded-xl p-2 text-color-1 font-semibold text-sm '>
   
    {
      btns.map((btn) => (

    <Button width='w-6/12' name={btn.name} active={active === btn.name} shadowNone  margin='ml-2 ' clicked={changeActiveBtnType} key={btn.name}>
    
        {
          btn.content
        }
           
    </Button>
      ))
    }

    {/* <Button width='w-6/12' shadowNone active={active} clicked={() => setActive(!active)}>
      سریال
    </Button> */}

    </div>
  )
}
