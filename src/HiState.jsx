import React, { useState } from 'react'

const HiState = () => {
    const [count, setCount] = useState(0)


    const resetValue = () => {
        setCount(0)
    }

    const increaseValue = () => {
        setCount(count + 1)
    }

    const decreasValue = () => {
        setCount(count - 1)
    }


    const [text, setText] = useState("")
    const [name, setName] = useState("")

    const handleText = (event) => {
        setText(event.target.value)
    }


  let  my = document.getElementById('lpo')
    const handleGreet = () => {
        setName(text)
        setText("")

        my.style.visibility = 'hidden'
    }
    return (
        <div>
            {/* <p> {count} </p>
        <button onClick={increaseValue}>increase</button>


        <br /><br /><br />

        <p> {text} </p>
        <input type="text" onChange={handleText} /> */}

            <br /><br />
            <div id='lpo' className='lol' style={{ textAlign: 'center', }} >
                <label htmlFor="">Enter your name:</label>
                <input  type="text" value={text} onChange={handleText} />
                <br /> <br />
                <button onClick={handleGreet} >Greet Me</button>
            </div>

            <div style={{backgroundColor:'yellow', color:'black', width:'fit-content', padding:'10px 20px' , textAlign:'center'}} >
                <p>HELLO {name}</p>
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