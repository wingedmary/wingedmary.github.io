import NewsSidebarItem from './NewsSidebarItem/NewsSidebarItem';
import NewsList from './../../Layouts/BlogPage/NewsList.json';

import './NewsSidebar.css';

export default function NewsSidebar() {
	return (
		<div className='news-sidebar'>
			{NewsList.map((item)=> {
				return <NewsSidebarItem key={item.id} cover={item.cover} title={item.title}/>
			})}
		</div>
	);
}