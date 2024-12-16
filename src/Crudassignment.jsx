import React, { useState } from 'react'

const Crudassignment = () => {
    const allp = [
        {
            "id": "1",
            "type": "FullTime",
            "title": "Senior React Developer",
            "description": "Lorem ipsum, dolor sit djsijeisdji jjejiv  amet conse ctetur adipisicing elit. Est ani mi repudiandae officia eligendi error doloribus. Ratione aliquam beatae aspernatur aut. Labore as pernatur magnam consectetur exerc itationem culpa quia nobis odit repellendus!",
            "salary": "$70K - $80K",
            "location": "Boston, MA"
        },
        {
            "id": "2",
            "type": "Remote",
            "title": "Front end Engineer (React)",
            "description": "Lorem ipsum, dolor sit isdjijii jasdji jisjd amet conse ctetur adipisicing elit. Est ani mi repudiandae officia eligendi error doloribus. Ratione aliquam beatae aspernatur aut. Labore as pernatur magnam consectetur exerc itationem culpa quia nobis odit repellendus!",
            "salary": "$70K - $80K",
            "location": "Miami, FL"
        },
        {
            "id": "3",
            "type": "Part Time",
            "title": "Back end Engineer (Node Js)",
            "description": "Lorem ipsum, dolor sit amet sdiji jiasij ia conse ctetur adipisicing elit. Est ani mi repudiandae officia eligendi error doloribus. Ratione aliquam beatae aspernatur aut. Labore as pernatur magnam consectetur exerc itationem culpa quia nobis odit repellendus!",
            "salary": "$70K - $80K",
            "location": "London, UK"
        }
    ]
    // const ListOfName = ["LIST OF NAMES", "Mayor", "Fisayo", "Kehinde", "Bolanle"]
    // const [text, setText] = useState("")

    // const [NewList, setNewListt] = useState(ListOfName)
    // const [newName, setNewName] = useState("")

    const [newcourseData, setNewcourse] = useState(allp)


    // const handlenewName = () => {
    //     if (newName !== "") {
    //         setNewListt([...NewList, newName])
    //         setNewName("")
    //     }
        
    // }
    // const deletebtn = (kilo) => {
    //     const newlistAfterDel = NewList.filter((item, major) => major !== kilo)
    //     setNewListt(newlistAfterDel)
    // }
    const deletecrude = (miofo) => {
        const newdelete = newcourseData.filter((iuk, mafo) => mafo !== miofo)
        setNewcourse(newdelete)
    }

    return (
        <div >
            {/* <ul>
                {
                    NewList.map((eachName, mayor) => (
                        <li key={mayor}>{eachName}
                            <button className='boton' onClick={() => deletebtn(mayor)}>Delete</button>
                        </li>
                    ))
                }
            </ul> */}
            <ul className='uouo'>
                {
                    newcourseData.map((loi, koko) => (
                        <li className='kuku' key={koko}>
                            {loi.type} <br /> <br />
                            {loi.title} <br />
                            {loi.description} <br />
                            {loi.salary} <br />
                            <div className='lala' >
                                <p>{loi.location} </p>
                                <button className='last' onClick={() => deletecrude(koko)}>Read More</button>
                            </div>

                        </li>
                    ))
                }
            </ul>

        </div>
    )
}

export default Crudassignment