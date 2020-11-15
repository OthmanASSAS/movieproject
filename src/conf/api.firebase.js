import * as axios from 'axios';

const apiFirebase = axios.create({
  baseURL: 'https://films-a9cc1.firebaseio.com/'
});

export default apiFirebase;