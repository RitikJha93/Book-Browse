import { create } from 'zustand';
import axios from 'axios'

interface Books {
    id: string;
    author: [];
    cover_id: number;
    edition_count: number;
    first_publish_year: number;
    title: string;
    cover_img: string;
    ratings_average: number;
    ratings_count: number;
    want_to_read_count: number;
    currently_reading_count: number,
    already_read_count: number,
}

interface FetchBooksState {
    booksData: Books[] | [];
    loading: boolean;
    error: string | null;
    getBooks: (query: string) => Promise<void>;
    searchedText: string | null;
    offset: number;
    increaseOffset: () => void;
    resetOffset: () => void;
    resetBooksData: () => void;
    hasMoreData: boolean;
}

const useFetchBooks = create<FetchBooksState>()((set) => {
    return {
        booksData: [],
        loading: false,
        error: null,
        searchedText: null,
        offset: 0,
        hasMoreData : true,
        getBooks: async (query: string) => {
            set({ loading: true });
            set({ searchedText: query })
            try {
                const { offset, booksData } = useFetchBooks.getState()
                const { data } = await axios.get(`${import.meta.env.VITE_SEARCH_URL}/search.json?q=${query}&limit=20&offset=${offset}`);
                const booksWithUrls = data.docs.map((doc: any) => {
                    return {
                        id: doc.key.replace('/works', ""),
                        author: doc.author_name,
                        cover_id: doc.cover_i,
                        edition_count: doc.edition_count,
                        first_publish_year: doc.first_publish_year,
                        title: doc.title,
                        cover_img: doc.cover_i ? `https://covers.openlibrary.org/b/id/${doc.cover_i}-M.jpg` : "",
                        ratings_average: doc.ratings_average,
                        ratings_count: doc.ratings_count,
                        want_to_read_count: doc.want_to_read_count,
                        currently_reading_count: doc.currently_reading_count,
                        already_read_count: doc.already_read_count
                    }
                })
                set({ booksData: booksData.concat(booksWithUrls), hasMoreData: data.docs.length > 0 })
                set({ loading: false })
            } catch (error: any) {
                set({ error: error.response.data.message })
            }
        },
        increaseOffset: () => set((state) => ({ offset: state.offset + 20 })),
        resetOffset: () => set({ offset: 0 }),
        resetBooksData: () => set({ booksData: [] })
    }
})

export default useFetchBooks