import axios from 'axios'

import { BASE_URL } from './constants';

export const api = axios.create({ baseURL: BASE_URL });

/** Запрашиваем orders */
export const getOrders = api.get('/getOrders');