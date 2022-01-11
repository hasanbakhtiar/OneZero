import React, { Component } from 'react'
import './sass/style.css';

export class Mode extends Component {
    constructor(props){
        super(props);
        this.light = this.light.bind(this);
        this.dark = this.dark.bind(this);
        this.state={
            mode:'box'
        }
    }
    dark(){
        this.setState({
            mode: "box green"
        })
    }
    light(){
        this.setState({
            mode: "box red"
        })
    }
    render() {
        return (
            <div className='container'>
                <div  className={this.state.mode}></div>
                <div className="button mt-3">
                    <button onClick={this.light} className="btn btn-dark me-3">light</button>
                    <button onClick={this.dark} className="btn btn-dark">dark</button>
                </div>
    
            </div>
        )
    }
}

export default Mode
