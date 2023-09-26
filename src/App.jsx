import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

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
import { BackdropProvider } from './Context/BackdropContext.jsx'

function App() {

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


<div className="w-full relative bg-color-4 dark:theme-dark custom-transition">
  <BrowserRouter>
    <Navbar />
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
    <Footer/>
    {
      backToTop && <ScrollToTop/>
    }
   
     <SidebarMenu/>
  </BrowserRouter>
   

   
     
   
    </div>

  
    </BackdropProvider>
   
    
  )
}

export default App
