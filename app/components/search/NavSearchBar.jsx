// import { debounce } from 'lodash';



// import { useState } from "react";
import { FiSearch } from "react-icons/fi";

// import LoadingPage from '../Loading/LoadingPage';
// import { fetchAllCommentMovie } from '../../redux/features/commentSlice';
// import { useNavigate, useParams } from 'react-router-dom';
// import { useDataMovieContext } from '../../Context/DataMovieContext';

const NavSearchBar = () => {
  // const {setMovieInfo} = useDataMovieContext()
  // console.log("searchMovie", searchMovie)
  // const [searchInput, setSearchInput] = useState("");

  // const [data, setData] = useState([]);
  // const [loadingItem, setLoadingItem] = useState(false);

  // const navigate = useNavigate()

  // const handleTypeValue = (e) => {
  //   setSearchInput(e.target.value);
  // };

  //  const handleSearch = (value) => {

  //   dispatch(fetchSearchMovie(value))
  //   console.log("handleSearch", value);
  //  }

  // const debouncedFetch = debounce((value) => {
  // if(value.length >2){
  //   dispatch(fetchSearchMovie(value))
  // };
  // }, 500);

  // const handleDebounce = () => {

  //     debouncedFetch(searchInput);

  //   // setSearchInput('')

  // }

  // useEffect(() => {
  //  setData(searchMovie)
  //  setLoadingItem(loading)
  // //  console.log('data', data);
  // }, [searchMovie, loading])

  return (
    <>
      <div className=" flex  lg:w-full lg:drop-shadow-md lg:bg-color-4 py-1 lg:transition-all px-3 rounded-xl  justify-between items-center  ">
        {" "}
        <input
          className=" w-full focus:placeholder:text-color-3 text-color-1 bg-transparent transition-all outline-none  lg:placeholder:text-slate-500input-search "
          // onKeyUp={handleDebounce}
          // onChange={handleTypeValue}
          // value={searchInput}
          type="text"
          placeholder="جست و جو کنید ..."
        />{" "}
        <FiSearch className=" text-color-2 text-xl" />
      </div>
      {/* <div className="flex lg:hidden">

    <FiSearch className=' mx-6  text-color-2 text-xl'/>
   </div> */}

      {/* {
    searchInput.length > 2  ? (
    
<div className="h-fit  bg-color-3 text-white w-2/12 min-h-fit  flex flex-col  rounded-sm justify-center mt-3 items-center border border-color-1  absolute z-40 space-y-2" >
  
   
      {
        loadingItem ? <div className=' p-1'><LoadingPage/></div> :
       (

        data.length > 0 ? data.slice(0, 3).map((item) => (
         
          <ShowItemNavSearch  item={item} key={item.id} setSearchInput={setSearchInput}/>
         
        
           
          )) : <div className="flex justify-center items-center p-2"><span className=''> جستجو نتیجه ای در بر نداشت</span></div>
       ) 
         
      }
      {

     data > 3 ?  <div className="w-full h-fit p-1 flex justify-center items-center  cursor-pointer hover:bg-color-4">
          نتایج بیشتر
          </div> : null
      }
      
      
    </div> ) : null
   } */}
    </>
  );
};

export default NavSearchBar;
