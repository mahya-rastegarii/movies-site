import React from 'react'

export default function Button({width, children, bgColor}) {
  return (
    <button className={` ${bgColor ? bgColor : "bg-color-4"}  ${width}  shadow-lg p-2 font-semibold rounded-xl  text-color-1  hover:bg-color-hover custom-transition `}>
        {children}
    </button>

  )
}
