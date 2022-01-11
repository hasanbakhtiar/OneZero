import React,{useState} from 'react'

const App = (props) => {
    const [deyer, hadise] = useState(props.deyer);
    // const azaltDeyer=()=>{
    //     if (deyer > 0) {
    //          hadise(deyer-1)
    //     }
    // }
    return (
        <>
        <div className='container'>
            
            <h4>u clicked:{deyer}</h4>
            {/* <button onClick={azaltDeyer} className='btn btn-danger me-3'>-1</button> */}
            <button onClick={()=>{if (deyer > 0) {hadise(deyer-1)}}} className='btn btn-danger me-3'>-1</button>
            <button onClick={()=> hadise(deyer+1)} className='btn btn-success'>+1</button>
            <button onClick={()=>hadise(deyer * 0)} className='btn btn-warning ms-3'>reset</button>
        </div>
        </>
    )
}

App.defaultProps={
    deyer:0
}

export default App
