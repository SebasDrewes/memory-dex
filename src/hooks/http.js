import { useState, useEffect } from 'react';

export const useHttp = (url, dependencies) => {
    const [isLoading, setIsLoading] = useState(false);
    const [fetchedData, setFetchedData] = useState(null);
    useEffect(() => {
        setIsLoading(true);
        (async () => {
            try {
                const data = await(await fetch(url, { mode: 'cors' })).json();
                setFetchedData(data);
                setIsLoading(false);
            }
            catch {
                setIsLoading(false);
                throw new Error('Failed to fetch')
            }
        
            })();
        }, [url], dependencies);
    return [isLoading, fetchedData]
};
