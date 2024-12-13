import React from 'react'

const Formm = () => {
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
        <div id='lpo' className='lol' style={{ textAlign: 'center', }} >
                <label htmlFor="">Enter your name:</label>
                <input  type="text" value={text} onChange={handleText} />
                <br /> <br />
                <button onClick={handleGreet} >Greet Me</button>
            </div>

            <div style={{backgroundColor:'yellow', color:'black', width:'fit-content', padding:'10px 20px' , textAlign:'center'}} >
                <p>HELLO {name}</p>
            </div>
    </div>
  )
}

export default Formm