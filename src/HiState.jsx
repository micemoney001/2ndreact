import React, { useState } from 'react'

const HiState = () => {
    const[count , setCount]=useState(0)

    const resetValue=()=>{
        setCount(count == 0 )
    }

    const increaseValue=()=>{
        setCount(count + 1 )
    }

    const decreasValue=()=>{
        setCount(count - 1 )
    }
   

    const[text, setText]=useState("")
    

    const handleText =(event)=>{
        setText(event.target.value)
    }
  return (
    <div>
        {/* <p> {count} </p>
        <button onClick={increaseValue}>increase</button>


        <br /><br /><br />

        <p> {text} </p>
        <input type="text" onChange={handleText} /> */}

        <br /><br />
        <div className='lol' >
        <label htmlFor="">Enter your name:</label>
        <input type="text" onChange={handleText}/>
        <p>HELLO {text}</p>
        </div>
       






        <br /><br /><br />
        <div className='neww'>
        <button className='ioio'>{count}</button>
        <br />
        <button className='bt3' onClick={decreasValue}>Decrease</button>
        <button className='bt2' onClick={increaseValue}>Increase</button> 
        <br />
        <button className='bt' onClick={resetValue}>Reset</button>
        </div>
        
    </div>
    
  )
}

export default HiState