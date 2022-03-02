import {}

const useFetch = () => {

    const [blogs, setBlogs] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(true);


    useEffect(()=>{
        //console.log('useEffect ran');
        //console.log(name)
        fetch('http://localhost:8000/blogs').then( res => {
            console.log(res)
            if (!res.ok){
              throw Error('could not fetch the data for that resource');
            }
            return res.json();
        }).then( data => {
            console.log(data);
            setBlogs(data);
            setIsLoading(false);
            setError(null);
        }).catch((err)=> 
        {console.log(err.message)
          setError(err.message);
          setIsLoading(false);
      })
  
  
    }, []);

    return {};
}
 
export default useFetch;