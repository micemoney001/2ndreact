import React, { useState } from 'react'

const Conditionalstatement = () => {
    const [name, setName] = useState("")
    const [Logedin, setLogedin] = useState(true)

    let loo
    if (Logedin == false) {
        loo = 'LogIn'
    }
    else {
        loo = 'Logout'
    }

    function handleloo() {
        setLogedin(!Logedin)
        setLogedin(name)
        setName("")
    }

    return (
        <div style={{ backgroundColor: 'orange', width: 'fit-content', padding: '10px 20px', margin: '0px auto', marginTop: '10px', color: 'white' }}>
            <h1>Login Status App</h1>
            <input id='op' type="text" value={name} onChange={(event) => setName(event.target.value)} />
            <button onClick={handleloo}>
                {loo}
            </button>
        </div>
    )
}

export default Conditionalstatement