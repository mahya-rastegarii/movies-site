import { useEffect, useState } from 'react';


import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from './pages/Login'
import Footer from './components/Footer'
import ShowList from './pages/ShowList';
import ScrollToTop from './components/ScrollToTop';
import Movie from './pages/Movie';
import Dashboard from './pages/Dashboard/Dashboard'
import Register from './pages/Register';

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
    <div className="w-full relative bg-color-4 dark:theme-dark custom-transition">
    <Navbar/>
    <Home/>
    {/* <ShowList/> */}
    {/* <Dashboard/> */}
    {/* <Movie/> */}
    {/* <Login/> */}
    {/* <Register/> */}

   
    <Footer/>
    {
      backToTop && <ScrollToTop/>
    }
   
    </div>
    
  )
}

export default App
