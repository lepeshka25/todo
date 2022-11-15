import axios from 'axios'

const baseURL = 'https://todo-itacademy.herokuapp.com/api'

export const instance = axios.create({baseURL})