import FeaturedBooks from "@/components/featured-books"
import Landing from "@/components/landing"
import Navbar from "@/components/navbar"
import PopularBooks from "@/components/popular-books"

const Home = () => {
    return (
        <div>
            <Navbar />
            <Landing />
            <PopularBooks />
            <FeaturedBooks />
        </div>
    )
}
export default Home