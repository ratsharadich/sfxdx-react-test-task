import axios from 'axios'

const api = axios.create({ baseURL: 'http://178.49.148.49:40010/' })

/** Запрашиваем orders */
export const getOrders = api.get('/getOrders');
