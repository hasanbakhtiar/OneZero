import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import ModeBtn from './ModeBtn';
import ModeTop from './ModeTop';
import './sass/style.css';

const App = () => {

    const [mode, setMode] = useState('light');
    useEffect(()=>{
        document.body.className = mode;
    },[mode])
    
  return (
    <div>
        <ModeTop color={mode} />
        <ModeBtn color={mode} setColor={setMode}/>
    </div>
  )
}

ReactDOM.render(<App/>,document.querySelector('#root'));