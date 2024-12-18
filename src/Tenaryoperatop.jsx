import React, { useState } from 'react'
import './index.css'


const Tenaryoperatop = () => {

    let content = " Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt numquam veritatis accusantium. Exercitationem numquam rerum, cum, animi ipsa culpa placeat tempore neque, veniam architecto quaerat. Ea, obcaecati. Vitae, delectus dignissimos. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati perspiciatis ipsa sit aut blanditiis! Consequatur, ad. Commodi dolor itaque eligendi, quas consequatur maxime voluptatibus optio, error quod consectetur quo. Temporibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat ratione nostrum impedit magni voluptate voluptas odit, sint praesentium atque neque. Doloremque ipsa, voluptatibus dolorem soluta laborum sapiente ab maiores vero. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt quo dolore consequatur nisi minima cum ratione, quisquam aliquid placeat nulla veniam sunt, et maxime, dolorem consequuntur doloribus. Repudiandae, dolorum quia. "
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