// stores/SearchStore.ts
import { create } from 'zustand'

type SearchState = {
  searchQuery: string | null,
  setSearchQuery: (newSearchValue: string) => void
}

const useSearchStore = create<SearchState>((set) => ({
  searchQuery: 'Pour moi',
  setSearchQuery: (newSearchValue) => set({ searchQuery: newSearchValue }),
}))

export default useSearchStore
