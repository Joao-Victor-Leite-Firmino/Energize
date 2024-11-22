import axios from 'axios';
import { Record } from '../types/apiTypes';

// Criação da instância Axios
const api = axios.create({
  baseURL: 'http://localhost:3000/api',
});

export const login = (username: string, password: string) =>
  api.post('/users/login', { username, password });

export const fetchRecords = () => api.get<Record[]>('/records');

export const addRecord = (record: Record) => 
    api.post('/records', record);

export const updateRecord = (id: number, record: Partial<Record>) =>
  api.put(`/records/${id}`, record);

export const deleteRecord = (id: number) =>
  api.delete(`/records/${id}`);


