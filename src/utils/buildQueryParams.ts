import { MoviePageType, MovieParamKeys, MovieParamType, MovieParamsType } from "@app/types/movies/params";

const formatParam = (param: MovieParamType, value?: MovieParamsType[MovieParamKeys]) => {
  switch (param) {
    case "with_genres": {
      return `${param}=${Array.isArray(value) ? value?.join("%2C") : (value || '')}`
    }
    case 'primary_release_date': {
      const currentDate = new Date().toISOString().split('T')[0];

      return `${param}=${currentDate}`
    }
    case "page": {
      return `${param}=${value || 1}`
    }
    case "language":
    case "sort_by":
    case "vote_count.gte":
    default: {
      return `${param}=${value}`
    }
  }
}
export const buildQueryParams = (params: MovieParamsType) => {
  const keys = Object.keys(params) as MovieParamType[];
  return keys.map((param) => {
    return formatParam(param, params[param])
  }).join('&')
}

export const getSortByParam = (type: MoviePageType ) => {
  switch (type) {
    case 'popular': {
      return 'popularity.desc'
    }
    case 'top-rated': {
      return 'vote_average.desc'
    }
    case 'upcoming':
    default: {
      return 'primary_release_date.desc'
    }
  }
}
