import './NewsSidebarItem.css';

export default function NewsSidebarItem({cover, title}) {

	return (
        <div className='sidebar-item' style={{"backgroundImage": `url(${cover})`}}>
            <a href="!#" className='link'>{title}</a>
        </div>
	);
}