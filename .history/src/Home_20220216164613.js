import { useState } from "react";

const Home = () => {
    //let name = 'Luis'
    const [name, setName] = useState('Luis')

    const handleClick = () =>{
        //name = "Fernando";
        //console.log(name)
        setName('')
    }

    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <p>{ name }</p>
            <button onClick={handleClick}>Click me</button>
        </div>
     );
}
 
export default Home;