import React from 'react';
import Filter from './Filter';
import MovieList from './MovieList';
import { useState } from 'react';
import {MoviesData} from './MoviesData';


function Home(props) {
    
    const [movies,setMovies] = useState(MoviesData);
    const [keyword,setKeyword] = useState("");
    const [newrate,setNewrate] = useState(0);
    const [newdescr] = useState(false);
    const [descrip,setDescrip] = useState("");


    const setdescription = (description) => {
      setDescrip(description);
  
     }


  const setdescr = (newdescr) => {
    (newdescr) ? props.history.push('/Description') : <h1>gh</h1>;

   }
  
    const search = (text) => {
     setKeyword(text);
    }
   
    const setrate = (rate) => {
     setNewrate(rate);
    }

   
    const addMovie = (movie) => {
     setMovies(movies.concat(movie));
    }
   
return (

    <div className="container">
       
    <Filter search={search} setrate={setrate} newrate={newrate}  />
           <MovieList 
           newdescr={newdescr}
           setdescr={setdescr}
           setdescription={setdescription}

           addMovie={addMovie}
           movies={movies.filter(movie => 
            movie.Rate >= newrate  &&
            movie.title.toLowerCase().includes(keyword.toLowerCase().trim()))}
           />
           {setdescr}
          
         </div>

);

}


export default Home;