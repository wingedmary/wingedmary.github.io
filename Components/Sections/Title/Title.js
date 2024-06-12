import StoreButtons from './../../StoreButtons/StoreButtons';

import './Title.css';

export default function Title() {
	return (
		<section className='section title-section'>
			<div className='container'>
				<div className='info-block'>
					<h1 className='title'>Живите играя</h1>
					<p className='sub-title'>Лидеры в индустрии мобильных игр</p>
					<StoreButtons/>
				</div>
			</div>
		</section>
	);
}