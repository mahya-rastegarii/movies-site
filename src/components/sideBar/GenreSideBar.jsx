import React from 'react';
import PostType from '../PostType';

export default function GenreSideBar() {
  return (
    <div className=' w-full  flex flex-col justify-center items-center shadow-md bg-color-3 rounded-md p-3 space-y-4 font-semibold text-sm  text-color-1 ml-2'>
      {/* <div className=" flex justify-center items-center bg-color-4 rounded-xl p-2 ">

                <a href="#" className=' custom-hover-btn '><span > فیلم </span></a>

                <a href="#" className=' custom-hover-btn '><span > سریال </span></a>
      </div> */}

      <PostType/>
                <span className=' font-semibold text-sm  text-color-1'> ژانر ها </span>
                <div className=" w-full shadow-md flex justify-between items-center p-2 bg-color-2 rounded-xl  hover:bg-color-hover cursor-pointer custom-transition delay-150">
                  <span >همه </span>
                  <span>204</span>
                </div>
              <div className='w-full grid gap-3 justify-items-center grid-cols-1 md:grid-cols-2'>
                <div className=" w-full shadow-md  flex justify-between items-center p-2 bg-color-2 rounded-xl  hover:bg-color-hover cursor-pointer custom-transition delay-150">
                  <span >اکشن</span>
                  <span>204</span>
                </div>
                <div className=" w-full shadow-md flex justify-between items-center p-2 bg-color-2 rounded-xl  hover:bg-color-hover cursor-pointer custom-transition delay-150">
                  <span >اکشن</span>
                  <span>204</span>
                </div>
                <div className=" w-full shadow-md flex justify-between items-center p-2 bg-color-2 rounded-xl  hover:bg-color-hover cursor-pointer custom-transition delay-150">
                  <span >اکشن</span>
                  <span>204</span>
                </div>
                <div className=" w-full shadow-md flex justify-between items-center p-2 bg-color-2 rounded-xl  hover:bg-color-hover cursor-pointer custom-transition delay-150">
                  <span >اکشن</span>
                  <span>204</span>
                </div>
                <div className=" w-full shadow-md flex justify-between items-center p-2 bg-color-2 rounded-xl  hover:bg-color-hover cursor-pointer custom-transition delay-150">
                  <span >اکشن</span>
                  <span>204</span>
                </div>
                <div className=" w-full shadow-md flex justify-between items-center p-2 bg-color-2 rounded-xl  hover:bg-color-hover cursor-pointer custom-transition delay-150">
                  <span >اکشن</span>
                  <span>204</span>
                </div>
                <div className=" w-full shadow-md flex justify-between items-center p-2 bg-color-2 rounded-xl  hover:bg-color-hover cursor-pointer custom-transition delay-150">
                  <span >اکشن</span>
                  <span>204</span>
                </div>
                <div className=" w-full shadow-md flex justify-between items-center p-2 bg-color-2 rounded-xl  hover:bg-color-hover cursor-pointer custom-transition delay-150">
                  <span >اکشن</span>
                  <span>204</span>
                </div>
                
               </div>
    </div>
  )
}
