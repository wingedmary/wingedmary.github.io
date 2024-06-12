import Title from '../../Components/Sections/Title/Title';
import Gallery from '../../Components/Sections/Gallery/Gallery';
import AboutCompany from '../../Components/Sections/AboutCompany/AboutCompany';
import OurGames from '../../Components/Sections/OurGames/OurGames';
import Feedback from '../../Components/Sections/Feedback/Feedback';

import './HomePage.css';

export default function HomePage() {
	return(
		<main className='main home-page'>
			<Title />
			<Gallery/>
			<AboutCompany />
			<OurGames/>
			<Feedback/>
		</main>
	)
}

