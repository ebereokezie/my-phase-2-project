import React from "react";
import '../App.css'; 
import { lakers } from "../nba_data"
function Lakers(){
    
    return(
        <div className = "Lakers">
            <h1>{lakers.name}</h1>
            <h3>Titles: {lakers.titles}</h3>
            <img src = {lakers.image} alt = "Laker history"></img>
            <h4>Laker history:</h4>
            <p className="history">{lakers.description}</p>
            
            
        </div>
    )
}

export default Lakers;