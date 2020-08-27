import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';

const instance = axios.create({
  baseURL: 'https://identitytoolkit.googleapis.com/v1',
});
declare module 'axios' {
  export interface AxiosRequestConfig {
    baseURL?: string | undefined;
    email?: string;
    password?: string;
    returnSecureToken?: boolean;
  }
}
// const config: AxiosRequestConfig = {
// 	baseURL: 'https://identitytoolkit.googleapis.com/v1',
// 	headers: { 'X-FOO': 'bar' },
// 	timeout: 10000,
// 	auth: {
// 		username: 'janedoe',
// 		password: 's00pers3cret'
// 	},
// };

instance.interceptors.request.use(
  (config) => {
    // const dataLocal: string = window.localStorage.getItem('token');
    // const data = JSON.parse(dataLocal);
    // if (data) {
    // 	request.headers['Authorization'] = 'Bearer ' + data.auth.accessToken;
    // }
    return config;
  },
  (error) => {
    debugger;
    Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    console.log(response);
    return response;
  },
  (error) => {
    debugger;
    if (error.response.status === 401) {
      console.log('401');
      return Promise.resolve();
    }

    return Promise.reject(error);
  }
);
export default instance;
