import React from 'react';
import burger from '../../assets/Header/burger.svg'
import {GrShieldSecurity} from "react-icons/gr";
import {IoMdExit} from "react-icons/io";
import cs from './style.module.scss'
import {Link} from "react-router-dom";

const Header = () => {
	const [state , setState] = React.useState(false)
	return (
		<div style={state ? {height: "fit-content"} : {height: "60px"}} className={cs.header}>
			<div className={cs.header_top}>
				<h2 className={cs.logo}>TODO API</h2>
				<img
					onClick={() => setState(state => !state)}
					className={cs.burger}
					src={burger}
					alt=""
				/>
			</div>
			<div className={cs.header_bottom}>

				<Link className={cs.link} to={'/admin'}>
					<GrShieldSecurity className={cs.icon}/>
					admin
				</Link>

				<Link className={cs.link} to={'/'}>
					<IoMdExit className={cs.icon}/>
					exit
				</Link>

			</div>
		</div>
	);
};

export default Header;