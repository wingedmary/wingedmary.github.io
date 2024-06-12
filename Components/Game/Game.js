import StoreButtons from '../StoreButtons/StoreButtons';

import './Game.css';

export default function Game({placeholder}) {
	return(
		<>
			{!placeholder ? 
				<div className='game-item--wrapper'>
					<div className='game-item-block'>
						<div className='game-item-block--header'>
							<div className='game-item-cover'>
								<a href='!#' className='game-item-cover--link'>
									<img src='https://static.wixstatic.com/media/c837a6_16a98f508d924e89876cfa965dd448ff~mv2.jpg/v1/crop/x_1815,y_679,w_1361,h_1363/fill/w_78,h_78,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/shutterstock_1811519149.jpg' alt='game cover'/>
								</a>
							</div>
							<div className='game-item-title'>
								<h3 className='game-item-title--upper'>Название</h3>
								<p className='game-item-title--lower'>Описание</p>
							</div>
						</div>
						<p className='game-item-block--description'>Это текст. Нажмите и выберите «Редактировать текст» или нажмите дважды, чтобы добавить свой текст и настроить шрифт.</p>
						<div className='game-item-block--links'>
							<StoreButtons/>
							
						</div>
					</div>
				</div>	
			: <div className='game-item--wrapper'> 
				<div className='game-item-block placeholder'></div>
				</div>
			}
		</>	
		
	);
}