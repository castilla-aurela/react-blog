import { useState } from "react";

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('luis');

    return (  
        <div className="create">
            <h2>Add a New Blog</h2>
            <form >
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
                                        value={body}
                    onChange={(e)=> setBody(e.target.value)}
                >
                    <option value="luis">Luis</option>
                    <option value="mary">mary</option>
                </select>
                <button>Add Blog</button>
                <p>{ title }</p>
                <p>{ body }</p>
            </form>
        </div>
    );
}
 
export default Create;