import { useState } from "react";

const Home = () => {
    //let name = 'Luis'
    const [name, setName] = useState('Luis');
    const [age, setAge] = useState(25);
    const [blogs, setBlogs] = useState([
        {tittle: 'My new website', body: 'lorem ipsum ...', author: 'Luis', id: 1},
        {tittle: 'Welcome party', body: 'lorem ipsum ...', author: 'Fernando', id: 2},
        {tittle: 'Dev Tools', body: 'lorem ipsum ...', author: 'Mary', id: 3},
    ]);

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
            {blogs.map((blog)=>(
                <div className="blog-preview" key={blog.id}>
                    <h2>{ blog.tittle}</h2>
                    <p>{ }</p>
                </div>
                ))}
        </div>
     );
}
 
export default Home;