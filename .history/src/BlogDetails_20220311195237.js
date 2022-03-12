import { useNavigate, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {

    const { id } = useParams()
    const { data: blog, isLoading, error } = useFetch('http://localhost:8000/blogs/' + id)
    const navigate = useNavigate();

    const handleClick = () =>{
        fetch('http://localhost:8000/blogs/' + id, {
            method: 'DELETE'
        }).then(() =>{
            navigate('/');
        })
    }
    const handleUpdate = () =>{
        //navigate('/blogs/update/') // `/blogs/update/${id}`
        navigate(`/blogs/update/${id}`)
    }

    return ( 
        <div className="blog-details">
            {isLoading && <div> Is loading...</div>}
            {error && <div>{ error }</div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    <div>{blog.body}</div>
                    <button id="button" onClick={handleUpdate}>Update</button>
                    <button onClick={handleClick}>Delete</button>
                </article>
            )}
        </div>
    );
}
 
export default BlogDetails;