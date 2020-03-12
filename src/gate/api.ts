import axios, { AxiosResponse } from 'axios';

const instance = axios.create({
	baseURL: 'https://identitytoolkit.googleapis.com/v1'
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
	(response) => {
		console.log(response);
		return response;
	},
	error => {
		debugger;
		if (error.response.status === 401) {
			console.log('401');
			return Promise.resolve();
		}

		return Promise.reject(error);
	}
);
export default instance;
