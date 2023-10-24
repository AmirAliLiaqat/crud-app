import { AxiosResponse, AxiosError } from 'axios';
import { api } from '../utils/api';

interface RegisterData {
    firstname: string;
    lastname: string;
    email: string;
    password: string;
}

interface LoginData {
    email: string;
    password: string;
}

export const registerUser = async (data: RegisterData): Promise<AxiosResponse | undefined> => {
    try {
        return await api.post('/register', data);
    } catch (error) {
        const axiosError = error as AxiosError;
        console.log('Error while calling register user api ', axiosError.message);
    }
}

export const loginUser = async (data: LoginData): Promise<AxiosResponse | undefined> => {
    try {
        return await api.post('/login', data);
    } catch (error) {
        const axiosError = error as AxiosError;
        console.log('Error while calling login user api ', axiosError.message);
    }
}

export const deleteUser = async (userId: string): Promise<AxiosResponse | undefined> => {
    try {
        return await api.delete(`/user/${userId}`);
    } catch (error) {
        const axiosError = error as AxiosError;
        console.log('Error while calling delete user api ', axiosError.message);
    }
}

export const getUsers = async (): Promise<AxiosResponse | undefined> => {
    try {
        return await api.get('/users');
    } catch (error) {
        const axiosError = error as AxiosError;
        console.log('Error while calling get users api ', axiosError.message);
    }
}
