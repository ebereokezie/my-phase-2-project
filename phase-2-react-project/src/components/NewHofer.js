import React,  {useState} from "react";

function NewHofer({setHofer}){
    const [name, setName] = useState("")
    const [image, setImage] = useState("")

    function submitNewHofer(e){
        e.preventDefault()
        const newGear = {name, image}

        fetch("http://localhost:3001/hofers", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newGear),
        })
        .then ((data) => data.json())
        .then ((data) => setHofer(oldGear => ([...oldGear, data])))


        }

    return(
        <div className="Home">
            <h2>𝘚𝘩𝘰𝘸 𝘶𝘴 𝘺𝘰𝘶𝘳 𝘏𝘢𝘭𝘭 𝘖𝘧 𝘍𝘢𝘮𝘦 𝘎𝘦𝘢𝘳</h2>
            <form onSubmit = {submitNewHofer} className="submit-new-gear">
                <input type="text" name ="name" placeholder = "Team Name" onChange ={e => setName(e.target.value)} />
                <input type="text" name ="image" placeholder = "Team Gear Picture" onChange ={e => setImage(e.target.value)} />
                <button type="submit">Add Picture of Gear</button>
            </form>
        </div>
    )
}

export default NewHofer;