import { useState,  } from "react";
import {useNavigate, useParams} from 'react-router-dom'
import useFetch from "./useFetch";

const Update = () => {
    
    
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('luis');
    const [isPending, setIsPending] = useState(false);
    const navigate = useNavigate();
    const {id} = useParams()
    const { data: blog, isLoading, error } = useFetch('http://localhost:8000/blogs/' + id)
    const [title, setTitle] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = {title, body, author};
        console.log (blog);
        setIsPending(true)

        fetch('http://localhost:8000/blogs/'+ id, {
            method: 'PUT',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(blog)
        }).then(() =>{
            console.log(blog)
            setIsPending(false)
            //history.go(-1) go to previous page
            navigate('/')
        })
    }

    return (  
        <div className="create">
            {isLoading && <div> Is loading...</div>}
            {error && <div>{ error }</div>}
            {blog && (
                
            )}

        </div>
    );
}
 
export default Update;