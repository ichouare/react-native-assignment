import { useQuery } from '@tanstack/react-query';
import articles from '../constants/data/Articles.json';
import { delay } from '../utils/helpers/makeDelay';



async function getData(suggestion: string | null) {
    try {
        await delay(2000); // 1 second delay
        if (suggestion !== 'Pour moi')
            return []
        return articles; // return the imported JSON data after delay
    } catch (error: unknown) {
        throw new Error((error as Error).message || 'Unknown error');
    }
}

export function useGetArticles(suggestion: string | null) {
    return useQuery({
        queryKey: ['Articles', suggestion],
        queryFn: () => getData(suggestion),
        enabled: suggestion !== null
    });
}
