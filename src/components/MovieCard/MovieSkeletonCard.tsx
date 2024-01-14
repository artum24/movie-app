import { Skeleton } from "@app/components/ui/skeleton";

type MovieSkeletonCardProps = {
  width?: number;
  height?: number;
};

export const MovieSkeletonCard = ({
  width,
  height,
}: MovieSkeletonCardProps) => {
  return (
    <Skeleton
      className={`relative ${height ? "h-[28rem]" : "h-96"} ${width ? "w-80" : "w-full"} rounded-xl`}
    >
      <Skeleton className="absolute h-36 w-full bottom-0 px-3 py-3 flex flex-col justify-between">
        <Skeleton className=" w-100 h-8" />
        <Skeleton className="w-16 h-4 mt-3" />
        <Skeleton className="w-full h-4" />
      </Skeleton>
      <Skeleton className="rounded-full w-12 h-12 absolute top-2.5 right-2.5" />
    </Skeleton>
  );
};
