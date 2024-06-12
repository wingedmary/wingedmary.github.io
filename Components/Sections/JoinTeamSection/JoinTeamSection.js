import { useState } from 'react';
import ContactForm from '../../ContactForm/ContactForm';
import './JoinTeamSection.css';

export default function JoinTeamSection() {
    const [showForm, setShowForm] = useState(false);
	return(
		<section className='section join-team-section'>
			<div className='container'>
				<div className='join-team-widged'>
                    <div>
                        <div className='text-content'>
                            <p className='upper-title'>Launch On Risebot</p>
                            <p className='lower-title'>Full support in project incubation</p>
                        </div>
                        {!showForm ? <button className='get-form' onClick={()=>setShowForm(true)}>Join Team</button> : null}
                    </div>

                    {showForm ? <ContactForm expanded /> : null}
                </div>
			</div>
		</section>
	)
}

