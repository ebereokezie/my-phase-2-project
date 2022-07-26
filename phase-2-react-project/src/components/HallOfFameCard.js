import React from "react";
import '../App.css'; 

function HallOfFameCard({hofer}){

    return(
        <div className="row">
            <li className="column">
                <img src = {hofer.image} alt = {hofer.name} />
                <h4>{hofer.name}</h4>
            </li>
        </div>
    )
}

export default HallOfFameCard