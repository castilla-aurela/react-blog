import { useParams } from "react-router-dom";

const BlogDetails = () => {

    const { id } = useParams()
    const 
    return ( 
        <div className="blog-details">
            <h2>Blog details - { id }</h2>
        </div>
    );
}
 
export default BlogDetails;