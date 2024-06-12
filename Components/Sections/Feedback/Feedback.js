import ContactForm from './../../ContactForm/ContactForm';

import './Feedback.css';

export default function Feedback() {
	return(
		<section className='section feedback-section'>
			<div className='container'>
				
				<div className='feedback-text'>
					<h2 className='section-text--lower'>Присоединяйтесь к нам</h2>
					<p className='section-text--description'>Чтобы поменять ход игры, необходимы лучшие таланты.</p>
				</div>
				<ContactForm/>
			</div>
		</section>	
	);
}