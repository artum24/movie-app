import { useDetailMovie } from "@app/lib/api/useDetailMovie";
import { useRouter } from "next/router";
import Image from "next/image";
import { Badge } from "@app/components/ui/badge";
import dayjs from "dayjs";
import { FULL_DATE } from "@app/constants/time";
import { currencyFormatter } from "@app/utils/currencyFormatter";
import { timeFormatter } from "@app/utils/timeFormatter";
import { ProgressBar } from "@app/components/ProgressBar/ProgressBar";
import { useMovieCredits } from "@app/lib/api/useMovieCredits";
import { ScrollArea, ScrollBar } from "@app/components/ui/scroll-area";
import { Card, CardContent, CardTitle } from "@app/components/ui/card";
import { useMovieVideos } from "@app/lib/api/useMovieVideos";
import YouTubeVideo from "@app/components/YouTubeVideo/YouTubeVideo";
import { useMovieSimilar } from "@app/lib/api/useMovieSimilar";
import { MovieCard } from "@app/components/MovieCard/MovieCard";
import { GenreType } from "@app/types/movies/movie";
import { useGenres } from "@app/lib/api/useGenres";
import { useCollection } from "@app/lib/api/useCollection";
import { Skeleton } from "@app/components/ui/skeleton";

const MoviePage = () => {
  const {push} = useRouter();
  const { query } = useRouter();
  const { data: movieData, isLoading: movieLoading } = useDetailMovie(
    Number(query.id),
  );
  const { data: creditsData, isLoading: creditsLoading } = useMovieCredits(
    Number(query.id),
  );
  const { data: videosData, isLoading: videosLoading } = useMovieVideos(
    Number(query.id),
  );
  const { data: similarData, isLoading: similarLoading } = useMovieSimilar(
    Number(query.id),
  );
  const { data: genresData, isLoading: genresLoading } = useGenres();
  const { data: collectionData, isLoading: collectionLoading } = useCollection(
    movieData?.belongs_to_collection?.id,
  );
  const isLoading =
    movieLoading ||
    creditsLoading ||
    videosLoading ||
    similarLoading ||
    genresLoading ||
    collectionLoading;
  const countries = movieData?.production_countries
    .map((country) => country.name)
    .join(", ");
  const similarMovieList =
    similarData?.results.filter((item) => item.vote_count > 500) || [];
  const handleCastClick = (castId: number) => {
    push(`/casts/${castId}`)
  }
  return (
    <div className="px-5 sm:px-10 xl:px-40 my-8 md:my-12 mb-32">
      <div className="mb-8 block sm:flex gap-10">
        <div className="relative w-full sm:w-[500px]">
          {isLoading ? (
            <Skeleton className="w-full sm:w-[450px] h-[675px] mb-5 sm:mb-0" />
          ) : (
            <>
              <Image
                src={`https://image.tmdb.org/t/p/w780${movieData?.poster_path}`}
                alt={`image-${movieData?.title}`}
                height={700}
                width={500}
                className="rounded-xl w-full mb-5 sm:mb-0"
              />
              <ProgressBar
                value={Number(movieData?.vote_average.toFixed(1) || 0)}
              />
            </>
          )}
        </div>
        {isLoading ? (
          <div className="w-full">
            <Skeleton className="mb-4 h-10 w-full" />
            <Skeleton className="mb-4 h-6 w-full" />
            <Skeleton className="mt-12 mb-6 h-5 w-full" />
            <Skeleton className="mb-6 h-5 w-full" />
            <Skeleton className="mb-6 h-5 w-full" />
            <Skeleton className="mb-6 h-5 w-full" />
            <Skeleton className="mt-5 h-5 w-full" />
            <div className="flex mt-5 gap-14">
              <Skeleton className="h-32 w-32" />
              <Skeleton className="h-32 w-32" />
              <Skeleton className="h-32 w-32" />
            </div>
          </div>
        ) : (
          <div className="w-full">
            <h2 className="text-3xl font-bold mb-4">{movieData?.title}</h2>
            <h4 className="italic font-bold mb-4 text-lg">
              {movieData?.tagline}
            </h4>
            <p className="mt-12 mb-6">
              <span className="font-bold">Країна:</span> {countries}
            </p>
            <p className="mb-6">
              <span className="font-bold">Дата виходу:</span>{" "}
              {movieData?.release_date &&
                dayjs(movieData?.release_date).format(FULL_DATE)}
            </p>
            <p className="mb-6">
              <span className="font-bold">Бюджет:</span>{" "}
              {currencyFormatter(movieData?.budget || 0)}
            </p>
            <p className="mb-6">
              <span className="font-bold">Час:</span>{" "}
              {timeFormatter(movieData?.runtime || 0)}
            </p>
            <div className="mt-5 font-bold flex gap-4 flex-wrap">
              {movieData?.genres.map((genre) => (
                <Badge variant="secondary" key={genre.id}>
                  {genre.name}
                </Badge>
              ))}
            </div>
            <div className="flex gap-8 items-center mt-12">
              {movieData?.production_companies?.map((company) => {
                return company.logo_path ? (
                  <div key={company.id} className="h-36 flex items-center">
                    <Image
                      key={company.id}
                      src={`https://image.tmdb.org/t/p/w500${company.logo_path}`}
                      alt={company.name}
                      width={120}
                      height={120}
                    />
                  </div>
                ) : null;
              })}
            </div>
          </div>
        )}
      </div>
      <section className="mt-12">
        {isLoading ? (
          <>
            <Skeleton className="mb-8 h-10 w-40" />
            <Skeleton className=" mb-2 w-full h-5" />
            <Skeleton className=" mb-2 w-full h-5" />
            <Skeleton className=" mb-2 w-full h-5" />
          </>
        ) : (
          <>
            <p className="text-2xl font-bold mb-8">Опис</p>
            <p>{movieData?.overview}</p>
          </>
        )}
      </section>
      {creditsData?.cast.length && (
        <section className="mt-12">
          <p className="text-2xl font-bold mb-8">Актори</p>
          <ScrollArea>
            <div className="flex w-max space-x-4">
              {creditsData?.cast.map((actor) => {
                return actor.profile_path ? (
                  <Card
                    key={actor.id}
                    className="relative cursor-pointer shadow-2xl"
                    onClick={() => handleCastClick(actor.id)}
                  >
                    <Image
                      width={200}
                      height={350}
                      alt={actor.name}
                      priority
                      className={`rounded-xl shadow-2xl`}
                      src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${actor.profile_path}`}
                    />
                    <CardContent
                      className={`absolute bottom-0 h-20 rounded-b-xl text-white px-3 w-full backdrop-blur flex flex-col justify-between`}
                    >
                      <CardTitle className="sm:text-sm md:text-base font-bold mt-2">
                        {actor.name}
                      </CardTitle>
                      <p className="font-bold text-xs opacity-70">
                        {actor.character}
                      </p>
                    </CardContent>
                  </Card>
                ) : null;
              })}
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </section>
      )}
      {videosData?.results.length && (
        <section className="mt-12">
          <p className="text-2xl font-bold mb-8">
            {videosData?.results.length === 1 ? "Трейлер" : "Трейлери"}
          </p>
          <ScrollArea>
            <div className="flex w-max space-x-4">
              {videosData?.results.map((video) => {
                return <YouTubeVideo key={video.key} videoId={video.key} />;
              })}
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </section>
      )}
      {collectionData?.id && (
        <section className="mt-12">
          <p className="text-2xl font-bold mb-8">{collectionData?.name}</p>
          <ScrollArea>
            <div className="flex w-max space-x-4">
              <Image
                width={300}
                height={450}
                alt={collectionData.poster_path}
                priority
                className={`rounded-xl shadow-2xl`}
                src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${collectionData.poster_path}`}
              />
              {collectionData?.parts.map((part) => {
                const movieGenres: GenreType[] = [];
                part.genre_ids.forEach((genreId) => {
                  const selectedGenre = genresData?.genres.find(
                    (movieGenre) => movieGenre.id === genreId,
                  );
                  if (selectedGenre) {
                    movieGenres.push(selectedGenre);
                  }
                });
                return (
                  <MovieCard
                    key={part.id}
                    movie={part}
                    movieGenres={movieGenres}
                  />
                );
              })}
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </section>
      )}
      {similarMovieList.length && (
        <section className="mt-12">
          <p className="text-2xl font-bold mb-8">Подібні</p>
          <ScrollArea>
            <div className="flex w-max space-x-4">
              {similarMovieList.map((movie) => {
                const movieGenres: GenreType[] = [];
                movie.genre_ids.forEach((genreId) => {
                  const selectedGenre = genresData?.genres.find(
                    (movieGenre) => movieGenre.id === genreId,
                  );
                  if (selectedGenre) {
                    movieGenres.push(selectedGenre);
                  }
                });
                return (
                  <MovieCard
                    key={movie.id}
                    movie={movie}
                    movieGenres={movieGenres}
                  />
                );
              })}
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </section>
      )}
    </div>
  );
};

export default MoviePage;
