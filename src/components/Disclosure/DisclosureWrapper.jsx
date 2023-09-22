import React from 'react'

import { RiArrowDownDoubleLine } from 'react-icons/ri';
import { Disclosure } from '@headlessui/react';
export default function DisclosureWrapper({title, children}) {
  return (
    <Disclosure>

   
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between   bg-color-3  px-4 py-2 text-left text-sm font-medium custom-transition text-color-1 focus:outline-none focus-visible:ring">
                <span>{title}</span>
                <RiArrowDownDoubleLine
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-color-2`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="p-4  bg-color-3 rounded-b-lg text-sm border-t-2 border-color-4 text-color-1 font-semibold">
                    
               {children}
          
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
  )
}
