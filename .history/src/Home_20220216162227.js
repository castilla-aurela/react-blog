const Home = () => {
    let name = 'Luis'

    const handleClick = () =>{
        name = "Fernando";
        console.log(name)
    }

    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <p>{ name }</p>
            <button onc>Click me</button>
        </div>
     );
}
 
export default Home;