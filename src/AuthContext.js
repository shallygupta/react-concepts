import { createContext, useContext, useReducer } from "react";

const AuthContext = createContext(undefined);
const initState = {
    name: 'Shally'
}
const userReducer = (state, action)=>{
    switch(action.type){
        case 'update':{
            return {...state, name: action.payload.name}
        } 

    }
}
const AuthProvider = ({children})=>{
const [state, dispatch] = useReducer(userReducer, initState);
return<AuthContext.Provider value={{state,dispatch}}>{children}</AuthContext.Provider>
}

function useAuth(){
    const context = useContext(AuthContext);
    return context
}
export {useAuth, AuthProvider}
