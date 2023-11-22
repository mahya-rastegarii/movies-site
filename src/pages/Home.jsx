import React , {useState, useEffect} from 'react';
import Parse from 'parse/dist/parse.min.js';
import './style/style.css';

// import Newest from '../components/Newest'
import AdvancedSearchBox from '../components/Search/AdvancedSearchBox';
import GenreSideBar from '../components/sideBar/GenreSideBar'
import SimpleSlider from '../components/sliders/SimpleSlider';
import SerialSideBar from '../components/sideBar/SerialSideBar';
import HeaderBackdrop from "../components/Backdrop/HeaderBackdrop"


import ImdbLabel from '../components/Label/ImdbLabel';
import GenreLabel from '../components/Label/GenreLabel';
import Slider3D from '../components/sliders/Slider3D';
import { useBackdropContext } from '../Context/BackdropContext';
import SidebarMenu from '../components/sideBar/SidebarMenu';
import { useSliderContext } from '../Context/SliderContext';
import { Link } from 'react-router-dom';
import { GenreProvider } from '../Context/GenreContext';
import { useDataFetchContext } from '../Context/DataFetchContext';
import useParse from '../useParse';
import SideContainer from '../components/sideBar/SideContainer';
// import { slideNewMovie, sliderPopularMovie } from '../Context/Fetch/MoviesFetchData';
// import { sliderNewSerial, sliderPopularSerial } from '../Context/Fetch/SeriesFetchData';




