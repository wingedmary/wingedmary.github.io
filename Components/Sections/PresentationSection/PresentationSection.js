import './PresentationSection.css';

import cover from './../../../assets/title-bg-orange.jpg';

export default function PresentationSection() {
	return(
        <section className='section presentation-section'>
            <div className='section-content'>
                <div className='image-block'>
                    <img src={cover}/>
                </div>
                <div className='text-block'>
                    <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.</p>
                        <br/>
                    <p>This is a great space to write a long text about your company and your services. You can use this space to go into a little more detail about your company. Talk about your team and what services you provide. Tell your visitors the story of how you came up with the idea for your business and what makes you different from your competitors. Make your company stand out and show your visitors who you are.</p>
                </div>
            </div>
            
        </section>
    );
}