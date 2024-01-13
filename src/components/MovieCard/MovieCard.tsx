import { Card, CardContent, CardTitle } from "@app/components/ui/card";
import { GenreType, MovieType } from "@app/types/movies/movie";
import { ProgressBar } from "@app/components/ProgressBar/ProgressBar";
import { genresFormatter } from "@app/utils/genresFormatter";
import Image from "next/image";

type MovieCardProps = {
  movie: MovieType;
  movieGenres: GenreType[];
  imageStyles?: string;
};

export const MovieCard = ({ movie, movieGenres, imageStyles }: MovieCardProps) => {
  return (
    <Card className="relative cursor-pointer shadow-2xl">
      <Image
        width={300}
        height={450}
        alt={movie.title}
        priority
        className={`rounded-xl shadow-2xl ${imageStyles || ''}`}
        src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${movie.poster_path}`}
      />
      <CardContent
        className={`absolute bottom-0 h-28 rounded-b-xl text-white px-3 w-full backdrop-blur flex flex-col justify-between`}
      >
        <CardTitle className="sm:text-sm md:text-base font-bold mt-2">
          {movie.title}
        </CardTitle>
        <div className="mt-1.5 md:mt-3 text-gray-300 font-bold text-sm">
          <p>{genresFormatter(movieGenres)}</p>
        </div>
      </CardContent>
      <ProgressBar value={Number(movie.vote_average.toFixed(1))} />
    </Card>
  );
};
