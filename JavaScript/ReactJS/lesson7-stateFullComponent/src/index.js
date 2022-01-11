import React from "react";
import ReactDOM from "react-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Mode from './Mode';

// StateFull Component
// const App =()=>{
//   return(
//     <h1></h1>
//   )
// }


// StateLess Component
// class App extends Component{
//   render(){
//     return(
//       <div></div>
//     );
    
//   }
// }

ReactDOM.render(<Mode />,document.querySelector("#root"));