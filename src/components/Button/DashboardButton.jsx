import React from 'react'

export default function DashboardButton({textColor, children, rounded}) {
  return (
    <li className={` hover:bg-color-hover custom-transition border-t ${rounded} border-color-1 ${textColor ? textColor : "text-color-1"}  p-3 `}>
    <button className=" w-full ">
      
          {children}
           </button>
    </li>
  )
}
