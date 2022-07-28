import React from "react";
import '../App.css'; 
import { celtics } from "../nba_data";


function Celtics(){
    return(
        <div className = "Celtics">
            <h1>{celtics.name}</h1>
            <h3>Titles: {celtics.titles}</h3>
            <img src = {celtics.image} alt = "Celtic history"></img>
            <h4>Celtic history:</h4>
            <p className = "history">{celtics.description}</p>
            
            
        </div>
    )
}

export default Celtics;