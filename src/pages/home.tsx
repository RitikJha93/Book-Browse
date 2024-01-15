import FeaturedBooks from "@/components/featured-books"
import Landing from "@/components/landing"
import PopularBooks from "@/components/popular-books"

const Home = () => {
    return (
        <div>
            <Landing />
            <PopularBooks />
            <FeaturedBooks />
        </div>
    )
}
export default Home