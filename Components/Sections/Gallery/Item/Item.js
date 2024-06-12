import './Item.css';

import cover from './../../../../assets/showcase-ghost.webp';

export default function Item() {
	return(
		<div className='gallery-item-container'>
			
			<img className='gallery-item--background' src={cover} alt='showcase cover'/>
			<div className='gallery-item--title'>
				<h3 className='gallery-item---upper'>Название</h3>
				<p className='gallery-item---lower'>Описание</p>
			</div>
			
		
		</div>
	);
}