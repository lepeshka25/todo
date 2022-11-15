import {instance} from "./config";

const accessToken = localStorage.getItem('accessToken')
const refreshToken = localStorage.getItem('refreshToken')
let config = {
	headers: {
		'Authorization':`Bearer ${accessToken}`
	}
}


export const register = (data) => instance.post(`/registration` , data)

export const login = (data) => instance.post(`/login` , data)

export const createTodo = (data) => instance.post(`/todos/create/`, data, config)

export const getTodos = () => instance.get('/todos', config)

export const deleteTodo = (id) => instance.delete(`/todos/${id}`, config)

export const completedTodo = (id) => instance.get(`/todos/${id}/completed`, config)

export const changeTodo = (id , data) => instance.put(`/todos/${id}`, data, config)

export const logout = () => instance.post(`/logout`,{refreshToken})