import React from 'react'
import GenreSideBar from '../../components/sideBar/GenreSideBar'
import SerialSideBar from '../../components/sideBar/SerialSideBar'
import AdvancedSearchBox from '../../components/Search/AdvancedSearchBox'
import MoviesBox from '../../components/box/MoviesBox'


export default function ShowList() {
  return (
    <>


{/* <div className=' w-full px-2 flex justify-center items-start mt-7 my-2'> */}
<div className=' w-full px-2  flex-col-reverse flex mt-7 lg:flex-row justify-center items-start mb-12 my-2  lg:mb-0'>
        {/* <div className="flex w-3/12 flex-col space-y-2 ml-2">
        <GenreSideBar/>
        <SerialSideBar/>
        </div> */}

       <div className="flex w-full lg:w-3/12 flex-col md:flex-row md:space-y-0 md:mb-12 lg:mb-0 lg:space-y-2 lg:flex-col space-y-2">
        <GenreSideBar/>
        <SerialSideBar/>
        </div>
        {/* <div className="  lg:w-9/12  w-full flex flex-col mb-36 lg:mr-3"> */}
        <div className="w-full lg:w-9/12  flex flex-col justify-center items-center mb-36 lg:mr-3 space-y-16">
       <AdvancedSearchBox/>
       <div className="w-full px-4  lg:w-10/12 flex flex-col justify-center items-center space-y-16">

        <MoviesBox/>
        <MoviesBox/>
        <MoviesBox/>
       </div>
              
        </div>
       </div>
    </>
  )
}
