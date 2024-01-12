import { Separator } from "@app/components/ui/separator";

export const Header = () => {
  return (
    <div className="mt-8">
      <div className="flex justify-between px-5 sm:px-10 xl:px-40 border-b-neutral-600">
        <h1>Logo</h1>
        <div className="flex gap-5">
          <a>Movies</a>
          <Separator orientation="vertical" />
          <a>Popular</a>
          <Separator orientation="vertical" />
          <a>Top Rated</a>
          <Separator orientation="vertical" />
          <a>Upcoming</a>
        </div>
      </div>
      <Separator className="mt-8" />
    </div>
  );
};
