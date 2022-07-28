import React from "react";
import '../App.css'; 

function HallOfFameCard({hofer}){

    return(
        <div className="grid-item">
            
                <img src = {hofer.image} alt = {hofer.name} />
                <h4>{hofer.name}</h4>
            
        </div>

    )
}

export default HallOfFameCard