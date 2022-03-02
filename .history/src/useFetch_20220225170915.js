import { useEffect, useState } from "react";

const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(true);


    useEffect(()=>{
      setTimeout(()=> {

      })
      
        //console.log('useEffect ran');
        //console.log(name)
        fetch(url, {signal: abortCont.signal}).then( res => {
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
        }).catch((err)=> {
          if(err.name === "AbortError"){
            console.log('fetch aborted')
          }else{
            console.log(err.message)
            setError(err.message);
            setIsLoading(false);
          }
      })
      return () => abortCont.abort();
  
    }, [url]);

    return {data, isLoading, error};
}
 
export default useFetch;