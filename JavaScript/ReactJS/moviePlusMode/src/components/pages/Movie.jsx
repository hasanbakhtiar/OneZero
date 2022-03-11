import React from 'react'

const Movie = ({ad,shekil,qiymet}) => {
  return (
    <div className="card col-12 col-sm-12 col-md-4" >
    <img src={shekil} className="card-img-top" alt="..." />
    <div className="card-body">
      <h5 className="card-title">{ad}</h5>
      <p>{qiymet}</p>
    </div>
  </div>
  )
}



// const Movie = () => {
//     return (
//       <div className="card" style={{width: '18rem'}}>
//       <img src={props.shekil} className="card-img-top" alt="..." />
//       <div className="card-body">
//         <h5 className="card-title">{props.ad}</h5>
//       </div>
//     </div>
//     )
//   }

export default Movie