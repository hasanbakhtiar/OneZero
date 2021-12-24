import React,{Component} from "react";
import ReactDOM from "react-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'; import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import './assets/sass/style.css';
import Navbar from "./components/Navbar/Navbar";
import CardSection from "./components/Sections/CardSection";
import Slider from "./components/Sections/Slider";



class App extends Component{
render(){
  return(
    <div>
      <Navbar />
      <Slider />
      <CardSection />
    </div>
  )
}
}

ReactDOM.render(<App />,document.querySelector("#root"));