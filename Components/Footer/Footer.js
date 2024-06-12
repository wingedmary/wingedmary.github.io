import { useState } from 'react';
import PrivacyPolicy from './../PrivacyPolicy/PrivacyPolicy';

import './Footer.css';

export default function Footer() {
	const [isPrivacyPolicy, setIsPrivacyPolicy] = useState(false);
	const popupHandler = (e) => {
		e.preventDefault();
		setIsPrivacyPolicy(true);
	}
	return(
		<footer className='footer'>
			<div className='container'>
				<div className='copyrights'>
					<p className='text'>Lorem Ipsum © 2024 Company</p>
				</div>
				<ul className='footer-menu'>
					<li className='item'>
						<a href='!#' className='link'>О нас</a>
					</li>
					<li className='item'>
						<a href='!#' className='link'>Контакты</a>
					</li>
					<li className='item'>
						<a href='!#' className='link' onClick={popupHandler}>Политика конфиденциальности</a>
					</li>
					<li className='item'>
						<a href='!#' className='link'>Условия использования</a>
					</li>
				</ul>
			</div>
			{isPrivacyPolicy ? <PrivacyPolicy close = {setIsPrivacyPolicy}/> : null}
		</footer>
	);
}