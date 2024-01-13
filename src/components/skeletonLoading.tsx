import { Card, CardContent } from "./ui/card";
import { Skeleton } from "./ui/skeleton";

const SkeletonLoading = () => {
    return (
        <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-y-6 gap-x-5 mt-10">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((index) => (
                    <Card key={index} className="py-4">
                        <CardContent className="flex flex-col">
                            <div className="flex justify-center w-full">
                                <Skeleton className="w-full h-52" />
                            </div>
                            <div className="space-y-2 mt-2">
                                <Skeleton className="h-4 flex-grow" />
                                <Skeleton className="h-4 flex-grow" />
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default SkeletonLoading;
