
import './PrivacyPolicy.css';

export default function PrivacyPolicy({close}) {
	return(
		<div className='privacy-policy-overlay'>
            <div className='privacy-policy'>
                <h4 className='title'>Политика конфиденциальности</h4>
                <p className='description'>
                I'm a paragraph. Click here to add your own text and edit me. It’s easy. <wbr/>Just click “Edit Text” or double click me to add your own content and make changes to the font.<wbr/> Feel free to drag and drop me anywhere you like on your page.<wbr/> I’m a great place for you to tell a story and let your users know a little more about you.
                <br/><br/>    
                This is a great space to write a long text about your company and your services.<wbr/> You can use this space to go into a little more detail about your company.<wbr/> Talk about your team and what services you provide.<wbr/> Tell your visitors the story of how you came up with the idea for your business and what makes you different from your competitors.<wbr/> Make your company stand out and show your visitors who you are.
                </p>
                <button className='close' onClick={()=>close(false)}>Закрыть</button>
            </div>
        </div>
	);
}