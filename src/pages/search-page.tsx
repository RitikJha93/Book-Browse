import SkeletionLoading from "@/components/skeletonLoading";
import { Button } from "@/components/ui/button";
import useFetchBooks from "@/store/getBooks"
import { ArrowLeft } from "lucide-react";
import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom"
import InfiniteScroll from "react-infinite-scroll-component";
import BookCard from "@/components/book-card";

const SearchPage = () => {

  const { getBooks, booksData, loading, hasMoreData, increaseOffset, resetOffset, resetBooksData } = useFetchBooks();
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const query = searchParams.get('query') ?? ""

  const fetchMoreData = () => {
    increaseOffset();
    getBooks(query)
  }

  useEffect(() => {
    resetOffset()
    resetBooksData()
    getBooks(query)
  }, [query])

  console.log(booksData)
  return (
    <div className="px-4 sm:px-6 md:px-10 lg:px-14 py-4 sm:py-6 md:py-10">
      <div className="flex items-center gap-x-4">
        <Button variant={'secondary'} onClick={() => {
          navigate(-1)
        }}>
          <ArrowLeft className="text-primary" />
        </Button>
        <h1 className="font-bold text-xl font-primary"><span>Showing Results for : </span> {searchParams.get('query')}</h1>

      </div>

      {
        booksData.length === 0 && !loading ? <p>No results found</p> :
          <InfiniteScroll
            dataLength={booksData?.length}
            next={fetchMoreData}
            hasMore={hasMoreData}
            loader={<SkeletionLoading />}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5  gap-y-6 gap-x-5 mt-4 sm:mt-10">
              {booksData?.map((book, i) => {
                return (
                  <BookCard home={false} key={i} book={book} />
                )

              })}

            </div>
          </InfiniteScroll>
      }
    </div >
  )
}
export default SearchPage