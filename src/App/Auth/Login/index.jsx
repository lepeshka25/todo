import React from 'react';
import Form from "../../../components/Form";
import {login} from "../../../API";
import {useNavigate} from "react-router-dom";
import cs from './style.module.scss'

const Login = () => {
	const navigate = useNavigate()
	const [stateForm , setStateForm] = React.useState({})
	const [error , setError] = React.useState('')
	const [noActive , setNoActive] = React.useState(false)

	function onSubmit(e){
		e.preventDefault()
		login(stateForm)
			.then(res => {
				if(res?.data?.user?.isActivated){
					localStorage.clear()
					localStorage.setItem('accessToken', res.data?.accessToken)
					localStorage.setItem('refreshToken', res.data?.refreshToken)
					localStorage.setItem('user', JSON.stringify(res.data?.user))
					localStorage.setItem('isActivated', res.data?.user?.isActivated)
					navigate('/')
				}else {
					setNoActive(true)
				}
			})
			.catch(e => {
				setError(e.response.data.message)
			})
	}

	return (
		<div className={cs.login}>
			<Form
				link={'У вас еще нету аккаунта ?'}
				error={error}
				noActive={noActive}
				onSubmit={onSubmit}
				path={'/auth/register'}
				setStateForm={setStateForm}
				stateForm={stateForm}
				title={'Authorization'}
			/>
		</div>
	);
};

export default Login;