import { useState } from "react"

export const Counter = ()=>{
    const [number, setNumber] = useState(0);
    const increment = ()=>{
        setNumber(number+1);
    }
    return <>
        <div>{number}</div>
        <button onClick={increment}>increment</button>
    </>
}