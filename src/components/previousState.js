import { useEffect, useRef, useState } from "react"

export const PreviousState = ()=>{
    const [number, setNumber]= useState(0);
    const previousValue = useRef(null);
    useEffect(()=>{
        previousValue.current = number
    },[number]);
    const increment = ()=>{
        setNumber((prev)=>prev+1);
    }
    return <>
        <p>previous value is :{previousValue.current}</p>
        <p>next value is : {number}</p>
        <div>
            <button onClick={increment}>increment</button>
        </div>
    </>
}