const Home = () => {
    let name = 'Luis'

    const handleClick = () =>{
        name = "Fernand"
    }

    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <p>{ name }</p>
        </div>
     );
}
 
export default Home;