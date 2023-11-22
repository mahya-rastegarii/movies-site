import Parse from 'parse/dist/parse.min.js';
import React from 'react';


import { BiMenu } from 'react-icons/bi';
// import { useDataFetchContext } from '../../Context/DataFetchContext';

import { useBackdropContext } from '../../Context/BackdropContext';
import ChangeThemeButton from '../Button/ChangeThemeButton';
import Logo from '../Logo/Logo';

import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import { NavSearchBarDisplayLg, NavSearchBarDisplayMd } from '../Search/NavSearchBar';
import FetchTopMovie from '../../fetch/FetchTopMovie';
// import { fetchTopDataSeries } from '../../Context/Fetch/SeriesFetchData';
// import { fetchTopDataMovies } from '../../Context/Fetch/MoviesFetchData';


export default function Navbar() {
  
  const {setShowMenu} =useBackdropContext()
  // const {setAllData}= useDataFetchContext()
  
  // const fetchDataMovies = async() => {
  //    const query = new Parse.Query("Movies")
  //    try{
  //     query.addAscending('topMovie');
  //     let queryResult = await query.find();
  //     let result = []
  //     await queryResult.filter((item, index) => 
  //       {

  //          if(item.get("topMovie") > 0){ 
          
  //           result.push( {
  //             id: index,
  //             name:item.get('name'),
  //             genre:item.get('genre'),
  //             pic:item.get('pic')._url,
  //             director:item.get('director'),
  //             country:item.get('country'),
  //             year:item.get('year'),
  //             rate:item.get('imdbRating'),
  //             summary:item.get('summary'),
  //             time:item.get('time')
  //             })
          

  //                }
  //                   }) 
         
  //       console.log("data",result)
  //       setAllData(result)
  //                 }catch (e) {
  //     console.log(e);
  //    }
  // }
  // const fetchDataWSeries = async() => {
  //   const query = new Parse.Query("Series");
  //   try{
  //     query.addAscending('topMovie');
  //     let queryResult = await query.find();
  //     let result = []
  //     await queryResult.filter((item, index) => 
  //     {

  //        if(item.get("topMovie") > 0){ 
               
  //         result.push( {
  //           id: index,
  //           name:item.get('name'),
  //           genre:item.get('genre'),
  //           pic:item.get('pic')._url,
  //           director:item.get('director'),
  //           country:item.get('country'),
  //           year:item.get('year'),
  //           rate:item.get('imdbRating'),
  //           summary:item.get('summary'),
  //           time:item.get('time')
  //           })
        

  //              }
  //                 }) 
       
  //     console.log("data",result)
  //     setAllData(result)
  //               }catch (e) {
  //   console.log(e);
  //  }
      
  // }
  
  return (
    <div className=' w-full relative bg-color-3 border-b border-color-1 overflow-x-hidden p-6 flex justify-between items-center '>
      <div className=' w-full px-2'>
        <div className="lg:hidden flex justify-start items-center w-full">
       <button onClick={() => setShowMenu(true)}><BiMenu className=' text-color-2 text-2xl'/></button> 
          <NavSearchBarDisplayMd/>
          <ChangeThemeButton/>
        </div>
    
        <div className=' hidden lg:flex'>
      
        <ul className=' flex    justify-start items-center space-x-3 text-sm text-md'>

      <li className='w-24  lg:ml-3'>

          <Link to='/Register'>
         <Button bgColor="bg-color-2" width='w-full'>
        ثبت نام 
         </Button>
          </Link>
         </li>
     <li className='w-24 '>
        <Link to="/Login">
      <Button bgColor="bg-color-2" width="w-full">
        ورود
        </Button>
        </Link>
 
</li>
<li>
<div className=' lg:flex hidden'>
<ChangeThemeButton/>
</div>

</li>
<li>
 <Link to='/List'>
  <Button btnType='link' width='w-full' margin='ml-8' clicked={FetchTopMovie('Movies')}>
  250 فیلم برتر IMDb
  </Button>
  </Link>
 
</li>
<li>
 <Link to='/List'>
<Button btnType='link' width='w-full'ml-8 margin='ml-8' clicked={FetchTopMovie('Series')}>
 250 سریال برتر IMDb 
  </Button>
  </Link>
  
</li>


</ul>

        </div>
      </div>
      <div className='w-full px-2 flex justify-end items-center'>
      
       <div className="ml-6 w-6/12 hidden lg:block">

       <NavSearchBarDisplayLg/>
       </div>
       <Link to="/"> <Logo size=' text-2xl md:text-3xl lg:text-4xl'/></Link>
      </div>
    
    </div>
  )
}
