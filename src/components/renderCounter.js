import { useEffect, useRef, useState } from "react"

export const RenderCounter = ()=>{
    const [name, setName] = useState("");
    const counter = useRef(0);
    useEffect(()=>{
        counter.current = counter.current + 1;
    });

    return <>
        
        <input value={name} onChange={(e) => setName(e.target.value)}></input>
        <h1>Render Count: {counter.current}</h1>
    </>
}