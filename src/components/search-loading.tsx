import { Skeleton } from "./ui/skeleton"

const SearchLoading = () => {
    return (
        <div className="flex flex-col space-y-3">
            {
                [1, 2, 3, 4, 5].map((_) => {
                    return(
                        <Skeleton className="h-6 w-full bg-white" />
                    )
                })
            }
        </div>
    )
}
export default SearchLoading