import { useState, useEffect } from 'react';

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!url) return;

    const fetchData = async () => {
      setLoading(true);
      setError('');
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('City not found');
        }
        const json = await response.json();
        setData(json);
      } catch (err) {
        setError(err.message);
        setData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};
