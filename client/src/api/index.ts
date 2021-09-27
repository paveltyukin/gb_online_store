import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { API_URL } from '@/constants';

const $api = axios.create({
  withCredentials: true,
  baseURL: API_URL
});

$api.interceptors.request.use((config: AxiosRequestConfig) => {
  const token = localStorage.getItem('token') ?? '';
  config.headers.Authorization = `Bearer ${token}`
  return config;
});

$api.interceptors.response.use((config: AxiosResponse) => {
  return config;
},async (error) => {
  const originalRequest = error.config;
  if (error.response.status == 401 && error.config && !error.config._isRetry) {
    originalRequest._isRetry = true;

    try {
      const response = await axios.get(`${API_URL}/refresh-tokens`, { withCredentials: true })
      localStorage.setItem('token', response.data.token);

      return $api.request(originalRequest);
    }
    catch (e) {
      window.location.href = '/';
      console.log('НЕ АВТОРИЗОВАН')
    }
  }
  throw error;

});

export default $api;