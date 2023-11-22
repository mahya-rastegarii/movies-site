
// import Parse from 'parse/dist/parse.min.js';
import React, { useEffect, useState } from 'react';


import { useNavigate } from 'react-router-dom';

import { useGenreContext } from '../../Context/GenreContext';
import PostType from '../PostType';
import { useDataFetchContext } from '../../Context/DataFetchContext';
import useParse from '../../useParse';
// import { countAll } from '../../Context/Fetch/SeriesFetchData';
// import {fetchAllData, fetchGenreData} from '../../Context/Fetch/MoviesFetchData'
export default function GenreSideBar() {
  
 const navigate = useNavigate()
  const {fetchMovieGenres, genre} = useGenreContext()
  // const { count, setCount}= useDataFetchContext()
const {setAllData}= useDataFetchContext()
const [response]= useParse("Movies")
  const [count, setCount] = useState()
  
  const fetchGenreData = async(e) => {
    const value = e.target.innerText;
    let result = []
   
    try{
      response.contains('genre', value );
      response.addDescending('year');
      const queryResult = await response.find();
 

      if(queryResult){
        await queryResult.map((item,index) => {
          result.push( {
            id: index,
            name:item.get('name'),
            genre:item.get('genre'),
            pic:item.get('pic')._url,
            director:item.get('director'),
            country:item.get('country'),
            year:item.get('year'),
            rate:item.get('imdbRating'),
            summary:item.get('summary'),
            time:item.get('time')
            })
        }) 
        setAllData(result)
        navigate('/List')
      }
      else{
        console.log("no data")
      }
    }
    catch(err){
      console.log('error', err.message);
    }
  } 

  const fetchAllData = async() =>{
    let result = []
   
    try{
      response.addDescending('year');
      const queryResult = await response.find();
       
       
    
        await queryResult.map((item,index) => {
          result.push( {
            id: index,
            name:item.get('name'),
            genre:item.get('genre'),
            pic:item.get('pic')._url,
            director:item.get('director'),
            country:item.get('country'),
            year:item.get('year'),
            rate:item.get('imdbRating'),
            summary:item.get('summary'),
            time:item.get('time')
            })
        }) 
        setAllData(result)
        navigate('/List')
      
     
    }
    catch(err){
      console.log('error', err.message);
    }
  }

  const countAll = async() => {
   
    const countData =await response.count();
    setCount(countData)
    console.log(countData)
  }

useEffect(()=>{
 
  fetchMovieGenres()
  countAll()
},[response])
  
  return (
    <div className=' w-full  flex flex-col justify-center items-center shadow-md bg-color-3 rounded-md p-3 space-y-4 font-semibold text-sm  text-color-1 ml-2'>
      {/* <div className=" flex justify-center items-center bg-color-4 rounded-xl p-2 ">

                <a href="#" className=' custom-hover-btn '><span > فیلم </span></a>

                <a href="#" className=' custom- hover-btn '><span > سریال </span></a>
      </div> */}

      <PostType />
                <span className=' font-semibold text-sm  text-color-1'> ژانر ها </span>
                <div className=" w-full shadow-md flex justify-between items-center p-2 bg-color-2 rounded-xl  hover:bg-color-hover cursor-pointer custom-transition delay-150" onClick={fetchAllData}>
                  <span >همه </span>
                  <span>{count? count : 0}</span>
                </div>
              <div className='w-full grid gap-3 justify-items-center grid-cols-1 md:grid-cols-2'>
                {
                  genre?.map((genre, index) => (
                
                    <div className=" w-full shadow-md  flex justify-center items-center p-2 bg-color-2 rounded-xl  hover:bg-color-hover cursor-pointer custom-transition delay-150" onClick={fetchGenreData}  key={index}>
                
                <span> {genre}</span>
               

                {/* <span>204</span> */}
                  
                </div>
                  ))
                }
               
               
               
              
               
               
               </div>
    </div>
  )
}
