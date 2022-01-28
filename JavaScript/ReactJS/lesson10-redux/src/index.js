import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

const baslangicSay = {
    say : 5
}
// REDUCERS
const sebet = createStore((state = baslangicSay, action)=>{
    switch (action.type) {
        case "ARTIM":
    return{
        say: state.say + 1
    } 
    
    case "AZAL":
        return{
            say: state.say - 1
        } 

        case "SIFIRLA":
            return{
                say: 0
            } 
    
        default:
            return state;
    }
})

sebet.subscribe(()=>{
    console.log(sebet.getState());
})

// sebet.dispatch({
//     type: "ARTIM"
// })

// sebet.dispatch({
//     type: "ARTIM"
// })

// sebet.dispatch({
//     type: "SIFIRLA"
// })

// sebet.dispatch({
//     type: "AZAL"
// })


const App=()=>{
    return(
        <h1>Hello</h1>
    )
}




ReactDOM.render(<App />, document.querySelector("#root"));