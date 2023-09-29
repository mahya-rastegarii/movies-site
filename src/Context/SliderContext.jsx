

import { createContext, useContext, useState } from "react";

const SliderContext= createContext()


export const SliderProvider = ({children}) => {

   
    const[imageInfo, setImageInfo]= useState({})
    

    return <SliderContext.Provider value={{ imageInfo, setImageInfo }}>
        {children}
    </SliderContext.Provider>
}

export const useSliderContext = () => {

    return useContext(SliderContext)
}