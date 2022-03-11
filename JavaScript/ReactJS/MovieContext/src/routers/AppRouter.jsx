import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Header from '../components/Header'
import AddMovies from '../components/pages/AddMovies'
import Contact from '../components/pages/Contact'
import Home from '../components/pages/Home'
import MovieList from '../components/pages/MovieList'
import notFoundPage from '../components/pages/notFoundPage'

const AppRouter = () => {
  return (
    <BrowserRouter>
    <Header/>
      <div className="container">
    <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route path="/movies" component={MovieList}></Route>
            <Route path="/contact" component={Contact}></Route>
            <Route path="/add" component={AddMovies}></Route>
            <Route  component={notFoundPage}></Route>
     
    </Switch>
    </div>
    </BrowserRouter>
  )
}

export default AppRouter