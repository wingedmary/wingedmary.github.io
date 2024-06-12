import Game from './../../Game/Game';

import './OurGames.css';

export default function OurGames() {
	return (
		<section className='section our-games-section'>
			<div className='container'>
				<div className='container--inner'>
					<div className='section-text'>

						<h2 className='section-text--lower'>Источник мобильных развлечений</h2>
						<p className='section-text--description'>Это текст. Нажмите и выберите «Редактировать текст» или просто нажмите дважды, чтобы добавить свой текст и настроить шрифт. Расскажите посетителям сайта о себе. Здесь будет удачно смотреться текст о вашей компании и услугах.</p>

					</div>
				</div>
			</div>
			<div className='our-games-showcase--background'>
				<div className='container'>	
					<div className='our-games-showcase'>
						<Game/>
						<Game/>
						<Game/>
						<Game placeholder/>
					</div>	
				</div>		
			</div>
		</section>
	);
}