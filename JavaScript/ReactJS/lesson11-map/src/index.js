import React,{Component} from "react";
import ReactDOM from "react-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'; import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import data from "./data";



const Card =(props)=>{
  return(<div className="card col-4 bg-dark text-light mt-3">
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">{props.text}</p>
    <p className="card-text">{props.desc}</p>
  </div>
</div>)
}


const App =()=>{
  return (<div>
    {data.productData.map((item,index)=>{
      return (
        <Card 
        title={item.title}
        text={item.price}
        desc={item.desc}
        key={index}
        />

      )
    })}
  </div>)
}


ReactDOM.render(<App />,document.querySelector("#root"));