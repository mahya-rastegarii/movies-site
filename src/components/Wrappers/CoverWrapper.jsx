import React from 'react'

export default function CoverWrapper({bg,children}) {
  return (
    <div className=' w-full m-auto h-screen z-10 after:w-full after:h-full after:absolute after:top-0 after:right-0 after:left-0 after:bottom-0 after:bg-black after:opacity-50 bg-no-repeat bg-cover bg-center drop-shadow-md flex justify-center items-center ' style={{backgroundImage:`url(${bg})`}}>
        {children}
    </div>
  )
}
