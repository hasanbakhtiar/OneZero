import React, { Component } from 'react'

class Nav extends Component {
    render() {
        return (
            <div>
                <nav className=' navbar navbar-dark bg-primary'>
                    <a target="_blank" href={this.props.url} className='ms-5  navbar-brand'> 
                    
                    <i className={this.props.icon}></i>{this.props.title}</a>
                </nav>
            </div>
        )
    }
}

export default Nav
