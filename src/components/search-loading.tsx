import { Skeleton } from "./ui/skeleton"

const SearchLoading = () => {
    return (
        <div className="flex flex-col space-y-3">
            {
                [1, 2, 3, 4, 5].map((_,i) => {
                    return(
                        <Skeleton key={i} className="h-6 w-full bg-white" />
                    )
                })
            }
        </div>
    )
}
export default SearchLoading