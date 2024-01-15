import { Button } from "@/components/ui/button"
import useFetchBookDetail from "@/store/getBookDetail"
import { ArrowLeft, IndianRupee } from "lucide-react"
import { useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import alternateImage from '../assets/alternate.jpg'
import { Rating } from '@smastrom/react-rating';
import BooksDetailLoading from "@/components/books-detail-loading"

const BookDetails = () => {

  const { id: bookId } = useParams()
  const { getBookDetail, book, loading } = useFetchBookDetail()
  const navigate = useNavigate()
  useEffect(() => {
    const id = bookId ?? ""
    getBookDetail(id);
  }, [])

  console.log(book)
  return (
    <div className="px-4 sm:px-6 md:px-10 lg:px-14 py-4 sm:py-6 md:py-10 ">
      <Button variant={'secondary'} onClick={() => {
        navigate(-1)
      }}>
        <ArrowLeft className="text-primary" />
      </Button>
      {
        loading ? <BooksDetailLoading /> : <div className="mt-4 sm:mt-10">
          <div className="flex flex-col md:flex-row gap-x-10 gap-y-2 w-full">
            <div className="w-full md:w-1/3">
              {
                book?.cover_img ?
                  <img className="rounded-lg w-full md:h-[70vh] h-[50vh] object-contain" src={book?.cover_img} alt="" /> :
                  <img className="rounded-lg w-full md:h-[70vh] h-[50vh] object-contain" src={alternateImage} alt="" />
              }
            </div>
            <div className="flex flex-col space-y-2 w-full md:w-2/3">
              <h1 className="font-bold text-2xl font-primary">{book?.title}</h1>
              <p className="text-muted-foreground font-primary">{book?.description}</p>


              <p className="font-primary text-primary font-semibold text-lg">First Publish Date : <span className="font-primary font-light text-base text-muted-foreground">{book?.first_publish_date}</span></p>
              <p className="font-primary text-primary font-semibold text-lg">Number of Pages : <span className="font-primary font-light text-base text-muted-foreground">{book?.pageCount}</span></p>

              <div>
                <p className="font-primary text-primary font-semibold text-lg">Rating</p>

                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-x-1">
                  <Rating
                    style={{ maxWidth: 150 }}
                    value={book?.average_rating ?? 0}
                    readOnly
                  />

                  <p className="font-light text-muted-foreground font-primary">{book?.average_rating.toFixed(2)} rating From {book?.count} reviewers</p>
                </div>
              </div>
              <p className="font-primary text-primary inline-flex space-x-2 font-semibold text-lg">Price :
                <span className="font-primary flex items-center ml-1 font-light text-base text-muted-foreground">
                  {
                    typeof(book?.price) === "number" && <IndianRupee />
                  }
                  {book?.price}
                </span>
              </p>

              <div className="flex gap-x-2 mt-4">
                <a href={book?.buyLink ?? ""} target="_blank">
                  <Button className="text-white font-primary font-semibold">
                    Buy
                  </Button>
                </a>
                <a href={book?.previewLink ?? ""} target="_blank">
                  <Button className="text-white font-primary font-semibold">
                    Preview
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      }
    </div>
  )
}
export default BookDetails