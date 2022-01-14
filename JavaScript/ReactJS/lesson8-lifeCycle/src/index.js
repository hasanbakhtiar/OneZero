import React,{useState,useEffect} from 'react';
import ReactDOM from 'react-dom';




const CounterFull=(props)=>{
    
    const [count, setCount] = useState(props.count);

    useEffect(
        ()=>{
            console.log('useEffect running...');
        }
        ,[])

    return(
        <>
        <h1>U cliked:{count}</h1>
        <button onClick={()=>{setCount(count+1)}}>+1</button>
        </>
    )
}
CounterFull.defaultProps={
    count:0
}

// class Counter extends React.Component{
//     constructor(props){
//         super(props);
//         this.addCount = this.addCount.bind(this);
//         console.log('constructor running...');
//         this.state={
//             count:0
//         }
//     }
//     addCount(){
//         this.setState({
//             count:this.state.count + 1
//         })
//     }

//     componentDidMount(){
//         console.log('componentDidMount running...');
//         document.querySelector('p').innerHTML = "App Start";
        
//         // setTimeout(() => {
//         //     alert('Hello');
//         // }, 2000);

//     }

//     componentDidUpdate(){
//                 console.log('app update');
//                 document.querySelectorAll('button')[1].style.background = 'red';
//     }
    
//     render(){
//         return(
//             <>
//             <p></p>
//             <h1>u cliked:{this.state.count}</h1>
//             <button onClick={this.addCount}>+1</button>
//             <button>Update</button>
//             </>
//         )
//     }
// }



// const App =()=>{
//     return(
//         <h1>Hello</h1>
//     )
// }

ReactDOM.render(<CounterFull />, document.querySelector('#root'));