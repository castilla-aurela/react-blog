import { Link } from 'react-router-dom'

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>The Demo Blog</h1>
            <div className="links">
                {/*<a href="/">Home</a>*/}
                <Link to="/">Home</Link>
                {/*<a href="/create" >New Blog</a>*/}
                <Link to="/create" >New Blog</Link>
            </div>
        </nav>

     );
}
 
export default Navbar;