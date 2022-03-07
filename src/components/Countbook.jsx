import { useState } from "react"

export function Countbook(){
    const [counter,setCounter] = useState(13);
    const handleChange = (value) => {
        setCounter(counter+value);
    };
    let num = 0;
    return (
        <div className="items">
        <span>Books: {counter}</span>
        <button className="addBook" onClick={()=>{handleChange(1);num++}}>
          +
        </button>
       <button className="remBook" onClick={()=>{if(counter >= 1){handleChange(-1)}}}>
         -
       </button>
       <span className="totalBooks">{num}</span>
     </div>
    )
}