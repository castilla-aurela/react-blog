const Home = () => {
    let name = 'Luis'

    const handleClick = () =>{
        name = "Fernando";
        <console className="log"></console>
    }

    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <p>{ name }</p>
        </div>
     );
}
 
export default Home;