import useSWR from "swr";

import fetcher from "@/lib/fetcher";

const useCurrentUser = () => {
    // no matter where we use useCurrentUser hook, SWR does not request again if data is already present. Avoids the need for redux or any other state management.
    const { data, error, isLoading, mutate } = useSWR("/api/current", fetcher)

    return {
        data,
        error,
        isLoading,
        mutate
    }
    
}

export default useCurrentUser;