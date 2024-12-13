import React from 'react'
import Okay from './Okay'
import i from "./assets/mice 001.png"
import ii from "./assets/mice.png"
import iii from "./assets/babbie.png"
let mice = [
    {
        photo: i,
        Quote: "DOUBLE QOTE",
        TEXT1: "Standard convention:",
        TEXT2: "Using double qoute is a widely accepted convention in javasript and many other programming languages."
    },
    {
        photo:ii,
        Quote: "SINGLE QUOTE",
        TEXT1: "Simplicity:",
        TEXT2: "Single quotes are simpler and require less effort to type compared to double quotes."
    },
    {
        photo:iii,
        Quote: "BACKSTICK QUOTE",
        TEXT1: "Template Literals:",
        TEXT2: "Backstick quotes allow you to create template literals,which make it easier to iclude variables."
    }
]

const Arrayassignment = () => {
    return (
        <div className='ku'>
            {
                mice.map((oo) => (
                    <div>
                        <Okay
                        photo={oo.photo}
                            Quote={oo.Quote}
                            text1={oo.TEXT1}
                            text2={oo.TEXT2}
                        />
                    </div>
                ))
            }
        </div>
    )
}

export default Arrayassignment