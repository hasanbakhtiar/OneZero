import React from 'react';
import ReactDOM from 'react-dom';
import { CartProvider } from 'react-use-cart';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Basket from './components/Basket';
import Products from './components/Products';



const App =()=>{
    return(
        <CartProvider>
        <Products />
        <Basket />
        </CartProvider>
    )
}
ReactDOM.render(<App/>,document.querySelector("#root"));