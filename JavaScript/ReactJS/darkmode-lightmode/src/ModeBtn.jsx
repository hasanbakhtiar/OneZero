import React from 'react'

const ModeBtn = ({color, setColor}) => {
    const swicthColor =()=>{
        setColor(color === "light" ? "dark" :"light")
    }
  return (
    <div>
        <button onClick={swicthColor}>mode</button>
    </div>
  )
}

export default ModeBtn