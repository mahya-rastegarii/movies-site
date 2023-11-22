
import Parse from 'parse/dist/parse.min.js';
import {useState, useEffect} from 'react';


const useParse = (params) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchData = () => {
    const query = new Parse.Query(params)
    try {
      setResponse(query);
      // console.log(response);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return [ response, error, loading ];
};

export default useParse;
