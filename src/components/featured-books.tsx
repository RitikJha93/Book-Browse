import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { featuredBooks } from "@/data"
import BookCard from "./book-card"
const FeaturedBooks = () => {
    return (
        <div className="w-full relative my-10 md:px-20 sm:px-16 px-12">
            <div>
                <h1 className="sm:text-2xl text-xl font-bold font-primary my-2">Featured Books</h1>
                <Carousel
                    opts={{
                        align: "start",
                    }}
                    className="w-full"
                >
                    <CarouselContent>
                        {featuredBooks.map((book, index) => (
                            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                                <BookCard book={book} />
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>
        </div>
    )
}
export default FeaturedBooks