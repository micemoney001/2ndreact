import React from 'react'

const Okay = (jopo) => {
  return (
    <div>
    <div>
        <img className='img' src={jopo.photo} alt="" />
    </div>
    <p>{jopo.Quote}</p>
    <p> {jopo.text1} </p>
    <p> {jopo.text2} </p>
    </div>
  )
}

export default Okay