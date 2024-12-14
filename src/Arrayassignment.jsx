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
    },
    {
        photo: i,
        Quote: "DOUBLE QOTE",
        TEXT1: "HTML compatibility:",
        TEXT2: "HTML compatibility: When working with HTML attributes that require double quotes, like href or src, using double quotes in JavaScript strings can make it easier to integrate your code with HTML."
    },
    {
        photo:ii,
        Quote: "SINGLE QUOTE",
        TEXT1: "Character clarity:",
        TEXT2: " Single quotes make it clearer to differentiate between quotes used within a string and <br> the string itself. For example, if you want to include a  quote within a string, you can easily use single  quotes without the need for escaping."
    },
    {
        photo:iii,
        Quote: "BACKSTICK QUOTE",
        TEXT1: "String interpolation:",
        TEXT2: " With backtick quotes,  you can directly embed variables and expressions  within a string using ${}, making string concatenation more concise."
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