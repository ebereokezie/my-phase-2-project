import React from "react";
import '../App.css'; 
import { lakers } from "../nba_data"
function Lakers(){
    
    return(
        <div className = "Lakers">
            <h1>{lakers.name}</h1>
            <h2>🅣🅘🅣🅛🅔🅢: {lakers.titles} 🏆</h2>
            <img className = "componentimg" src = {lakers.image} alt = "Laker history"></img>
            <h2>🅛🅐🅚🅔🅡🅢 </h2>
            <p className="history">{lakers.description}</p>
            
            
        </div>
    )
}

export default Lakers;