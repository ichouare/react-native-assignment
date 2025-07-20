import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { ReactNode } from 'react'



const queryClient = new QueryClient()
export function QueryProvider(
    { children }: { children: React.ReactNode }
   )
{
    return  <QueryClientProvider client={queryClient}>
        {children}
    </QueryClientProvider>
}