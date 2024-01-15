import { create } from 'zustand';
import axios from 'axios'

interface Books {
    id: string;
    author: [];
    first_publish_year: number;
    title: string;
    cover_img: string;
    ratings_average: number;
    ratings_count: number;
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
                const { data } = await axios.get(`${import.meta.env.VITE_SEARCH_URL}?q=${query}&key=${import.meta.env.VITE_API_KEY}&maxResults=20&startIndex=${offset}`);
                const booksWithUrls = data?.items.map((doc: any) => {
                    const {title,authors,publishedDate,imageLinks,averageRating,ratingsCount} = doc.volumeInfo
                    return {
                        id: doc.id,
                        author: authors,
                        first_publish_year: publishedDate,
                        title: title,
                        cover_img: imageLinks?.thumbnail ?? "",
                        ratings_average: averageRating,
                        ratings_count: ratingsCount,
                    }
                })
                set({ booksData: booksData.concat(booksWithUrls), hasMoreData: data.items.length > 0 })
                set({ loading: false })
            } catch (error: any) {
                console.log(error)
                // set({ error: error.response.data.message })
            }
        },
        increaseOffset: () => set((state) => ({ offset: state.offset + 20 })),
        resetOffset: () => set({ offset: 0 }),
        resetBooksData: () => set({ booksData: [] })
    }
})

export default useFetchBooks