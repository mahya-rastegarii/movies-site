import React from 'react'

export default function BgRotateWrapper({children, padding, width, rotate1, rotate2}) {
  return (
    <div className={`${width ? width : "w-full"} rounded-xl bg-color-2 ${ rotate1 ? rotate1 : "-rotate-3"}  shadow-md `}>
        <div className={`bg-color-3 w-full ${padding}  rounded-xl ${rotate2 ? rotate2 : "rotate-3"}  `}>
                { children }
        </div>
    </div>
  )
}
