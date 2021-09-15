import React,{useState} from 'react';

import CreateMovie from './components/CreateMovie';
import ListAll from './components/ListAll';
import UpdateMovie from "./components/UpdateMovie";


function App() 
{
  const [movies, setMovies] = useState([]);
  const [currentMovie, setCurrentMovie] = useState({});

  return (
    <div className="container-fluid">
        <CreateMovie movies={movies}  setMovies={setMovies}/>
        <UpdateMovie currentMovie={currentMovie} setCurrentMovie={setCurrentMovie} 
         movies={movies}  setMovies={setMovies} />
        <ListAll currentMovie={currentMovie} setCurrentMovie={setCurrentMovie} 
         movies={movies}  setMovies={setMovies} />
    </div>
  );
}

export default App; 
