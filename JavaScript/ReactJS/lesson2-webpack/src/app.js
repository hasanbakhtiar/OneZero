import React from "react";
import ReactDOM from "react-dom";
import './sass/style.scss';
import img from './img/snow.jpg'



class App extends React.Component{
    render(){
        return(
            <div>
                <h1>Hello</h1>
                <img src={img} alt="err" width="300" />
            </div>
        )
    }
}
ReactDOM.render(<App />,document.querySelector("#root"));