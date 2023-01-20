export const Child = ({parentFn})=>{
    const clickHandler = ()=>{
        parentFn('hello parent');
    }
    return <button onClick={clickHandler}>send message to parent</button>
}