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
                const { data } = await axios.get(`${import.meta.env.VITE_SEARCH_URL}?q=${query}&key=${import.meta.env.VITE_API_KEY}`);
                const finalData = data.items.map((doc: any) => {
                    return {
                        id: doc.id,
                        title: doc.volumeInfo.title,
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