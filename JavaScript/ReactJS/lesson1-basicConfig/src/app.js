const root = document.getElementById('root');

let number = 0;
const addOne =()=>{
    number ++;
    renderApp();
}

const clearOne =()=>{
    if(number > 0){
    number --;
    }
    renderApp();
}



const renderApp =()=>{
    const temp = <div>
        <h1 style={{'color':"red","font-size":"20px"}}>Button Counter</h1>
        <p>{number}</p>
        <button onClick={clearOne}>-1</button>
        <button onClick={addOne}>+1</button>
    </div>

ReactDOM.render(temp,root);

}

renderApp();
