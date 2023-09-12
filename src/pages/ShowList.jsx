import React from 'react'
import GenreSideBar from '../components/sideBar/GenreSideBar'
import SerialSideBar from '../components/sideBar/SerialSideBar'
import AdvancedSearchBox from '../components/AdvancedSearchBox'
import MoviesBox from '../components/MoviesBox'


export default function ShowList() {
  return (
    <>


<div className=' w-full px-2 flex justify-center items-start mt-7 my-2'>
        <div className="flex w-3/12 flex-col space-y-2 ml-2">
        <GenreSideBar/>
        <SerialSideBar/>
        </div>
        <div className="w-9/12 flex flex-col justify-center items-center mb-36  space-y-16">
       <AdvancedSearchBox/>
       <div className="w-10/12 flex flex-col justify-center items-center space-y-16">

        <MoviesBox/>
        <MoviesBox/>
        <MoviesBox/>
       </div>
              
        </div>
       </div>
    </>
  )
}
