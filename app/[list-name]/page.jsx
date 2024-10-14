import MovieBox from "../components/box/movie-box";
// import AdvancedSearchBox from "../components/search/advanced-search-box";
import Container from "../components/searchBox-sidebar/container";
import { MoviesData } from "../fetch/movies-data";
// import GenreSidebar from "../components/sidebar/genre-sidebar";


export default function List() {

       const movies = MoviesData

    return (
      <>
    
     
            
     <Container>
       <div className="w-full px-4 min-h-screen  lg:w-10/12 flex flex-col justify-center items-center space-y-16">
         {
           movies?.map((data) => <MovieBox key={data.id} data={data} />)
        }
       </div>
     </Container>
    </>
    );
  }
  