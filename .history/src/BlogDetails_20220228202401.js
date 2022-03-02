import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {

    const { id } = useParams()
    const { data, isLoading, error } = useFetch('http://localhost:8000/blogs' + )

    return ( 
        <div className="blog-details">
            <h2>Blog details - { id }</h2>
        </div>
    );
}
 
export default BlogDetails;