import React from "react";
import '../App.css'; 
import { celtics } from "../nba_data";


function Celtics(){
    return(
        <div className = "Celtics">
            <h1>{celtics.name}</h1>
            <h3>Titles: {celtics.titles}</h3>
            <h4>Celtic history:</h4>
            <p>{celtics.description}</p>
            <img src = {celtics.image} alt = "Celtic history"></img>
            
        </div>
    )
}

export default Celtics;