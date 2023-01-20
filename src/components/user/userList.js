import { useEffect, useState } from "react"
import { User } from "./user";
import axios from "axios";
const UserList = ()=>{
    const [users, setUsers] = useState([]);
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users").then((res)=>{
            setUsers(res.data);
        });
    },[])
    return <div className="users">{users.length>0? users.map((user)=>{
        return <User avatar={user}/>
    }):null}</div>
}
export default UserList