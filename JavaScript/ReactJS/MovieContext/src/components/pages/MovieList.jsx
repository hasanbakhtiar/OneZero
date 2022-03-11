import React,{useState,useContext} from 'react'
import Movie from './Movie'
import {MovieContext} from './MovieContext';


const MovieList = () => {
  const [movies,setMovies] = useContext(MovieContext);
  return (
    <div>
      <h1 className='text-center mb-5'>Movie List</h1>
      <div className="row">
        {movies.map(film=>(
        
        <Movie ad={film.name} shekil={film.img} qiymet={film.price} key={film.id}/>
         
        ))}
        </div>
    </div>
  )
}

export default MovieList