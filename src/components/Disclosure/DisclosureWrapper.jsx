import React from 'react'

import { RiArrowDownDoubleLine } from 'react-icons/ri';
import { Disclosure } from '@headlessui/react';
export default function DisclosureWrapper({title, children, bg, color, border, rounded, open }) {
  return (
    <Disclosure defaultOpen={open}>

   
          {({ open }) => (
            <>
              <Disclosure.Button className={`flex w-full justify-between  ${bg ? bg : "bg-color-3 " }  ${rounded ? rounded : "" } px-4 py-2 text-left text-sm font-medium custom-transition ${color ? color : "text-color-1" }  focus:outline-none focus-visible:ring`}>
                <span>{title}</span>
                <RiArrowDownDoubleLine
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-color-2`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className={`p-4 ${bg ? bg : "bg-color-3 " } rounded-b-lg text-sm border-t-2 ${border ? border : "border-color-4" }  ${color ? color : "text-color-1" } font-semibold`}>
                    
               {children}
          
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
  )
}
