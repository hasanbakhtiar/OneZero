import React, { Component } from 'react';
import img1 from '../../assets/img/img1.jpg';
import img2 from '../../assets/img/img2.jpg';

export class Slider extends Component {
    render() {
        return (
            <div>
                
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={img1} height="550" className="d-block w-100" alt="err" />
          </div>
          <div className="carousel-item">
            <img src={img2} height="500" className="d-block w-100" alt="err" />
          </div>
          <div className="carousel-item">
            <img src={img1} height="500" className="d-block w-100" alt="err" />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
            </div>
        )
    }
}

export default Slider
