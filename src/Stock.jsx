import React, { useState } from 'react'

const Stock = () => {





    const [countt, setCount] = useState(0)
    const spa1 = 20;
    let spa
    if (countt > spa1) {
        spa = 'OUT OF STOCK'
        console.log('out of stock')
    }
    else{
        spa='STILL IN STOCK'
    }
    const increaseeValue = () => {
        setCount(countt + 1)
    }

    const decreassValue = () => {
        setCount(countt - 1)
    }
    console.log(countt)


    return (
        <div>
            <div className='neww'>
                <button id='inp' className='ioio'>{countt}</button>
                <br /><br />
                <span id='bu'>{spa}</span>
                <br /><br />
                <button className='bt3' onClick={decreassValue}>Decrease</button>
                <button className='bt2' onClick={increaseeValue}>Increase</button>
                <br />
            </div>
        </div>
    )
}

export default Stock