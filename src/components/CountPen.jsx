import { useState } from "react"

export function Countpen(){
    const [counter,setCounter] = useState(10);
    const handleChange = (value) => {
        setCounter(counter+value);
    };
    let num = 0;
    return (
        <div className="items">
        <span>Pens: {counter}</span>
        <button className="addPen" onClick={()=>{handleChange(1);num++}}>
          +
        </button>
       <button className="remPen" onClick={()=>{if(counter >= 1){handleChange(-1)}}}>
         -
       </button>
       <span className="totalPens">{num}</span>
     </div>
    )
}