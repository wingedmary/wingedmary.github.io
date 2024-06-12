import Worker from './Worker/Worker';
import WorkersList from './WorkersList.json';

import photo1 from './../../../assets/team/1.jpg';
import photo2 from './../../../assets/team/2.jpg';
import photo3 from './../../../assets/team/3.jpg';
import photo4 from './../../../assets/team/4.jpg';
import photo5 from './../../../assets/team/5.jpg';

import './WorkersSection.css';

const workersPhotos = [photo1, photo2, photo3, photo4, photo5];

export default function WorkersSection() {
	return(
        <section className='section workers-section'>
            <div className='container'>
                <div className='workers-showcase'>
                    <div className='workers-showcase-title'>
                        <p>Наша команда</p>
                    </div>
                    <div className='workers'>
                        {WorkersList.map((worker)=> {
                            return <Worker key={worker.id} name={worker.name} role={worker.role} photo={workersPhotos[worker.id-1]}/>
                        })}
                    </div>
                    
                </div>
            </div>
        </section>
    );
}