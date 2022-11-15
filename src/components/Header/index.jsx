import React from 'react';
import burger from '../../assets/Header/burger.svg'
import {GrShieldSecurity} from "react-icons/gr";
import {IoMdExit} from "react-icons/io";
import {Link, useNavigate} from "react-router-dom";
import {logout} from "../../API";
import {useData} from "../../hook/useData";
import cs from './style.module.scss'

const Header = () => {
	const [state , setState] = React.useState(false)
	const {setUpdate} = useData()
	const navigate = useNavigate()

	function Exit(){
		logout()
			.then(res => {
				console.log(res)
				localStorage.clear()
				setUpdate(state => !state)
				setState(false)
				navigate('/auth/login')
			})
	}

	return (
		<div style={state ? {height: "fit-content"} : {height: "60px"}} className={cs.header}>
			<div className={cs.header_top}>
				<h2 className={cs.logo}>
					<Link className={cs.link} to={'/'}>
						TODO API
					</Link>
				</h2>
				{
					localStorage.getItem('accessToken') && (
						<React.Fragment>
							<img
								onClick={() => setState(state => !state)}
								className={cs.burger}
								src={burger}
								alt=""
							/>
						</React.Fragment>
					)
				}
			</div>
			<div className={cs.header_bottom}>

				<Link onClick={() => setState(false)} className={cs.link} to={'/admin'}>
					<GrShieldSecurity className={cs.icon}/>
					admin
				</Link>

				<button onClick={() => Exit()} className={cs.link} to={'/'}>
					<IoMdExit className={cs.icon}/>
					exit
				</button>

			</div>
		</div>
	);
};

export default Header;