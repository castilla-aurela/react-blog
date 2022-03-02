import { useEffect, useState } from "react";

const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(true);


    useEffect(()=>{
        //console.log('useEffect ran');
        //console.log(name)
        fetch(url).then( res => {
            console.log(res)
            if (!res.ok){
              throw Error('could not fetch the data for that resource');
            }
            return res.json();
        }).then( data => {
            console.log(data);
            setData(data);
            setIsLoading(false);
            setError(null);
        }).catch((err)=> 
        {console.log(err.message)
          setError(err.message);
          setIsLoading(false);
      })
  
  
    }, [url]);

    return {data, isLoading, error};
}
 
export default useFetch;