import './News.css';

export default function News({cover, title, description, date}) {
	return (
		<div className='news--wrapper'>
			<div className='news'>
				<div className='news-cover'>
					<img className='cover' src={cover} alt='news cover' />
				</div>
				<div className='news-content'>
					<h5 className='header'>{title}</h5>
					<p className='description'>{description}</p>
					<p className='date'>{date}</p>
				</div>
			</div>
			<a href='/single' className='read-more'>Перейти</a>
		</div>
	);
}