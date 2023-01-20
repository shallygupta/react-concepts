import axios from "axios";
import { useEffect, useState } from "react";
import { useAuth } from "../AuthContext";

export const Paginate = ()=>{
    const link = 'https://jsonmock.hackerrank.com/api/articles?page=';
    const [articles, setArticles] = useState([]);
    const [pageCount , setPageCount] = useState(0);
    const {state} = useAuth();
    console.log(state.name);
    useEffect(()=>{
        axios.get(link+'1').then((res)=>{
            console.log(JSON.stringify(res));
            setPageCount(res.data.total_pages);
            setArticles(res.data.data);
        })  
    },[]);
    const getArticles = function(index){
        axios.get(link+index).then((res)=>{
            console.log(JSON.stringify(res));
            setPageCount(res.data.total_pages);
            setArticles(res.data.data);
        })  
    }
    return <>{Array(pageCount).fill().map((page, index)=>{
        return <><button key={index} onClick={()=>{getArticles(index+1)}}>{index+1 }</button> &nbsp;</>
    })}
    
    {articles.map((article)=>{
        return <li>{article.title}</li>
    })}
    
    </>
}