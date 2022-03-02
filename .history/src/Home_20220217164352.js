import { useState } from "react";

const Home = () => {
    //let name = 'Luis'
    const [name, setName] = useState('Luis');
    const [age, setAge] = useState(25);
    const [blogs, setBlogs] = useState([]);

    const handleClick = () =>{
        //name = "Fernando";
        //console.log(name)
        setName('Fernando');
        setAge(30);
    }

    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <p>{ name } is { age } years old</p>
            <button onClick={handleClick}>Click me</button>
            {blogs.map(()=>)}
        </div>
     );
}
 
export default Home;