import apiFirebaseRequest from '../../conf/api.firebase';

export const REQUEST_FAVORIS = 'request_favoris';
export const FETCH_FAVORIS = 'fetch_favoris';
export const FETCH_FAVORIS_SUCCESS = 'fetch_favoris_success';
export const FETCH_FAVORIS_ERROR = 'fetch_favoris_error';

export const TRY_ADD_FAVORI = 'try_add_favoris';
export const ADD_FAVORI_SUCCESS = 'add_favoris_success';
export const ADD_FAVORI_ERROR = 'add_favoris_error';

export const TRY_REMOVE_FAVORI = 'try_remove_favoris';
export const REMOVE_FAVORI_SUCCESS = 'remove_favoris_success';
export const REMOVE_FAVORI_ERROR = 'remove_favoris_error';

export const requestFavoris = () => ({ type: REQUEST_FAVORIS });

export const fetchFavorisSuccess = (favoris) => ({
  type: FETCH_FAVORIS_SUCCESS,
  favoris,
});

export const fetchFavorisError = (error) => ({
  type: FETCH_FAVORIS_ERROR,
  error,
});

export const fetchFavoris = () => (dispatch) => {
  dispatch(requestFavoris());

  return apiFirebaseRequest.then(
    (favoris) => dispatch(fetchFavorisSuccess(favoris)),
    (error) => dispatch(fetchFavorisError(error))
  );
};

export const addFavoriSuccess = (favoris) => ({
  type: ADD_FAVORI_SUCCESS,
  favoris,
});

export const addFavoriError = (error) => ({
  type: ADD_FAVORI_ERROR,
  error,
});

export const tryAddFavori = (movie) => (dispatch, getState) => {
  const favoris = [...getState().favoris.data, movie];
  return apiFirebaseRequest.saveFavoris(favoris).then(
    () => dispatch(addFavoriSuccess(favoris)),
    (error) => dispatch(addFavoriError(error))
  );
};

export const removeFavoriSuccess = (favoris) => ({
  type: REMOVE_FAVORI_SUCCESS,
  favoris,
});

export const removeFavoriError = (error) => ({
  type: REMOVE_FAVORI_ERROR,
  error,
});

export const tryRemoveFavori = (title) => (dispatch, getState) => {
  const favoris = [...getState().favoris.data].slice();
  const index = favoris.findIndex((f) => f.title === title);
  favoris.splice(index, 1);
  return apiFirebaseRequest.saveFavoris(favoris).then(
    () => dispatch(removeFavoriSuccess(favoris)),
    (error) => dispatch(removeFavoriError(error))
  );
};
