import React from "react";
import '../App.css'; 
import { celtics } from "../nba_data";


function Celtics(){
    return(
        <div className = "Celtics">
            <h1>{celtics.name}</h1>
            <h2>𝕿𝖎𝖙𝖑𝖊𝖘: {celtics.titles} 🏆</h2>
            <img className = "componentimg" src = {celtics.image} alt = "Celtic history"></img>
            <h2>𝕮𝖊𝖑𝖙𝖎𝖈𝖘:</h2>
            <p className = "history">{celtics.description}</p>
            
            
        </div>
    )
}

export default Celtics;