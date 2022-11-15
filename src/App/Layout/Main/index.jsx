import React from 'react';
import Card from "./components/Card";
import {useData} from "../../../hook/useData";
import cs from './style.module.scss'

const Main = () => {
	const {data, setUpdate} = useData()

	React.useEffect(() => {
		setUpdate(state => !state)
		// eslint-disable-next-line
	}, [])

	return (
		<div className={cs.main}>
			<div className={cs.container_count}>
				<h1>Todo count: <span className={cs.count}>{data?.todosCount}</span></h1>
			</div>
			<div className={cs.main_container}>
				{
					data?.todos?.map((item) => (
						<Card
							key={item.id}
							content={item.content}
							date={item.date}
							title={item.title}
							id={item.id}
							completed={item.completed}
						/>
					))
				}
			</div>
		</div>
	);
};

export default Main;