import React, { Component } from 'react'
import img1 from '../../assets/img/img1.jpg';

export class Card extends Component {
    render() {
        return (
        <div className="card col-12 col-md-3" >
        <img src={img1} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <p href="#" className="btn btn-primary">Go somewhere</p>
        </div>
      </div>
        )
    }
}

export default Card
