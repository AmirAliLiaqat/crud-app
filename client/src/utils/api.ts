import axios, { AxiosResponse, AxiosError } from 'axios';
import { getLocalStorageValue } from './localStorage';

const URL = 'http://localhost:8000';

export const api = axios.create({
  baseURL: `${URL}`, 
});

// request interceptors
api.interceptors.request.use(
    (config) => {
        const token = getLocalStorageValue('token');

        if(token) {
            config.headers.authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error: AxiosError) => {
        return Promise.reject(error);
    }
);

// response interceptors
api.interceptors.response.use(
    (response: AxiosResponse) => {
        return response
    },
    (error: AxiosError) => {
        return Promise.reject(error);
    }
)