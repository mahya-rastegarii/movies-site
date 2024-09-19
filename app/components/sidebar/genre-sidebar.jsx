

import { GenresData } from "@/app/fetch/genere-data";
import PostType from "../button/postType";
import Button from "../button/button";



function GenreSidebar() {

  
 
    return (
        <div className=" w-full  flex flex-col justify-center items-center shadow-md bg-color-3 rounded-md p-3 space-y-4 font-semibold text-sm  text-color-1 ml-2">
       
          <div className=" w-7/12 ">
            <PostType />
          </div>
          <span className=" font-semibold text-sm  text-color-1"> ژانر ها </span>
    
        
            <>
              <div className=" w-full shadow-md flex justify-between items-center p-2 bg-color-2 rounded-xl  hover:bg-color-hover cursor-pointer custom-transition delay-150">
                <div className=" w-full " >
                  <span>همه</span>
                </div>
                {/* <span>{countAll}</span> */}
              </div>
    
              <div className="w-full grid gap-3 justify-items-center grid-cols-1 md:grid-cols-2">
                {GenresData?.map((genre, index) => (
                  // <div className=" w-full shadow-md  flex justify-center items-center p-2 bg-color-2 rounded-xl  hover:bg-color-hover cursor-pointer custom-transition delay-150" onClick={getDataGenre} key={index}>
                  <Button
                    width="w-full"
                    // active={activeGenre === genre}
                    bgColor=" bg-color-2"
                    // clicked={getDataGenre}
                    key={index}
                  >
                    {genre}
                  </Button>
    
                  // </div>
                ))}
              </div>
            </>
        
        </div>
      );
}

export default GenreSidebar