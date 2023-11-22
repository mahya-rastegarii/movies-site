import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Parse from 'parse/dist/parse.min.js';

// Your Parse initialization configuration goes here

import Footer from './components/Footer/Footer';
import Navbar from "./components/Navbar/Navbar";
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import SidebarMenu from './components/sideBar/SidebarMenu';
import Dashboard from './pages/User/Dashboard/Dashboard';
import Home from './pages/Home';
import ShowList from './pages/Movie/ShowList';
import Movie from './pages/Movie/Movie'
import Login from './pages/User/Login'
import Register from './pages/User/Register'
import { BackdropProvider } from './Context/BackdropContext';


import { SliderProvider } from './Context/SliderContext';
import { DataFetchProvider } from './Context/DataFetchContext';

function App() {

  const PARSE_APPLICATION_ID = 'H485LZKoNEIypZ6Phz9ovvneN66MOwCWhMkyvwpl';
const PARSE_HOST_URL = 'https://parseapi.back4app.com/';
const PARSE_JAVASCRIPT_KEY = 'lzeJfxdt1FCmHoFWs75wlmqw2NCRAXG7tfPM6gJP';
Parse.initialize(PARSE_APPLICATION_ID, PARSE_JAVASCRIPT_KEY);
Parse.serverURL = PARSE_HOST_URL;

  const [backToTop, setBackToTop] =useState(false);
  


    
  useEffect(() => {
    window.addEventListener("scroll", () => {
      const currentProgress = window.scrollY
      if(currentProgress > 100){
        setBackToTop(true)
     
      }
      else{
      
        setBackToTop(false)
      }
    
    
    })
  })

  
  return (
   
<BackdropProvider>

<DataFetchProvider>


<div className="w-full relative bg-color-4 dark:theme-dark custom-transition">
  <BrowserRouter>
    <Navbar />
    <SliderProvider>
  <Routes>

    <Route path='/' element={ <Home/>}/>
    <Route path='/Movie' element={ <Movie/>}/>
    <Route path='/List' element={ <ShowList/>}/>
    <Route path='/Login' element={ <Login/>}/>
    <Route path='/Register' element={ <Register/>}/>
    {/* <ShowList/> */}
    {/* <Dashboard/> */}
    {/* <Movie/> */}
    {/* <Login/> */}
    {/* <Register/> */}
  </Routes>
    </SliderProvider>
    <Footer/>
    {
      backToTop && <ScrollToTop/>
    }
   
     <SidebarMenu/>
  </BrowserRouter>
   

   
     
   
    </div>

    </DataFetchProvider>
    </BackdropProvider>
   
    
  )
}

export default App
