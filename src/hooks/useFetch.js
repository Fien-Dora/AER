import { useState, useEffect } from "react";

const useFetch = url => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(url)
          .then(res => {
            if (!res.ok) {
              throw new Error('Network response was not ok');
            }
            return res.json();
          })
          .then(data => {
            console.log("Fetched Data => ", data);
            setData(data);
            setError(null);
            setLoading(false);
          })
          .catch(error => {
            console.error('Error fetching data:', error);
              setError(error.message);
              setLoading(false);
          });
      }, [url]);

      return {data, error, loading};
}

export default useFetch;