
import './AboutCompany.css';

export default function AboutCompany() {


	return (
		<section className='section about-company-section'>
			<div className='container'>
				<div className='container--inner'>
					<div className='section-text'>
						<p className='section-text--upper'>О компании Name</p>
						<h2 className='section-text--lower'>Источник мобильных развлечений</h2>
						<p className='section-text--description'>Это текст. Нажмите и выберите «Редактировать текст» или просто нажмите дважды, чтобы добавить свой текст и настроить шрифт. Расскажите посетителям сайта о себе. Здесь будет удачно смотреться текст о вашей компании и услугах.</p>
						<button className='about-company--details'>Подробнее</button>
						<div className='about-company--demo'>
							<div className='demo--filter'></div>
							<img className='demo--main-image' src='https://static.wixstatic.com/media/c837a6_6f124abbb84f4fceb066cb0cd5eb9e51~mv2.jpg/v1/crop/x_546,y_100,w_2248,h_1281/fill/w_698,h_396,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/shutterstock_1535881442_edited.jpg'/>
						</div>

					</div>
				</div>			
			</div>
		</section>
	);
}