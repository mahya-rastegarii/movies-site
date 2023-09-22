
import React from 'react'
import { useBackdropContext } from '../../Context/BackdropContext'

export default function PageBackdrop() {

  const {setShowMenu}= useBackdropContext()
 
  return (
    <div className=' w-full h-full bg-black absolute top-0 left-0 opacity-60 z-30 ' onClick={() => setShowMenu(false)}>
     
    </div>
  )
}
