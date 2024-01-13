import axios from "axios";
import { create } from "zustand";

interface Titles {
    id: string;
    title: string;
}

interface searchSuggestionState {
    searchData: Titles[] | [];
    loading: boolean;
    error: string | null;
    getSearchData: (query: string) => void;
}
const useSearchSuggestion = create<searchSuggestionState>()((set) => {
    return {
        searchData: [],
        loading: false,
        error: null,
        getSearchData: async (query: string) => {
            set({ loading: true })
            try {
                const { data } = await axios.get(`${import.meta.env.VITE_SEARCH_URL}/search.json?q=${query}&limit=10`);
                const finalData = data.docs.map((doc: any) => {
                    return {
                        id: doc.key.replace('/works',''),
                        title: doc.title,
                    }
                })
                set({ searchData: finalData })
                set({ loading: false })
            } catch (error: any) {
                set({ error: error.response.data.message })
            }
        }
    }
})

export default useSearchSuggestion