import React,{Component} from "react";
import ReactDOM from "react-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'; import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import AppRouter from "./routers/AppRouter";
import './assets/sass/style.css';





class App extends Component{
render(){
  return(
    <AppRouter />
  )
}
}


ReactDOM.render(<App />,document.querySelector("#root"));