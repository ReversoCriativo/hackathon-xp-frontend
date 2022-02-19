import axios from 'axios';


const api = axios.create({
	baseURL: import.meta.env.VITE_APP_API_URL as string,
});

/** 
 * @todo: add authorization header
 */
api.interceptors.request.use((config) => {
	return config;
});


export default api;