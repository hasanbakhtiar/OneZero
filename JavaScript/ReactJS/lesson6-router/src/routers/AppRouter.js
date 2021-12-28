import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from '../components/Pages/Home';
import About from '../components/Pages/About';
import NotFoundPage from '../components/Pages/NotFoundPage';
import Nav from '../components/Nav';


export class AppRouter extends Component {
    render() {
        return (
    <BrowserRouter >
   
    <div >
      <Nav />
      <div className="container">
      <Switch>
      <Route path="/" exact component={Home}></Route>
      <Route path="/about" component={About}></Route>
      <Route  component={NotFoundPage}></Route>
      </Switch>
      </div>
   
    </div>
  
    </BrowserRouter>
        )
    }
}

export default AppRouter
