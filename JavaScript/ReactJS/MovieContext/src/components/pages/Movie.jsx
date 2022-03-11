import React from 'react'

const Movie = ({ad,qiymet}) => {
  return (
    <div className="card col-12 col-sm-12 col-md-4" >
    {/* <img src={shekil} className="card-img-top" alt="..." /> */}
    <div className="card-body">
      <h5 className="card-title">{ad}</h5>
      <p>${qiymet}</p>
    </div>
  </div>
  )
}





export default Movie