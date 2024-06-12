import Item from './Item/Item';

import './Gallery.css';

export default function Gallery() {
	return (
		<section className='section gallery-section'>
			<div className='container'>
				<div className='gallery-showcase'>
					<Item/>
					<Item/>
					<Item/>
					<Item/>
				</div>	
			</div>
		</section>
	);
}