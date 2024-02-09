import { MoviePageType } from '@app/types/movies/params'

type HeaderLink = { type: MoviePageType; name: string; path: string }

export const headerLinks: HeaderLink[] = [
  {
    type: 'popular',
    name: 'Популярні',
    path: '/movies/popular'
  },
  {
    type: 'top-rated',
    name: 'Топ оцінка',
    path: '/movies/top-rated'
  },
  {
    type: 'upcoming',
    name: 'Скоро в кіно',
    path: '/movies/upcoming'
  }
]
