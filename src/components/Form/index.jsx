import React from 'react';
import {Link} from "react-router-dom";
import cs from './style.module.scss'

const Form = ({stateForm, setStateForm, title, path, onSubmit, checkEmail , noActive, error, link}) => {
	return (
		<div className={cs.form}>
			<div className={cs.logo}>
				<h1>{title}</h1>
			</div>
			<div className={cs.form_body}>
				<input
					placeholder={'Email'}
					type="email"
					onChange={e => setStateForm({...stateForm, email: e.target.value})}
				/>
				<input
					placeholder={'password'}
					type="password"
					onChange={e => setStateForm({...stateForm, password: e.target.value})}
				/>
				<button onClick={onSubmit}>{title}</button>
				<div style={noActive ? {display: 'block'} : {display: 'none'}} className={cs.container_text}>
					<p>ваша почта не активирована !!</p>
					<p>проверьте почту !!!</p>
				</div>
				<div style={checkEmail ? {display: 'block'} : {display: 'none'}} className={cs.container_text}>
					<p>На вашу почту отправлено, ссылка на активацию аккаунта!!</p>
					<p>Активируйте аккаунт и войдите в аккаунт!!</p>
				</div>
				<div className={cs.container_text}>
					<p>{error}</p>
				</div>
			</div>
			<div className={cs.footer}>
				<Link to={path}>{link}</Link>
			</div>
		</div>
	);
};

export default Form;