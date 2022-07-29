import React from "react";
import '../App.css'; 
import { rockets } from "../nba_data";


function Rockets(){
    return(
        <div className = "Rockets">
            <h1>{rockets.name}</h1>
            <h2>Titles: {rockets.titles}</h2>
            <img className = "componentimg" src = {rockets.image} alt = "Rocket history"></img>
            <h2>Rockets history:</h2>
            <p className="history">{rockets.description}</p>
            
            
        </div>
    )
}

export default Rockets;