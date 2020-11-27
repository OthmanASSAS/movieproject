import * as axios from 'axios';

const apiFirebase = axios.create({
  baseURL: 'https://films-a9cc1.firebaseio.com/',
});

export const apiFirebase;

export default {
  fetchFavoris: () =>
    apiFirebase
      .get('favoris.json')
      .then((response) => (response.data ? response.data : []))
      .catch((err) => console.log(err)),
  saveFavoris: (favoris) => apiFirebase.put('favoris.json', favoris),
};
