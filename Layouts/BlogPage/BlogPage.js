import News from './News/News';
import NewsList from './NewsList.json';

import './BlogPage.css';

export default function BlogPage() {
	return (
		<main className='main blog-page'>
			<section className='section blog-section'>
				<div className='container--inner'>
					{NewsList.map((item)=><News 
											key={item.id}
											cover={item.cover}
											title={item.title}
											description={item.description}
											date={item.date}
											/>)}
				</div>
			</section>
		</main>	
	);
}