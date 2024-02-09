import { MovieType } from '@app/types/movies/movie'

export type CastType = {
  adult: boolean
  also_known_as: string[]
  biography: string
  birthday: string
  deathday: string | null
  gender: number
  homepage: string | null
  id: number
  imdb_id: string
  known_for_department: string
  name: string
  place_of_birth: string
  popularity: number
  profile_path: string
  movie_credits: {
    cast: MovieType[]
    crew: MovieType[]
  }
  images: {
    profiles: ImageType[]
  }
  external_ids: SocialMediaType
}

export type ImageType = {
  aspect_ratio: number
  height: number
  width: number
  iso_639_1: string
  file_path: string
  vote_average: number
  vote_count: number
}

export type SocialMediaType = {
  freebase_mid: string
  freebase_id: string
  imdb_id: string
  tvrage_id: number
  wikidata_id: string
  facebook_id: string
  instagram_id: string
  tiktok_id: string
  twitter_id: string
  youtube_id: string
}
