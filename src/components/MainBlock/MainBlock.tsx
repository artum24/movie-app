import { useDetailMovie } from "@app/lib/api/useDetailMovie";
import dayjs from "dayjs";
import { Badge } from "@app/components/ui/badge";
import { FULL_DATE } from "@app/constants/time";

export const MainBlock = () => {
  const { data } = useDetailMovie(572802);
  return (
    <div>
      <div
        className={`bg-cover bg-no-repeat shadow-[inset_500px_0px_150px_150px_rgba(2,8,23)] h-[800px] flex items-center`}
        style={{
          backgroundImage: `url('https://image.tmdb.org/t/p/original/${data?.backdrop_path}')`,
        }}
      >
        <div className="w-1/3 ml-14">
          <h1 className="text-3xl font-bold mb-8">{data?.title}</h1>
          <p className="italic font-bold mb-8">{data?.tagline}</p>
          <p>{data?.overview}</p>
          <p className="text-gray-400 font-bold italic mt-5">
            {data?.release_date && dayjs(data?.release_date).format(FULL_DATE)}
          </p>
          <div className="mt-5 font-bold flex gap-4">
            {data?.genres.map((genre) => (
              <Badge variant="secondary" key={genre.id}>
                {genre.name}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
