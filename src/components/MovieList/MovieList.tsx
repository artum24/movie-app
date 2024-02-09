import { GenreType, MovieType } from '@app/types/movies/movie'
import { MovieCard } from '@app/components/MovieCard/MovieCard'

type MovieListProps = {
  movies?: MovieType[]
  genres?: GenreType[]
  imageStyles?: string
}

export const MovieList = ({ movies, genres, imageStyles }: MovieListProps) => {
  return movies?.map((movie) => {
    const movieGenres: GenreType[] = []
    movie.genre_ids.forEach((genreId) => {
      const selectedGenre = genres?.find(
        (movieGenre) => movieGenre.id === genreId
      )
      if (selectedGenre) {
        movieGenres.push(selectedGenre)
      }
    })
    return (
      <MovieCard
        imageStyles={imageStyles || ''}
        movieGenres={movieGenres}
        movie={movie}
        key={movie.id}
      />
    )
  })
}
