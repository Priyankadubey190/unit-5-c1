import { useState } from "react"

export function Countnotebook(){
    const [counter,setCounter] = useState(44);
    const handleChange = (value) => {
        setCounter(counter+value);
    };
    let num = 0;
    return (
        <div className="items">
        <span>Notebooks: {counter}</span>
        <button className="addNotebook" onClick={()=>{handleChange(1);num++}}>
          +
        </button>
       <button className="remNotebook" onClick={()=>{if(counter >= 1){handleChange(-1)}}}>
         -
       </button>
       <span className="totalNotebooks">{num}</span>
     </div>
    )
}