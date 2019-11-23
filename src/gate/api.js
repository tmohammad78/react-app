import axios from 'axios';
import store from 'services/store';

const instance = axios.create({
  baseURL: 'https://restaurant.delino.com/restaurant'
});

instance.interceptors.request.use(
  (request) => {
    const data = JSON.parse(localStorage.getItem('token'));
    if (data) {
      request.headers['Authorization'] = 'Bearer' + data.auth.accessToken;
    }
    return request;
  },
  (error) => {
    Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status == 401) {
      store.dispatch(refreshToken());
      Promise.resolve();
    }
    Promise.reject(error);
  }
);

export default instance;
