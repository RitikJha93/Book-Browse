import { Skeleton } from "./ui/skeleton"

const BooksDetailLoading = () => {
    return (
        <div className="px-4 sm:px-6 md:px-10 lg:px-14 py-4 sm:py-6 md:py-10 ">
            <div className="flex flex-col md:flex-row gap-x-10 gap-y-2 w-full">
                <div className="w-full md:w-1/3">
                    <Skeleton className="rounded-lg w-full md:h-[70vh] h-[50vh]" />
                </div>
                <div className="flex flex-col space-y-3 w-full md:w-2/3">
                    <Skeleton className="h-6 w-full" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-full" />
                </div>
            </div>
        </div>
    )
}
export default BooksDetailLoading