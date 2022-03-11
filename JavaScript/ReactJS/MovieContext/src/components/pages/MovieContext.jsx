import React,{useState,createContext} from 'react'
import intertellarImg from '../../assets/img/interstellar.png';
import inceptionImg from '../../assets/img/inceotion.png';
import gothamImg from '../../assets/img/gotham.jfif';
import batmanImg from '../../assets/img/batman.jpg';
import kvpImg from '../../assets/img/kvp.jpg';

export const MovieContext = createContext();

export const MovieProvider = props => {
    const [movies, setMovies] = useState([
        {
          name: 'Intertellar',
          img: intertellarImg,
          price:"10",
          id: 1216341
        },
        {
          name: 'Inception',
          img: inceptionImg,
          price:"10",
          id: 765621
        },
        {
          name: 'Gotham',
          img: gothamImg,
          price:"11",
          id: 1312312
        },
        {
          name: 'Batman',
          img: batmanImg,
          price:"15",
          id: 1324432
        },
        {
          name: 'KVP',
          img: kvpImg,
          price:"20",
          id: 127125
        }
]);
  return (
   <MovieContext.Provider value={[movies, setMovies]}>
     {props.children}
   </MovieContext.Provider>
  )
}
