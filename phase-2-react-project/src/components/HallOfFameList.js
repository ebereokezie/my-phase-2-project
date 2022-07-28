import React, {useEffect} from "react";
import HallOfFameCard from "./HallOfFameCard";

function HallOfFameList({hofers, setHofers}){
    
    useEffect(() => {
        fetch("http://localhost:3001/hofers")
        .then ((data) => data.json())
        .then((data) => setHofers(data))
    }, []);

return (
   <div className="grid">
        
            {hofers.map((hofer)=>{
                 return (<HallOfFameCard key = {hofer.id} hofer ={hofer} />)
                    })}
    </div>

/* <div className="row">
<ul className="column">
    {hofers.map((hofer)=>{
         return (<HallOfFameCard key = {hofer.id} hofer ={hofer} />)
            })}
</ul>
</div> */
)
}

export default HallOfFameList

