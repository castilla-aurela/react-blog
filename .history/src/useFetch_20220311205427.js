import { useEffect, useState } from "react";

const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(true);


    useEffect(()=>{
      const abortCont = new AbortController();
      
      setTimeout(()=> {



      },1000);
      

      return () => abortCont.abort();
  
    }, [url]);

    return {data, isLoading, error};
}
 
export default useFetch;