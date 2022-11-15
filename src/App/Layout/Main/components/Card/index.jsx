import React from 'react';
import icon from '../../../../../assets/Card/completed.svg'
import {AiFillDelete, AiFillEdit} from "react-icons/ai";
import {GrCompliance} from "react-icons/gr";
import {useData} from "../../../../../hook/useData";
import {changeTodo, completedTodo, deleteTodo} from "../../../../../API";
import cs from './style.module.scss'

const Card = ({title, date, content, id, completed}) => {
	const {setUpdate} = useData()
	const [modal , setModal] = React.useState(false)
	const [db , setDb] = React.useState({
		title: '',
		content: '',
		date: ''
	})

	function Delete(){
		deleteTodo(id)
			.then(res => setUpdate(state => !state))
	}

	function Completed(){
		completedTodo(id)
			.then(res => setUpdate(state => !state))
	}

	function ChangeTodo(e){
		e.preventDefault()
		changeTodo(id , db)
			.then(res => {
				setModal(false)
				setUpdate(state => !state)
			})
		setDb({title: '' , date: '' , content: ''})
	}

	return (
		<div className={cs.card}>

			<div
				onClick={() => setModal(false)}
				style={modal ? {display: 'block'} : {display: 'none'}}
				className={cs.windowModal}
			>
				<div className={cs.container_form}>
					<div onClick={e => e.stopPropagation()} className={cs.form}>
						<h1>Изменить данные</h1>
						<input
							placeholder={'Title'}
							onChange={e => setDb({...db, title: e.target.value})}
							value={db.title}
							type="text"
						/>
						<input
							placeholder={'Content'}
							onChange={e => setDb({...db, content: e.target.value})}
							value={db.content}
							type="text"
						/>
						<input
							onChange={e => setDb({...db, date: e.target.value})}
							type="date"
						/>

						<button onClick={ChangeTodo}>SUBMIT</button>
					</div>
				</div>
			</div>

			<p className={cs.date}>Дата: {date}</p>
			<div className={cs.card_header}>
				<h1>{title}</h1>
				{
					completed && (
						<React.Fragment>
							<img src={icon} className={cs.icon}/>
						</React.Fragment>
					)
				}
			</div>

			<div className={cs.card_body}>
				{content}
			</div>

			<div className={cs.card_footer}>
				<div>
					<AiFillEdit onClick={() => setModal(state => true)} className={cs.icon}/>
				</div>
				<div>
					<GrCompliance onClick={() => Completed()} className={cs.icon}/>
				</div>
				<div>
					<AiFillDelete onClick={() => Delete()} className={cs.icon}/>
				</div>
			</div>

		</div>
	);
};

export default Card;