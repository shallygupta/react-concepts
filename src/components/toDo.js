import { useState } from "react"

export const ToDo = ()=>{
    const [item, setItem] = useState("");
    const [toDoList, setTodoList]= useState([]);
    const itemChangeHandler=(e)=>{
        setItem(e.target.value)
    }
    const addItem = ()=>{
        const tempList = [...toDoList];
        tempList.push(item)
        setTodoList(tempList);
    }
    const deleteTodo =(item,index)=>{
        alert(item);
        const tempList = toDoList.filter(val=>{
            return val!=item
        });

        setTodoList(tempList);
    }
    return <>
        <input value={item} onChange={itemChangeHandler}></input>
        <button onClick={addItem}>AddItem</button>
        {toDoList.length> 0 ? toDoList.map((todo,index)=>{
            return <>
                <li>{todo} <button onClick={()=>{deleteTodo(todo, index)}}>delete</button></li>
                
            </>
        }) :null}
    </>
}