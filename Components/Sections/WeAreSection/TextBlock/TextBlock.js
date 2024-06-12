import './TextBlock.css';

export default function TextBlock({title, description}) {
	return(
        <div className='we-are wrapper'>
            <div className='we-are text-block'>
                <h3 className='title'>{title}</h3>
                <p className='description'>{description}</p>
            </div>
        </div>
    );
}