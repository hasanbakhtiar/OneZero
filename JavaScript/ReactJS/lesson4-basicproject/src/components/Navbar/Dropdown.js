import React, { Component } from 'react'

class Dropdown extends Component {
    render() {
        return (
            <div>
                 <li className="nav-item dropdown">
          <p className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </p>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><p className="dropdown-item" href="#">Action</p></li>
            <li><p className="dropdown-item" href="#">Another action</p></li>
            <li><hr className="dropdown-divider"/></li>
            <li><p className="dropdown-item" href="#">Something else here</p></li>
          </ul>
        </li>
            </div>
        )
    }
}

export default Dropdown
