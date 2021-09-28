import axios from 'axios';
import { API_URL } from '@/constants';

const $api = axios.create({
  withCredentials: true,
  baseURL: API_URL
});

export default $api;
