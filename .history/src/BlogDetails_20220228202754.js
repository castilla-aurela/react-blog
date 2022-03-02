import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {

    const { id } = useParams()
    const { data: blog, isLoading, error } = useFetch('http://localhost:8000/blogs' + id)

    return ( 
        <div className="blog-details">
            {isLoading && <div> Is loading...</div>}
        </div>
    );
}
 
export default BlogDetails;