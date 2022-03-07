import { useState } from "react"

export function Countinkpen(){
    const [counter,setCounter] = useState(78);
    const handleChange = (value) => {
        setCounter(counter+value);
    };
    let num = 0;
    return (
        <div className="items">
        <span>InkPens: {counter}</span>
        <button className="addInkpen" onClick={()=>{handleChange(1);num++}}>
          +
        </button>
       <button className="remInkpen" onClick={()=>{if(counter >= 1){handleChange(-1)}}}>
         -
       </button>
       <span className="totalInkpens">{num}</span>
     </div>
    )
}