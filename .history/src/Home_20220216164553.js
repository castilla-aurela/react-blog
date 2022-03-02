import { useState } from "react";

const Home = () => {
    //let name = 'Luis'
    const [] = useState('')

    const handleClick = () =>{
        //name = "Fernando";
        //console.log(name)
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