import { useEffect, useState } from 'react';

function useFetch(endpoint) {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(false);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            setIsPending(true);
            try {
                const response = await fetch(endpoint);
                if (!response.ok) throw new Error(response.statusText);
                const json = await response.json();
                setIsPending(false);
                setData(json);
                setError(null);
            } catch (error) {
                setError(`${error}`);
                setIsPending(false);
            }
        };
        fetchData();
    }, [endpoint]);
    return { data, isPending, error, setData };
}

export default useFetch;
