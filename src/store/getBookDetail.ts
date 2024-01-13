import { create } from 'zustand';
import axios from 'axios'

interface BookDetail {
    id: string;
    description: string;
    title: string;
    covers: number[];
    subjectPlaces: string[];
    subjectPeople: string[];
    subjects: string[];
    first_publish_date: string;
    cover_img: string;
    average_rating: number;
    count: number;
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
            const { book } = useFetchBookDetail.getState()
            set({ book: null })
            try {
                const { data } = await axios.get(`${import.meta.env.VITE_SEARCH_URL}/works/${id}.json`)
                const { data: ratingData } = await axios.get(`${import.meta.env.VITE_SEARCH_URL}/works/${id}/ratings.json`)
                const bookDetailData = {
                    id: data.key.replace('/works', ""),
                    description: data.description && data.description.value ? data.description.value : data.description ? data.description : "No Description Found for this book",
                    title: data.title,
                    covers: data.covers,
                    subjectPlaces: data.subject_places ?? [],
                    subjectPeople: data.subject_people ?? [],
                    subjects: data.subjects ?? [],
                    first_publish_date: data.first_publish_date ?? "Not Available",
                    cover_img: data.covers && data.covers[0] ? `https://covers.openlibrary.org/b/id/${data.covers[0]}-L.jpg` : "",
                    average_rating: ratingData.summary.average ?? 0,
                    count: ratingData.summary.count,
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