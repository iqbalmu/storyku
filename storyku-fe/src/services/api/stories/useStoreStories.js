import { useState, useEffect } from 'react';
import axios from 'axios'

const BASE_API = import.meta.env.VITE_APP_BASE_API

const useStoreStories = (data) => {

  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);  

  useEffect(() => {
    const postData = async () => {
      setLoading(true);
      const formData = new FormData()

      Object.entries(data).forEach(([name, value]) => {
        formData.append(name, value);
      });

      try {
        const res = await axios.post(`${BASE_API}/stories`, formData)
          .then(response => console.log(response.data))
          .catch(error => console.error('Error:', error));
        setResponse(res.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    if (data) {
      postData();
    }

  }, [data]);

  return { response, error, loading };
};

export default useStoreStories;
