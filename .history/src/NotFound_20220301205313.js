import { Link } from "react-router-dom";

const NotFound = () => {
    return (  
        <div className="not-fou">
            <h2>Sorry</h2>
            <p>The page cannot be found</p>
            <Link to='/'></Link>
        </div>
    );
}
 
export default NotFound;