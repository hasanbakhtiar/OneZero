import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './assets/sass/style.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Header from './components/Header'
// import img from '././assets/img/snow.jpg'





class App extends Component{
  render(){
    return(
     <Header />
    )
  }
}



ReactDOM.render(<App />, document.querySelector("#root"));