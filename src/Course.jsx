import { useState,useEffect } from 'react';

function course(sasuke){
    
    const [kill,setkill]= useState(false) 
    const[kp,setkp]=useState(1)

    

    return(
       <div className="sasuke">
            <img src={sasuke.image} alt="" />
            <h1>{sasuke.name}</h1>
            <p>{sasuke.skill}</p>
            <button onClick={()=>killed()} onDoubleClick={()=>sasuke.delete(event)}>KILL ITACHI</button>
            <p>{kp}% {kill ? "Killed" : "Not Yet"}</p>
        </div>
    );
        function killed() {
            let a=kp;
              setkp(a*2);
            if(a>=50){
              setkp(100)
              setkill(true);
            }
        }
        
}
export default course
