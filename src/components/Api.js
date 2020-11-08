export const API_KEY = process.env.REACT_APP_API_KEY

export const MOVIE_API_URL = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`
export const SHOW_API_URL = `https://api.themoviedb.org/3/tv/top_rated?api_key=${API_KEY}&language=en-US&page=1`
