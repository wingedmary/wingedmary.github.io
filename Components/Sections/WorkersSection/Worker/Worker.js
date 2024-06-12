import './Worker.css';

export default function Worker({name, role, photo}) {
	return(
        <div className='workers-showcase-wrapper'>
            <div className='workers-showcase--item'>
                <div className='photo'>
                    <img src={photo} alt='photo'/>
                </div>
                <div className='description'>
                    <p className='name'>{name}</p>
                    <p className='role'>{role}</p>
                </div>
            </div>
        </div>
    );
}