import {Navigate, Outlet} from "react-router-dom";

export const CheckAuth = () => {
	const isActive = JSON.parse(localStorage.getItem('isActivated'))
	const accessToken = localStorage.getItem('accessToken')

	if(!isActive){
		localStorage.clear()
		return <Navigate to={'/auth/register'}/>
	}

	if(!accessToken){
		localStorage.clear()
		return <Navigate to={'/auth/register'}/>
	}

	return <Outlet/>
}