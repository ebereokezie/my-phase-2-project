import React, {useState} from "react";
import HallofFameList from "./HallOfFameList"
import NewHofer from "./NewHofer";

function HallOfFame(){

const [hofers, setHofers] = useState([])
return(
    <div>
        <NewHofer setHofer={setHofers} />
        <HallofFameList hofers = {hofers} setHofers = {setHofers}/>
    </div>
)


}

export default HallOfFame