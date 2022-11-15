import React from 'react';
import Form from "../../../components/Form";
import {register} from "../../../API";
import cs from './style.module.scss'

const Register = () => {
	const [stateForm , setStateForm] = React.useState({})
	const [checkEmail , setCheckEmail] = React.useState(false)
	const [error , setError] = React.useState('')

	function onSubmit(e){
		e.preventDefault()
		register(stateForm)
			.then(res => {
				setError('')
				setCheckEmail(true)
			})
			.catch(e => {
				setError(e.response.data.message)
			})
	}

	return (
		<div className={cs.register}>
			<Form
				link={'У вас уже есть аккаунт?'}
				error={error}
				checkEmail={checkEmail}
				onSubmit={onSubmit}
				path={'/auth/login'}
				setStateForm={setStateForm}
				stateForm={stateForm}
				title={'Registration'}
			/>
		</div>
	);
};

export default Register;

// {
// 	"accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFzZEBnbWFpbC5jb20iLCJpZCI6IjYzNzNhZjg0OWIyNzdjOGQ0MGNmOTM5MyIsImlzQWN0aXZhdGVkIjpmYWxzZSwiaWF0IjoxNjY4NTI1OTU4LCJleHAiOjE2Njg1Mjc3NTh9.O_fkgQCdwU9JlCBZLU_vL3f6YvewDn1HIAdJsAvD-mY",
// 	"refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFzZEBnbWFpbC5jb20iLCJpZCI6IjYzNzNhZjg0OWIyNzdjOGQ0MGNmOTM5MyIsImlzQWN0aXZhdGVkIjpmYWxzZSwiaWF0IjoxNjY4NTI1OTU4LCJleHAiOjE2NzExMTc5NTh9.5IZN1wLB6BUW9R0AgHMjJCr7CApyUhw-CptPgJ4nfgI",
// 	"user": {
// 	"email": "asd@gmail.com",
// 		"id": "6373af849b277c8d40cf9393",
// 		"isActivated": false
// }
// }