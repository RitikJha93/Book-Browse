import { create } from 'zustand';
import axios from 'axios'

interface BookDetail {
    id: string;
    description: string;
    title: string;
    authors: string[];
    first_publish_date: string;
    cover_img: string;
    average_rating: number;
    count: number;
    pageCount: number;
    previewLink: string;
    price: number;
    buyLink: string;
}

interface BookDetailState {
    book: BookDetail | null;
    loading: boolean;
    error: string | null;
    getBookDetail: (id: string) => void;

}
const useFetchBookDetail = create<BookDetailState>()((set) => {
    return {
        book: null,
        loading: false,
        error: null,
        getBookDetail: async (id: string) => {
            set({ loading: true })
            set({ book: null })
            try {
                const { data } = await axios.get(`${import.meta.env.VITE_SEARCH_URL}/${id}`)
                const { title, authors, publishedDate, imageLinks, pageCount, previewLink, description, averageRating, ratingsCount } = data.volumeInfo

                const bookDetailData = {
                    id: data.id,
                    description: description ?? "No Description Found for this book",
                    authors: authors,
                    title: title,
                    first_publish_date: publishedDate ?? "Not Available",
                    cover_img: imageLinks?.thumbnail ?? "",
                    average_rating: averageRating ?? 0,
                    count: ratingsCount,
                    pageCount: pageCount,
                    previewLink: previewLink,
                    price: data?.saleInfo?.listPrice?.amount ?? "Not Available",
                    buyLink: data.saleInfo.buyLink,
                }
                set({ book: bookDetailData })
                set({ loading: false })

            } catch (error: any) {
                console.log(error)
                set({ error: error.response.data.message })
            }

        }
    }

})


export default useFetchBookDetail