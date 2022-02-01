import React,{useEffect} from "react";
import ReactDOM from "react-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'; import 'bootstrap/dist/js/bootstrap.bundle';
import data from "./data";
import Aos from 'aos';
import 'aos/dist/aos.css';



const Card =(props)=>{
  useEffect(()=>{
    Aos.init({duration:2000,once: true});
  },[])
  return(<div data-aos="fade-up"  data-aos-once="false" className="card col-4 bg-dark text-light mt-3">
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">{props.text}</p>
    <p className="card-text">{props.desc}</p>
  </div>
</div>)
}


const App =()=>{
  return (<div style={{height:"200vh"}}>
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