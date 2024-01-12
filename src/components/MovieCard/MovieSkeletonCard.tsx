import { Skeleton } from "@app/components/ui/skeleton";

export const MovieSkeletonCard = () => {
  return (
    <Skeleton className=" relative h-96 w-72 rounded-xl">
      <Skeleton className="absolute h-36 w-full bottom-0 px-3 py-3 flex flex-col justify-between">
        <Skeleton className=" w-100 h-8" />
        <div className="flex justify-between mt-3">
          <Skeleton className="w-16 h-4" />
          <Skeleton className="w-16 h-4" />
        </div>
        <Skeleton className="w-full h-4" />
      </Skeleton>
    </Skeleton>
  );
};
