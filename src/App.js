import React from 'react';
import * as Layout from './App/Layout'
import * as Auth from './App/Auth'
import {Route, Routes} from "react-router-dom";
import {CheckAuth} from "./components/CheckAuth";
import Header from "./components/Header";

	const App = () => {
	return (
		<React.Fragment>
			<Header/>
      <Routes>
				<Route path={'/'} element={<CheckAuth/>}>
					<Route path={'/'} element={<Layout.Main/>}/>
					<Route path={'/admin'} element={<Layout.Admin/>}/>
				</Route>
				<Route path={'/auth/login'} element={<Auth.Login/>}/>
				<Route path={'/auth/register'} element={<Auth.Register/>}/>
			</Routes>
		</React.Fragment>
	);
};

export default App;

// Основные роуты api:
//
// /registration - для регистрации(в response получаем access_token)
// /login  - для авторизации (в response получаем access_token)
// /logout - для выхода с аккаунта нужно отправить refresh_token
// /todos/create - для создания todo(в запросах headers передать ключ  'Authorization':`Bearer ${accessToken}`)
// /todos/${id} - для DELETE конкретного todo по id
// /todos/${id} - для EDIT конкретного todo по id
// /todos/${id}/completed - чтобы задать статус completed по определённому todo
// /todos - для GET всех todo
// /todos/${id} - для GET конкретного todo по id