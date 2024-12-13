import React from 'react'
import logo from "./assets/react.svg"
const Mayor = ({textt , twoo}) => {
  return (
    <div>
         <div>
            <img src={logo} alt="" />
        </div>
        <h3>{textt}</h3>
        <p>{twoo}</p>
        <button className='bobo'>KNOW MORE</button>
    </div>
  )
}

export default Mayor