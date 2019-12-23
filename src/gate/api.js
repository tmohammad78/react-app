import axios from 'axios';
// import store from '../store/store';
// import { refreshToken } from '../store/Auth/action';

const instance = axios.create({
  baseURL:
    'https://identitytoolkit.googleapis.com/v1'
});

instance.interceptors.request.use(
  request => {
    const data = JSON.parse(localStorage.getItem('token'));
    if (data) {
      request.headers['Authorization'] = 'Bearer ' + data.auth.accessToken;
    }

    return request;
  },
  error => {
    debugger;
    Promise.reject(error);
  }
);

instance.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    debugger;
    if (error.response.status === 401) {
      console.log('401');
      //   store.dispatch(refreshToken());
      return Promise.resolve();
    }

    return Promise.reject(error);
  }
);
export default instance;
