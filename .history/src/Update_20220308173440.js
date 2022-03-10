import { useState,  } from "react";
import {useNavigate} from 'react-router-dom'

const Update = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('luis');
    const [isPending, setIsPending] = useState(false);
    const navigate = useNavigate();
    const {id}


    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = {title, body, author};
        console.log (blog);
        setIsPending(true)

        fetch('http://localhost:8000/blogs'+ id, {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(blog)
        }).then(() =>{
            console.log('new blog added')
            setIsPending(false)
            //history.go(-1) go to previous page
            navigate('/')
        })
    }

    return (  
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label >Blog title:</label>
                <input
                    type="text"
                    required
                    value={title}
                    onChange={(e)=> setTitle(e.target.value)}
                />
                <label >Blog body:</label>
                <textarea
                    required
                    value={body}
                    onChange={(e)=> setBody(e.target.value)}
                ></textarea>
                <label >Blog author:</label>
                <select 
                    value={author}
                    onChange={(e)=> setAuthor(e.target.value)}
                >
                    <option value="luis">Luis</option>
                    <option value="mary">mary</option>
                </select>
                {!isPending && <button>Add Blog</button>}
                {isPending && <button disabled>Adding blog...</button>}
                <p>{ title }</p>
                <p>{ body }</p>
                <p>{ author }</p>
            </form>
        </div>
    );
}
 
export default Update;