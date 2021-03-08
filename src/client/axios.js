import axios from 'axios';

const api = axios.create({
  baseURL: 'https://run.mocky.io/v3/e141ae7f-03e1-4efb-b2ae-4484eb906b51',
});

export default api;