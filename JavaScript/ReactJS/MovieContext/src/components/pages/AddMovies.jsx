import React,{ useState, useContext } from 'react';
import { MovieContext } from './MovieContext';

const AddMovies = () => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
  const [movies,setMovies] = useContext(MovieContext);

  const updateName =(e)=>{
      setName(e.target.value);
  }

  const updatePrice =(e)=>{
    setPrice(e.target.value);
}

const addMovie =(e)=>{
    e.preventDefault();
    setMovies(prevMovies => [...prevMovies,{name:name, price:price}])
}

  return (
    <form onSubmit={addMovie}>
    <div className="mb-3 col-6">
      <label htmlFor="exampleInputEmail1" className="form-label">Movie Name</label>
      <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
      onChange={updateName} value={name} />
      <div id="emailHelp" className="form-text">Add movie name</div>
    </div>
    <div className="mb-3 col-6">
      <label htmlFor="exampleInputPassword1" className="form-label">Movie Price</label>
      <input type="text" className="form-control" id="exampleInputPassword1" 
      onChange={updatePrice} value={price} />
      <div id="emailHelp" className="form-text">Add movie price</div>

    </div>
   
    <button type="submit" className="btn btn-primary">Submit</button>
  </form>
  )
}

export default AddMovies