import React,{useState} from 'react'
import Movie from './Movie'
import intertellarImg from '../../assets/img/interstellar.png';
import inceptionImg from '../../assets/img/inceotion.png';
import gothamImg from '../../assets/img/gotham.jfif';
import batmanImg from '../../assets/img/batman.jpg';
import kvpImg from '../../assets/img/kvp.jpg';

const MovieList = () => {
  const [movies, setMovies] = useState([
            {
              name: 'Intertellar',
              img: intertellarImg,
              price:"$10",
              id: 1216341
            },
            {
              name: 'Inception',
              img: inceptionImg,
              price:"$10",
              id: 765621
            },
            {
              name: 'Gotham',
              img: gothamImg,
              price:"$11",
              id: 1312312
            },
            {
              name: 'Batman',
              img: batmanImg,
              price:"$15",
              id: 1324432
            },
            {
              name: 'KVP',
              img: kvpImg,
              price:"$20",
              id: 127125
            }
  ]);
  return (
    <div>
      <h1 className='text-center mb-5'>Movie List</h1>
      <div className="row">
        {movies.map(film=>(
        
        <Movie ad={film.name} shekil={film.img} qiymet={film.price}/>
         
        ))}
        </div>
    </div>
  )
}

export default MovieList