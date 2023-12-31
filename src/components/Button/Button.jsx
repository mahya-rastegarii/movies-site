import React from 'react'

export default function Button({width, children, bgColor, btnType, margin, type, clicked}) {
  return (
    <button onClick={clicked} type={type? type : 'button'} className={ `  ${width}  ${btnType === 'link' ? `${margin} hover:text-color-2 custom-transition w-full text-color-1 bg-transparent` :`${bgColor ? bgColor : "bg-color-4"}  shadow-lg  p-2 font-semibold rounded-xl  text-color-1 hover:bg-color-hover  custom-transition`}  ` }>
        {children}
    </button>

  )
}
