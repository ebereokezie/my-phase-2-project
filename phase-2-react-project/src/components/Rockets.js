import React from "react";
import '../App.css'; 
import { rockets } from "../nba_data";


function Rockets(){
    return(
        <div className = "Rockets">
            <h1>{rockets.name}</h1>
            <h3>Titles: {rockets.titles}</h3>
            <h4>Rockets history:</h4>
            <p>{rockets.description}</p>
            <img src = {rockets.image} alt = "Rocket history"></img>
            
        </div>
    )
}

export default Rockets;