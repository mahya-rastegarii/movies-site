import React, { useState } from 'react';

import RangeInput from './rangeInput/RangeInput';
import BgRotateWrapper from './Wrappers/BgRotateWrapper';

import Button from '../components/Button/Button'

export default function AdvancedSearchBox() {

  const [IMDbSliderValue, setIMDbSliderValue] = useState([1, 10]);
  const [yearSliderValue, setYearSliderValue] = useState([1800, 2023]);

  const handleIMDbSliderChange= (value) =>{
     setIMDbSliderValue(value)
    
  }

  const handleYearSliderChange= (value) =>{
    setYearSliderValue(value)
 }

 


  return (
  
    <div className=' bg-color-3 flex flex-col justify-center items-center w-full rounded-md p-3  mb-14  space-y-8'>
        <div className=' w-full flex justify-around items-center'>
        <div className=' bg-transparent  flex justify-center items-center text-color-1'>
            <span className=' text-md font-bold  ml-2'> نوع </span>
            <div className=' flex justify-between shadow-xl items-center bg-color-4 rounded-xl p-2 text-color-1 font-semibold text-sm'>
                <a href="#" className=' custom-hover-btn '><span > فیلم </span></a>
                <a href="#" className=' custom-hover-btn '><span > سریال </span></a>
                {/* <a href="#"><span className=' font-semibold text-sm mx-2 text-white'> انیمیشن </span></a> */}
                </div>
        </div>
        <div className=' bg-transparent  flex justify-center items-center text-color-1 font-semibold'>
            <span className=' text-md  font-bold ml-2'> ژانر </span>
            <select className=' bg-color-4 shadow-xl outline-none rounded-xl p-2 text-sm' >
                <option value=""> </option>
                <option value="">جنایی </option>
                <option value=""> ترسناک </option>
                <option value=""> درام </option>
                <option value=""> معمایی </option>
             </select>
        </div>
        <div className=' bg-transparent  flex justify-center items-center text-color-1 font-semibold'>
            <span className=' text-md font-bold  ml-2'> کشور </span>
            <select className=' bg-color-4 shadow-xl outline-none rounded-xl p-2 text-sm' >
            <option value=""> </option>
                <option className=' ' value=""> اسپانیا</option>
                <option className=' ' value=""> آمریکا</option>
                <option className=' ' value=""> ایران </option>
                <option className=' ' value=""> ترکیه </option>
                <option className=' ' value=""> آلمان </option>
                <option className=' ' value=""> کانادا </option>
             </select>
        </div>
        <div className=' bg-transparent  flex justify-center items-center text-color-1 font-semibold'>
            <span className=' text-md font-bold ml-2'> وضعیت پخش </span>
            <select className=' bg-color-4 shadow-xl outline-none rounded-xl p-2 text-sm' name="" id="">
            <option value=""> </option>
                <option value=""> در حال پخش</option>
                <option value="">  پایان یافته </option>
                <option value=""> کنسل شده </option>
                <option value=""> منتشر نشده </option>
             </select>
        </div>
        </div>
        <div className=' w-full flex justify-around items-center'>
          <div className='w-4/12 flex flex-col justify-center items-center space-y-3'>
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
          <div className='w-4/12 flex flex-col justify-center items-center space-y-3'>
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
        <Button width='w-4/12'>
         جستجو  
        </Button>
    </div>
  )
}
