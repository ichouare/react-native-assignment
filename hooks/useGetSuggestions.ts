import { useQuery } from '@tanstack/react-query';
import suggestions from '../constants/data/suggestions.json';
import { delay } from '../utils/helpers/makeDelay';



async function getData() {
    try {
        await delay(2000); // 1 second delay
        return suggestions; // return the imported JSON data after delay
    } catch (error: unknown) {
        throw new Error((error as Error).message || 'Unknown error');
    }
}

export function useGetSuggestions() {
    return useQuery({
        queryKey: ['suggestion'],
        queryFn: getData,
    });
}
