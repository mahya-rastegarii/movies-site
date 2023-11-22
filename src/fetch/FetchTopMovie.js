
import { useEffect } from "react";
import { useDataFetchContext } from "../Context/DataFetchContext";
import useParse from "../useParse";

  
  
  
  const FetchTopMovie = (type) => {

    const {setAllData}= useDataFetchContext() 
    const [response] = useParse(type)

    console.log(type);
    const TopMovies = async() => {
    
      try{
        response.addAscending('topMovie');
        let queryResult = await response.find();
        let result = []
        await queryResult.filter((item, index) => 
        {
  
           if(item.get("topMovie") > 0){ 
                 
            result.push( {
              id: index,
              name:item.get('name'),
              genre:item.get('genre'),
              pic:item.get('pic')._url,
              director:item.get('director'),
              country:item.get('country'),
              status : item.get('status'),
              tv:item.get('tv'),
              year:item.get('year'),
              rate:item.get('imdbRating'),
              summary:item.get('summary'),
              time:item.get('time')
              })
          
  
              setAllData(result)
                 }
                    }) 
         
        // console.log("data",result)
      }catch (e) {
        console.log(e);
      }
      
     
     }
   
useEffect(()=> {
   TopMovies()
},[response])
      
  }

  export default FetchTopMovie 