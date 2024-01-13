import { Button } from "@/components/ui/button"
import useFetchBookDetail from "@/store/getBookDetail"
import { ArrowLeft } from "lucide-react"
import { useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import alternateImage from '../assets/alternate.jpg'
import SkeletonLoading from "@/components/skeletonLoading"
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
              <div>
                <p className="font-primary font-semibold text-primary text-lg">Subject Places</p>
                {
                  book?.subjectPlaces != undefined && book.subjectPlaces.length > 0 ?
                    <p className="text-muted-foreground font-primary">{book?.subjectPlaces.join(',')}</p> :
                    <p className="text-muted-foreground font-primary">Not Available</p>
                }
              </div>
              <div>
                <p className="font-primary font-semibold text-primary text-lg">Subject People</p>
                <div className="flex overflow-x-auto space-x-2 wrapper">
                  {
                    book?.subjectPeople != undefined && book.subjectPeople.length > 0 ?
                      book?.subjectPeople.map((people) => {
                        return <div className="bg-secondary p-2 rounded-lg min-w-fit">
                          <p>{people}</p>
                        </div>
                      }) :
                      <p className="text-muted-foreground font-primary">Not Available</p>

                  }
                </div>
              </div>
              <div>
                <p className="font-primary font-semibold text-primary text-lg">Subjects</p>
                <div className="flex overflow-x-auto space-x-2 wrapper">
                  {
                    book?.subjects != undefined && book.subjects.length > 0 ?

                      book?.subjects.map((people) => {
                        return <div className="bg-secondary rounded-lg p-2 min-w-fit">
                          <p>{people}</p>
                        </div>
                      }) :
                      <p className="text-muted-foreground font-primary">Not Available</p>

                  }
                </div>
              </div>

              <p className="font-primary text-primary font-semibold text-lg">First Publish Date : <span className="font-primary font-light text-base text-muted-foreground">{book?.first_publish_date}</span></p>

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
            </div>
          </div>
        </div>
      }
    </div>
  )
}
export default BookDetails