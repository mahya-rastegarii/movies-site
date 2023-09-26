
import { createContext, useContext, useState } from "react";

const BackdropContext= createContext()


export const BackdropProvider = ({children}) => {

    const [showMenu, setShowMenu] = useState(false);
    

    return <BackdropContext.Provider value={{ showMenu, setShowMenu }}>
        {children}
    </BackdropContext.Provider>
}

export const useBackdropContext = () => {

    return useContext(BackdropContext)
}