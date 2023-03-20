import useSWR from 'swr';
import  fetcher  from '@/lib/fetcher';

const useBillboard = () => {
    // static data, we want it to reload only when user firsts visits the page and not everytime they loose focus, therefore additional object with revalidate options.
    const { data, error, isLoading } = useSWR('/api/random', fetcher, {
        revalidateIfStale: false,   
        revalidateOnFocus: false,
        revalidateOnReconnect: false, 
    });

    return {
        data,
        error,
        isLoading
    }
}

export default useBillboard;