import React from 'react'
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import './assets/sass/style.css';
import { MovieProvider } from './components/pages/MovieContext';
// https://v5.reactrouter.com/web/api/NavLink
function App(){
    return(
        <MovieProvider>
        <AppRouter/>
        </MovieProvider>
    )
}

ReactDOM.render(<App/>,document.querySelector('#root'));
