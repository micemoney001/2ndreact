import React, { useState } from 'react'
import './index.css'


const Tenaryoperatop = () => {

    let content = "maowa mayowa mayowa mayowa mayowa"
    const [mode, setMode] = useState(true)

    function handleMode() {
        setMode(!mode)
    }
    return (
        <div className='ingeneral'>
            <div className={mode ? 'light' : 'dark'}>
                <p>
                    {content}
                </p>
                <button onClick={handleMode} >{mode? 'Dark Mode': 'Light Mode'}</button>
            </div>
        </div>
    )
}

export default Tenaryoperatop