import React, { useEffect } from 'react'

import MoviesBox from '../../components/box/MoviesBox'
import SerialSideBar from '../../components/sideBar/SerialSideBar'
import { useDataFetchContext } from '../../Context/DataFetchContext'
import { GenreProvider } from '../../Context/GenreContext'
import SideContainer from '../../components/sideBar/SideContainer'


export default function ShowList() {

  const {allData}= useDataFetchContext()

  
 
  return (
    <>



  {/* <GenreProvider>
<div className=' w-full px-2  flex-col-reverse flex mt-7 lg:flex-row justify-center items-start mb-12 my-2  lg:mb-0'>
       
       <div className="flex w-full lg:w-3/12 flex-col md:flex-row md:space-y-0 md:mb-12 lg:mb-0 lg:space-y-2 lg:flex-col space-y-2">
        <GenreSideBar/>
        <SerialSideBar/>
        </div>
      
        <div className="w-full lg:w-9/12  flex flex-col justify-center items-center mb-36 lg:mr-3 space-y-16">
       <AdvancedSearchBox/>
       <div className="w-full px-4  lg:w-10/12 flex flex-col justify-center items-center space-y-16">
 {
      allData?.map(data => (

        <MoviesBox key={data.id} data={data}/>
      ) )
 }
       
       </div>
              
        </div>
       </div>
       </GenreProvider> */}
       <SideContainer>

       <div className="w-full px-4  lg:w-10/12 flex flex-col justify-center items-center space-y-16">
       {
      allData?.map(data => (

        <MoviesBox key={data.id} data={data}/>
      ) )
      }
      </div>

       </SideContainer>
  
    </>
  )
}