export default function Home() {
  
  // const [response, loading,result, fetchData]= useParse()
  // const [newMovie, setNewMovie]= useState()
  const {imageInfo}= useSliderContext()
  // const [NewSeries, NewMovies, popularSeries, popularMovies, setNewMovies, setPopularMovies, setNewSeries, setPopularSeries] = useDataFetchContext()
  const [popularMovies, setPopularMovies]= useState()
  const [popularSeries, setPopularSeries]= useState()
  const[newMovies, setNewMovies] = useState()
  const[newSeries, setNewSeries] = useState()
  // const [newSerial, setNewSerial]= useState()
  // const [popularMovie, setPopularMovie]= useState()
  // const [popularSerial, setPopularSerial]= useState()


    const slideNewMovie = async() => {
      const query = new Parse.Query("Movies")
      try{
        let result = []
      await query.filter((item, index) => 
        {

           if(item.get("year") === 2023){ 
                 
            result.push( {
              id: index,
              name:item.get('name'),
              pic:item.get('pic')._url,
              rate:item.get('imdbRating'),
              genre: item.get('genre'),
              cover:item.get("cover")._url,
              summary:item.get("summary"),
              director:item.get('director'),
              time:item.get("time"),
              year:item.get("year"),
              desc:item.get('desc'),
              country:item.get("country")
              })
          

                 }
                    }) 
          const data = result.slice(0, 15)
        // console.log("data",data)
        setNewMovies(data)
                  }
                  catch (err) {
                    console.log(err.message);
                    }
    }
    const sliderNewSerial = async() => {
      const query = new Parse.Query("Series")
      // fetchData("Series")
      try{
        let result = []
      await query.filter((item, index) => 
        {

           if(item.get("update")){
                 
            result.push( {
              id: index,
              name:item.get('name'),
              pic:item.get('pic')._url,
              rate:item.get('imdbRating'),
              genre: item.get('genre'),
              cover:item.get("cover")._url,
              summary:item.get("summary"),
              director:item.get('director'),
              time:item.get("time"),
              year:item.get("year"),
              desc:item.get('desc'),
              country:item.get("country")
              })  
                 }
                    
                   }) 
              const data = result.slice(0, 15)

        // console.log("data",data)
        setNewSeries(data)
                  }
                  catch (err) {
                    console.log(err.message)
                  }
    }

    const sliderPopularMovie = async() => {
      const query = new Parse.Query("Movies")
      // fetchData("Movies")
      try{
        let result = []
      await query.filter((item, index) => 
        {

           if(item.get("imdbRating") > 7 && item.get("topMovie") === 0) {
                 
            result.push( {
              id: index,
              name:item.get('name'),
              pic:item.get('pic')._url,
              rate:item.get('imdbRating'),
              genre: item.get('genre'),
              cover:item.get("cover")._url,
              summary:item.get("summary"),
              director:item.get('director'),
              time:item.get("time"),
              year:item.get("year"),
              desc:item.get('desc'),
              country:item.get("country")
              }) 
                 }
                    
                   }) 
              const data = result.slice(0, 15)

        // console.log("data",data)
        setPopularMovies(data)
                  }
                  catch (err) {
                    console.log(err.message)
                  }

    }

    
    const sliderPopularSerial = async() => {
      const query = new Parse.Query("Series")
      
      // fetchData("Series")
      try{
        let result = []
      await query.filter((item, index) => 
        {

           if(item.get("imdbRating") > 7.5 && item.get("topMovie") === 0){
                 
            result.push( {
              id: index,
              name:item.get('name'),
              pic:item.get('pic')._url,
              rate:item.get('imdbRating'),
              genre: item.get('genre'),
              cover:item.get("cover")._url,
              summary:item.get("summary"),
              director:item.get('director'),
              time:item.get("time"),
              year:item.get("year"),
              desc:item.get('desc'),
              country:item.get("country")
              })
                 }
                    
                   }) 
              const data = result.slice(0, 15)

        // console.log("data",data)
        setPopularSeries(data)
                  }
                  catch (err) {
                    console.log(err.message)
                  }
    }

  const sliders = [
    {
        delay:2500,
      title: " جدیدترین فیلم ها",
     data: newMovies
    
    },
    {
        delay:2500,
      title: " جدیدترین سریال ها",
    data: newSeries
    
    },
    {
   
    delay:2700,
      title: "محبوب ترین فیلم ها",
      data:popularMovies
    
    },
    {
      delay:3000,

      title: "محبوب ترین سریال ها",
      data:popularSeries
      
    
    },
  
  
  
  ]

  // const filmInfo = (name) => {
  //   const filterData = imageInfo.filter( filmName => filmName.name === name)
  //   setData(filterData[0])
  //   navigate('/Movie')
  //   console.log(filterData)
  // }

useEffect(() => {
  slideNewMovie()
sliderNewSerial()
sliderPopularMovie()
sliderPopularSerial()

},[])
//   const genres = imageInfo.genre
  return (
    // <div className=' w-9/12 text-xl  font-semibold text-center text-red-700'></div>
   <div className=' w-full flex flex-col justify-center items-center '>
     

     <HeaderBackdrop bg={imageInfo.cover}>
        <div className='w-full md:w-8/12 lg:w-5/12 flex flex-col justify-center items-center lg:items-start z-10 space-y-4 lg:space-y-14 '>
            <h2 className='font-bold text-2xl text-white '> {imageInfo.name} </h2>
            <div className='w-9/12 flex-col flex lg:flex-row justify-center lg:justify-start items-center  space-y-3 lg:space-y-0 lg:items-end '>
             

              <ImdbLabel score={imageInfo.rate}/>

              <div className=' flex justify-between items-center  text-slate-300 space-x-5 ' key={imageInfo.id}>
              {
               imageInfo.genre?.map((genre, index) => (

                     
                         <GenreLabel  borderColor='border-slate-300' key={index}>{genre}</GenreLabel>
                         
                         
                         ))
                        }
                        </div>
            </div>
            <p className=' hidden lg:block  w-9/12 font-serif text-lg text-white '>{imageInfo.summary}</p>
            <div className='w-5/12 md:w-2/12'><button className=' w-full bg-color-hover rounded-md px-2 text-lg  py-1 font-bold shadow-md hover:bg-color-hover custom-transition'  >دانلود</button></div>
        </div>
        <div className=' w-full md:w-8/12 lg:w-5/12  flex justify-center items-center backdrop-blur-md  border shadow-sm border-white border-opacity-5 px-3 py-7 rounded-sm  z-10'> 

          <Slider3D />


         </div>
       
  </HeaderBackdrop> 
  
      {/* <GenreProvider>
       <div className=' w-full px-2  flex-col-reverse flex lg:flex-row justify-center items-start mb-12 my-2  lg:mb-0'>
        <div className="flex w-full lg:w-3/12  flex-col md:flex-row md:space-y-0 md:mb-12 lg:mb-0 lg:space-y-2 lg:flex-col space-y-2">
        <GenreSideBar/>
        <SerialSideBar/>
        </div>
        <div className="  lg:w-9/12  w-full flex flex-col mb-36 lg:mr-3">
       <AdvancedSearchBox/>
        
      
        </div>
       </div>
       </GenreProvider> */}
         <SideContainer>

         {
          sliders.map( (slider, index) => (
          
            <SimpleSlider {...slider}key={index}/>
          
          ))
        }

         </SideContainer>

   </div>
  )
}
