
import { createContext, useContext, useState } from "react";
import Parse from 'parse/dist/parse.min.js';
const GenreContext= createContext()


export const GenreProvider = ({children}) => {

    const [genre, setGenre]= useState()

    const fetchMovieGenres = async() => {
    
        const query = new Parse.Query("Genres");
        try{
        
          const results= await query.map((genre)=> genre.get('movieGenre'))
          
          setGenre(results[0])
        }
        catch(e){
         console.log(e); 
        }
    
     }
     
     const fetchSerialGenres = async() => {
        
      const query = new Parse.Query("Genres");
      try{
      
        const results= await query.map((genre)=> genre.get('serialGenre'))
        // const results = await query.find()
        console.log(results);
        
        setGenre(results[0])
      }
      catch(e){
       console.log(e); 
      }
    
    }

    return <GenreContext.Provider value={{ genre, fetchMovieGenres, fetchSerialGenres}}>
        {children}
    </GenreContext.Provider>
}

export const useGenreContext = () => {

    return useContext(GenreContext)
}