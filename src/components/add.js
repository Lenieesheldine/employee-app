import App from "../App";
import { useState } from "react";
function Add(props){
    const [name,setName] = useState('');
    const [surname,setSurname] = useState('');
    const [idnumber,setIdnumber] = useState('');
    const [posistion,setPosistion] = useState('');


    const addEmployeeName= (()=>{
         props.add(name,surname,idnumber,posistion);
    })
   
   
   
    
    return(
        <div>
            <h1>Employee Details </h1>
            <input type="text" placeholder="employee name" onChange={(event)=> setName (event.target.value)}/>
            <input type="text" placeholder="employee surname" onChange={(event)=> setSurname (event.target.value)}/>
            <input type="text" placeholder="employee idnumber" onChange={(event)=> setIdnumber (event.target.value)}/>
            <input type="text" placeholder="employee posistion" onChange={(event)=> setPosistion (event.target.value)}/>
        <button onClick={addEmployeeName}>Add</button>
        
        </div>
       

    )
}
export default Add;