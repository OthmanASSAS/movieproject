import apiMovieRequest from '../../conf/api.movie';

export const REQUEST_MOVIES = 'request_movies';
export const FETCH_MOVIES = 'fetch_movies';
export const FETCH_MOVIES_SUCCESS = 'fetch_movies_success';
export const FETCH_MOVIES_ERROR = 'fetch_movies_error';
export const SET_SELECTED_MOVIE = 'set_selected_movies';

export const requestMovies = () => ({ type: REQUEST_MOVIES });

export const fetchMoviesSuccess = (movies) => ({
  type: FETCH_MOVIES_SUCCESS,
  movies,
});

export const fetchMoviesError = (error) => ({
  type: FETCH_MOVIES_ERROR,
  error,
});

export const fetchMovies = (filter) => (dispatch) => {
  dispatch(requestMovies());
  const query =
    '?' +
    Object.keys(filter)
      .map((key) => `${key}=${filter[key]}&`)
      .join('');
  return apiMovieRequest.searchMovies(filter).then(
    (movies) => dispatch(fetchMoviesSuccess(movies)),
    (error) => dispatch(fetchMoviesError(error))
  );
};

export const setSelectedMovie = (index) => ({
  type: SET_SELECTED_MOVIE,
  index,
});
