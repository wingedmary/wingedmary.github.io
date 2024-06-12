import ContactForm from '../../Components/ContactForm/ContactForm';

import location from './../../assets/location-filled-svgrepo-com.svg';
import phone from './../../assets/phone-svgrepo-com.svg';
import email from './../../assets/mail-svgrepo-com.svg';

import './ContactsPage.css';

export default function ContactsPage() {
	return(
		<main className='main contacts-page'>
			<section className='section contact-section'>
				<div className='container'>
					<div className='section-text'>
						<h2 className='section-text--lower'>Свяжитесь с нами</h2>
					</div>
					<ul className='contact-details'>
						<li className='item'>
							<div className='icon'>
								<img src={location} alt='location' />
							</div>
							<div className='content'>
								<div className='inner'>
									<p className='upper'>Адрес</p>
									<p className='lower'>1901 Thornridge <wbr/> Cir. Shiloh, <wbr/>Hawaii 81063</p>
								</div>
							</div>
						</li>
						<li className='item'>
							<div className='icon'>
								<img src={phone} alt='phone' />
							</div>
							<div className='content'>
								<div className='inner'>
									<p className='upper'>Телефон</p>
									<p className='lower'>+33 7 00 55 57 60</p>
								</div>
							</div>	
						</li>
						<li className='item'>
							<div className='icon'>
								<img src={email} alt='email' />
							</div>
							<div className='content'>
								<div className='inner'>
									<p className='upper'>Email</p>
									<p className='lower'>test@mail.com</p>
								</div>
							</div>
						</li>
					</ul>
				</div>
				<ContactForm/>
			</section>	
		</main>	
		
	);
}