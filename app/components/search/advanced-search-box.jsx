'use client';


import PostType from "../button/postType";
import {GenresData } from "@/app/fetch/genere-data";
import {useState } from 'react'
import RangeInput from "../input/range-input/RangeInput";
import Button from "../button/button";
import { Countries } from "@/app/fetch/coutries";

function AdvancedSearchBox() {


    const [IMDbSliderValue, setIMDbSliderValue] = useState([1, 10]);
    const [yearSliderValue, setYearSliderValue] = useState([1800, 2023]);
    const [genreValue, setGenreValue] = useState('all')
    const [countryValue, setCountryValue] = useState('none');
    const [statusValue, setStatusValue] = useState('none')


    const handleIMDbSliderChange= (value) =>{
        setIMDbSliderValue(value)
       
     }
   
     const handleYearSliderChange= (value) =>{
       setYearSliderValue(value)
    }

  return (
   
    <div className=' bg-color-3 flex flex-col justify-center items-center w-full rounded-md shadow-md p-3  mb-14  space-y-8'>

    
        <div className=' w-full flex-col flex lg:flex-row space-y-8 lg:space-y-0 justify-around items-center'>
          <div className=" w-full lg:w-6/12 md:justify-between  lg:justify-around md:px-20 lg:px-0 justify-center items-center flex flex-col space-y-5 md:space-y-0 md:flex-row ">

        <div className=' w-4/12 bg-transparent  flex justify-center items-center text-color-1 '>
            <span className=' text-md font-bold ml-8 md:ml-2'> نوع </span>
            <PostType  />
        </div>
        <div className=' bg-transparent  flex justify-center items-center text-color-1 font-semibold '>
            <span className=' text-md ml-8 font-bold md:ml-2'> ژانر </span>
            <select className=' bg-color-4 shadow-md outline-none rounded-xl p-2 text-sm' onChange={(e) => setGenreValue(e.target.value)}>

            <option  value={genreValue}> همه </option>
              {
                GenresData?.map((genre, index) => (
                  <option key={index} value={genre}>{genre}</option>
                ))
              }

             </select>
        </div>
          </div>
          {/* <div className=" w-full lg:w-6/12 md:justify-around justify-center items-center flex flex-col space-y-5 md:space-y-0 md:flex-row "> */}
          <div className=" w-full lg:w-6/12 md:justify-between  lg:justify-around md:px-20 lg:px-0 justify-center items-center flex flex-col space-y-5 md:space-y-0 md:flex-row ">

        <div className=' bg-transparent  flex justify-center items-center text-color-1 font-semibold'>
            <span className=' text-md ml-8 font-bold  md:ml-2'> کشور </span>
            <select className=' bg-color-4 shadow-md outline-none rounded-xl p-2 text-sm' onChange={(e) => setCountryValue(e.target.value)}>
              <option value={countryValue} >---</option>
            {
              Countries?.map((country,index) =>{
                // console.log(index);
                return(<option key={index} value={country}>{country}</option>)
              })
            }
             
             </select>
        </div>
       
        <div className={` bg-transparent  flex justify-center items-center text-color-1 font-semibold `} >
            <span className=' text-md font-bold ml-8  md:ml-2'> وضعیت  </span>
            <select className=' bg-color-4 shadow-md outline-none rounded-xl p-2 text-sm' name="" id="" onChange={(e) => setStatusValue(e.target.value)}>
                <option value={statusValue} >---</option>
                <option value="playing"> در حال پخش</option>
                <option value="finished">  پایان یافته </option>
                <option value="canceled"> کنسل شده </option>

             </select>
        </div>
          </div>
        </div>
        <div className=' w-full flex flex-col space-y-8 px-8 lg:px-0 md:space-y-0 justify-around md:flex-row items-center '>
          <div className=' w-full md:w-4/12 flex flex-col justify-center items-center space-y-3'>
            <div className=" w-full flex justify-between items-center text-md font-bold text-color-1">
             <span className=' '> سال ساخت </span>
             <div className=' flex justify-center items-center '>
              <span className=' ml-2 '>{yearSliderValue[0]}</span>
              -
             <span className=' mr-2 '>{yearSliderValue[1]}</span>
             </div>
            </div>
         <RangeInput sliderValue={yearSliderValue} handleSliderChange={handleYearSliderChange} min={1800} max={2023}/>
          </div>
          <div className='w-full md:w-4/12 flex flex-col justify-center items-center space-y-3'>
            <div className=" w-full flex justify-between items-center text-md font-bold text-color-1">
             <span className=' '> امتیاز IMDB </span>
             <div className=' flex justify-center items-center '>
              <span className=' ml-2 '>{IMDbSliderValue[0]}</span>
              /
             <span className=' mr-2 '>{IMDbSliderValue[1]}</span>
             </div>
            </div>
          <RangeInput min={1} max={10} sliderValue={IMDbSliderValue} handleSliderChange={handleIMDbSliderChange} step={0.1}/>
          </div>

        </div>
        {/* <button className=' bg-slate-700  w-4/12 shadow-sm p-2 font-semibold rounded-xl ml-3 text-slate-200  hover:bg-yellow-500  custom-transition '> جستجو </button> */}
        <Button width='w-4/12' >
         جستجو  
        </Button>
    </div>
  )
}

export default AdvancedSearchBox;