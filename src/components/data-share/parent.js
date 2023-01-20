import { Child } from "./child"
export const Parent = () =>{
    const childHandler  = (msg)=>{
        console.log(msg)
    }
    return <Child parentFn = {childHandler}></Child>

}