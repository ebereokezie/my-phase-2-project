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
        <div>
            <h2>Show us your Hall of Fame Gear!</h2>
            <form onSubmit = {submitNewHofer}>
                <input type="text" name ="name" placeholder = "Team Name" onChange ={e => setName(e.target.value)} />
                <input type="text" name ="image" placeholder = "Team Gear Picture" onChange ={e => setImage(e.target.value)} />
            </form>
        </div>
    )
}

export default NewHofer;