import React from 'react';

// import BgRotateWrapper from '../Wrappers/BgRotateWrapper';
export default function Form({children}) {
  return (
   
      <form className='w-full flex justify-center items-center px-2 md:px-0'>
        <div className="flex flex-col w-full lg:w-7/12  justify-center items-center my-16 space-y-4">

           {children}
           
            </div>
      </form>

  )
}
