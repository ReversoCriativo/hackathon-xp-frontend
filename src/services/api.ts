import axios from 'axios';


const api = axios.create({
	baseURL: import.meta.env.VITE_APP_API_URL as string,
});

/** 
 * @todo: add authorization header
 */
api.interceptors.request.use((config) => {
	if (!config?.headers?.private) return config
	config.headers = { ...config.headers, Authorization: `Bearer ${localStorage.getItem('accessToken')}` }
	return config;
});


export default api;