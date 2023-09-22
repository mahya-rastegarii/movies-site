import React from 'react';

import NavbarMenu from "../Menu/NavbarMenu";
import PageBackdrop from '../Backdrop/PageBackdrop'
import { useBackdropContext } from '../../Context/BackdropContext';


export default function SidebarMenu() {
  // const {showMenu} = useBackdropContext()
  return (
    <>
   <PageBackdrop />
     <div className={` w-4/12  h-full p-1 bg-color-4 fixed  right-0 top-0 z-40 shadow-md pt-12 transition-transform ease-out delay-200 duration-75`}>
       <NavbarMenu/>
      </div>
    </>
   
  )
}
