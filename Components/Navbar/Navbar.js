import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import './Navbar.css';

const navbarLinks = [
	{
		"id": 1,
		"title": "Главная",
		"path": "/"
	},
	{
		"id": 2,
		"title": "Игры",
		"path": "/games"
	},
	{
		"id": 3,
		"title": "Команда",
		"path": "/team"
	},
	{
		"id": 4,
		"title": "Блог",
		"path": "/blog"
	},
	{
		"id": 5,
		"title": "Обратная связь",
		"path": "/contacts"
	}
]

function Navbar() {
	const [isActive, setIsActive] = useState(false);

	useEffect(()=> {
		const overflow = document.body;
		isActive ? overflow.classList.add('hide-overflow') : overflow.classList.remove('hide-overflow');
	}, [isActive]);

	return(
			<nav className={isActive ? 'navbar active' :'navbar'}>
				<div className='navbar-content'>
					<div className={isActive ? 'burger-menu active' :'burger-menu'} onClick={()=>setIsActive(!isActive)}>
						<div className='burger-menu-inner'>
							<span className='burger-menu-item top'></span>
							<span className='burger-menu-item middle'></span>
							<span className='burger-menu-item bottom'></span>
						</div>
					</div>
					<ul className='navbar-menu'>
						{
							navbarLinks.map((link)=> {
								return (
									<li key={link.id} className='navbar-menu-item'>
										<NavLink to={link.path} className='navbar-menu-link' onClick={()=>setIsActive(false)}>
											{link.title}
										</NavLink>
									</li>
							)})
						}

					</ul>
				</div>
			</nav>
	);
}

export default Navbar;