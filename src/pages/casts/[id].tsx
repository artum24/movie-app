import {useDetailCast} from "@app/lib/api/cast/useDetailCast";
import {useRouter} from "next/router";
import Image from "next/image";
import dayjs from "dayjs";
import {FULL_DATE} from "@app/constants/time";
import {ImageCarousel} from "@app/components/ImageCarousel/ImageCarousel";
import {SocialMedia} from "@app/components/SocialMedia/SocialMedia";
import {ScrollArea, ScrollBar} from "@app/components/ui/scroll-area";
import {GenreType} from "@app/types/movies/movie";
import {MovieCard} from "@app/components/MovieCard/MovieCard";
import {useGenres} from "@app/lib/api/useGenres";

const CastDetailPage = () => {
  const {query} = useRouter();
  const {data} = useDetailCast(query.id as string);
  const {data: genresData} = useGenres();
  return (
    <div className="px-5 sm:px-10 xl:px-40 my-8 md:my-12 mb-32">
      <div className="mb-8 block sm:flex gap-10">
        <Image
          src={`https://image.tmdb.org/t/p/w780${data?.profile_path}`}
          alt={`image-${data?.name}`}
          height={700}
          width={450}
          className="rounded-xl mb-5 sm:mb-0"
        />
        <div className="w-full relative">
          <h2 className="text-3xl font-bold mb-6">{data?.name}</h2>
          <p className="mt-6 mb-6">
            <span className="font-bold">Знають як:</span> {data?.also_known_as.map((name, index) => <span key={name}>{name}{index !== data?.also_known_as.length - 1 && ','} </span>)}
          </p>
          <p className="mt-6 mb-6">
            <span className="font-bold">Місце народження:</span> {data?.place_of_birth}
          </p>
          <p className="mb-6">
            <span className="font-bold">Народився:</span>{" "}
            {data?.birthday && dayjs(data?.birthday).format(FULL_DATE)}
          </p>
          <SocialMedia links={data?.external_ids} />
          <ImageCarousel images={data?.images.profiles || []}/>
        </div>
      </div>
      {data?.biography && (
        <div>
          <h4 className="text-2xl font-bold mb-8">Біографія</h4>
          <p>{data.biography}</p>
        </div>
      )}
      {data?.movie_credits.cast.length && (
        <section className="mt-12">
          <p className="text-2xl font-bold mb-8">Знімався в</p>
          <ScrollArea>
            <div className="flex w-max space-x-4">
              {data?.movie_credits.cast.map((movie) => {
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
  )
}

export default CastDetailPage;