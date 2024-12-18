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
        },
        {
            "id": "4",
            "type": "On Site",
            "title": "React Js Developer",
            "description": "Lorem ipsum, dolor sit amet dhsuauhu usuhu huahsuh uuahs conse ctetur adipisicing elit. Est ani mi repudiandae officia eligendi error doloribus. Ratione aliquam beatae aspernatur aut. Labore as pernatur magnam consectetur exerc itationem culpa quia nobis odit repellendus!",
            "salary": "$60K - $70K",
            "location": "Brooklyn, NY"
        },
        {
            "id": "5",
            "type": "Full Time",
            "title": "Full Stack React Developer",
            "description": "Lorem dsau uhuhsauehu huh ipsum, dolor sit amet conse ctetur adipisicing elit. Est ani mi repudiandae officia eligendi error doloribus. Ratione aliquam beatae aspernatur aut. Labore as pernatur magnam consectetur exerc itationem culpa quia nobis odit repellendus!",
            "salary": "$90K - $100K",
            "location": "Atlanta, GA"
        },
        {
            "id": "6",
            "type": "Part Time",
            "title": "React Native Developer",
            "description": " dsih ihisdh aishih iaishih a Lorem ipsum, dolor sit amet conse ctetur adipisicing elit. Est ani mi repudiandae officia eligendi error doloribus. Ratione aliquam beatae aspernatur aut. Labore as pernatur magnam consectetur exerc itationem culpa quia nobis odit repellendus!",
            "salary": "$100K - $110K",
            "location": "Portland, OR"
        },
        {
            "id": "7",
            "type": "On-Site",
            "title": "Cyber Security",
            "description": "Lorem ipsum, dolor sit isdjijii jasdji jisjd amet conse ctetur adipisicing elit. Est ani mi repudiandae officia eligendi error doloribus. Ratione aliquam beatae aspernatur aut. Labore as pernatur magnam consectetur exerc itationem culpa quia nobis odit repellendus!",
            "salary": "$90K - $250K",
            "location": "Miami, FL"
        },
        {
            "id": "8",
            "type": "Hybrid",
            "title": "Back end Engineer (Php , Laravel)",
            "description": "Lorem ipsum, dolor sit amet sdiji jiasij ia conse ctetur adipisicing elit. Est ani mi repudiandae officia eligendi error doloribus. Ratione aliquam beatae aspernatur aut. Labore as pernatur magnam consectetur exerc itationem culpa quia nobis odit repellendus!",
            "salary": "$100K - $150K",
            "location": "London, UK"
        },
        {
            "id": "9",
            "type": "Remote",
            "title": "Front End Dev (CSS 3, High Bootstrap , Tailwind CSS)",
            "description": "Lorem ipsum, dolor sit amet sdiji jiasij ia conse ctetur adipisicing elit. Est ani mi repudiandae officia eligendi error doloribus. Ratione aliquam beatae aspernatur aut. Labore as pernatur magnam consectetur exerc itationem culpa quia nobis odit repellendus!",
            "salary": "$5K - $10K",
            "location": "Bag End, Netherland"
        },
        {
            "id": "10",
            "type": "Full Time",
            "title": "UI/UX Dev",
            "description": "Lorem ipsum, dolor sit amet sdiji jiasij ia conse ctetur adipisicing elit. Est ani mi repudiandae officia eligendi error doloribus. Ratione aliquam beatae aspernatur aut. Labore as pernatur magnam consectetur exerc itationem culpa quia nobis odit repellendus!",
            "salary": "$10K - $50K",
            "location": "Washintong, USA"
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


    const [newjob, setNewJob] = useState({
        type: "",
        title: "",
        description: "",
        salary: "",
        location: ""
    })
    const addNewJob = () => {
        
        

        let checkit=false 
        if(newjob.title==""){
            checkit=true
        }
        else{
            checkit=false
            setNewcourse([...newcourseData, newjob])
            setNewJob({
                type: "",
                title: "",
                description: "",
                salary: "",
                location: ""
            })

        }
    }

    const editJob = (index) => {
        const afteredit = newcourseData.map((current, sap) => (
            sap == index ? { ...current, ...newjob }: current
        ))
        setNewcourse(afteredit)

        setNewJob({
            type: "",
            title: "",
            description: "",
            salary: "",
            location: ""
        })
    }

    return (
        <div className='olopa'>
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
                                <button className='last' onClick={()=>editJob(koko)}>edit</button>
                                <button className='last' onClick={() => deletecrude(koko)}>Delete</button>
                            </div>

                        </li>
                    ))
                }

            </ul>
            <div className='okobo'>
                <label htmlFor="">Job-Type:</label>
                <input
                    type="text"
                    value={newjob.type}
                    onChange={(lll) => setNewJob({ ...newjob, type: lll.target.value })}
                /> <br /><br />



                <label htmlFor="">Job-Tittle</label>
                <input
                    type="text"
                    value={newjob.title}
                    onChange={(lll) => setNewJob({ ...newjob, title: lll.target.value })}
                /> <br /><br />


                <label htmlFor="">Job-Description</label>
                <textarea name="" className='qq' value={newjob.description}
                    onChange={(lll) => setNewJob({ ...newjob, description: lll.target.value })} id=""></textarea>
                {/* <input
                    type="text"
                    
                /> */}
                <br /><br /> 


                <label htmlFor="">Job-salary</label>
                <input
                    type="text"
                    value={newjob.salary}
                    onChange={(lll) => setNewJob({ ...newjob, salary: lll.target.value })}
                /> <br /><br />


                <label htmlFor="">Job-location</label>
                <input
                    type="text"
                    value={newjob.location}
                    onChange={(lll) => setNewJob({ ...newjob, location: lll.target.value })}
                /> <br /><br />


                <br />
                <button onClick={addNewJob}>Add job</button>
            </div>



        </div>
    )
}

export default Crudassignment