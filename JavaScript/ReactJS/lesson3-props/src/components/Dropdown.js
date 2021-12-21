import React, { Component } from 'react'

class Dropdown extends Component {
    render() {
        return (
            <div>
                <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle active" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                {this.props.brand}
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a className="dropdown-item" href="#">{this.props.model1}</a></li>
                <li><a className="dropdown-item" href="#">{this.props.model2}</a></li>

              </ul>
            </li>
            </div>
        )
    }
}

export default Dropdown
