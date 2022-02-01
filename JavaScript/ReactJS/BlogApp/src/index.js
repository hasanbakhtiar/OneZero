import React from "react";
import ReactDOM from "react-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'; import 'bootstrap/dist/js/bootstrap.bundle';
import { combineReducers, createStore } from "redux";

const blogState=[];
const blogsReducer = (state=blogState, action)=>{
    switch(action.type){
        case "ADD_BLOG":
            return [

            ]
        default:
        return state    
    }
}


const store = createStore(
    combineReducers({
        blog:blogsReducer
    })
)



const App =()=>{
    return(
        <h1>Hello</h1>
    )
}





ReactDOM.render(<App />,document.querySelector("#root"));