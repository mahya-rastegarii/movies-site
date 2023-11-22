
import { createContext, useContext, useState } from "react";

const DataFetchContext= createContext()


export const DataFetchProvider = ({children}) => {

   
    const[allData, setAllData]= useState()
    // const [count, setCount] = useState(0)
    const[data, setData]= useState()
    // const [popularMovies, setPopularMovies]= useState()
    // const [popularSeries, setPopularSeries]= useState()
    // const[NewMovies, setNewMovies] = useState()
    // const[NewSeries, setNewSeries] = useState()
    

    return <DataFetchContext.Provider value={{
        allData, setAllData, 
        data, setData, 
        // count, setCount, 
        // popular, setPopular,
        // NewMovies, setNewMovies,
        // NewSeries, setNewSeries,
        // popularMovies,setPopularMovies ,
        // popularSeries, setPopularSeries
          }}>
        {children}
    </DataFetchContext.Provider>
}

export const useDataFetchContext = () => {

    return useContext(DataFetchContext)
}