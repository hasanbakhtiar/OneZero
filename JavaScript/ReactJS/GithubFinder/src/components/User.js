import React, { Component } from 'react'

class User extends Component {
    render() {
        const {login,id,avatar_url,html_url} = this.props.user;
        return (
            <div className="card" style={{width: '18rem'}}>
            <img src={avatar_url} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{login}</h5>
              <p className="card-text">{id}</p>
              <a target="_blank" href={html_url} className="btn btn-primary">Go Profile</a>
            </div>
          </div>
        )
    }
}

export default User
