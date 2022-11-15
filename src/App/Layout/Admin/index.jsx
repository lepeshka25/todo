import React from 'react';
import {createTodo} from "../../../API";
import {useData} from "../../../hook/useData";
import cs from './style.module.scss'

const Admin = () => {
	const {setUpdate} = useData()
	const [state , setState] = React.useState({})

	function onSubmit(e){
		e.preventDefault()
		createTodo(state)
			.then(res => {
				setUpdate(state => !state)
			})
	}

	return (
		<div className={cs.admin}>
			<div className={cs.form}>
				<h1>Admin</h1>
				<input
					placeholder={'Title'}
					onChange={e => setState({...state, title: e.target.value})}
					type="text"
				/>
				<input
					placeholder={'Content'}
					onChange={e => setState({...state, content: e.target.value})}
					type="text"
				/>
				<input
					onChange={e => setState({...state, date: e.target.value})}
					type="date"
				/>
				<button onClick={onSubmit}>SUBMIT</button>
			</div>
		</div>
	);
};

export default Admin;