import { Card, CardContent } from "@/components/ui/card";
import { Rating } from "@smastrom/react-rating";
import { useNavigate, useSearchParams } from "react-router-dom";

interface Books {
    id: string;
    author: string[];
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
interface BookCardProps {
    book: Books;
    home : boolean;
}
const BookCard = ({ book,home }: BookCardProps) => {

    const navigate = useNavigate()
    const [searchParams] = useSearchParams()
    const query = searchParams.get('query') ?? ""
    const handleRedirect = (id: string) => {
        navigate({
            pathname: `/books${id}`,
            search: `?query=${query}`
        })
    }
    const handleSearchRedirect = (query: string) => {
        navigate({
            pathname: `/search`,
            search: `?query=${query}`
        })
    }

    return (
        <Card onClick={() => home ? handleSearchRedirect(book.title) : handleRedirect(book.id)} key={book.id} className="py-4 group overflow-hidden cursor-pointer">
            <CardContent className="flex flex-col font-primary">
                {
                    book.cover_img ?
                        <img className="w-full group-hover:scale-105 transition-all duration-200 h-52 object-cover rounded-lg" src={book.cover_img} alt="" /> :
                        <div className="bg-muted rounded-lg w-full h-52"></div>
                }
                <h1 className="text-primary font-semibold text-lg my-1 line-clamp-2">{book.title}</h1>
                <p className="text-light font-medium text-base line-clamp-2">Author : <span className="font-light">{book?.author?.join(',')}</span></p>
                <p className="text-light font-medium text-base">Published In : <span className="font-light">{book.first_publish_year}</span></p>
                <p className="text-light font-medium text-base">Number of Editions : <span className="font-light">{book.edition_count}</span></p>
                <div className="flex items-center gap-x-2">
                    <p className="text-light font-medium text-base">Rating :</p>

                    <Rating
                        style={{ maxWidth: 100 }}
                        value={book?.ratings_average ?? 0}
                        readOnly
                    />
                </div>
            </CardContent>
        </Card>
    )
}
export default BookCard