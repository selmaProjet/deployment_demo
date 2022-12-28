import React, { useState } from "react";

function Counter(){

    const [counter, setCounter] = useState(0)

    return(
        <div className="COUNTER">
            <button onClick={() => setCounter(counter -1)}>-</button>
            <span>{counter}</span>
            <button onClick={()=> setCounter(counter + 1)}>+</button>
        </div>
    )
}

export default Counter