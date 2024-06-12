import IntroduceSection from '../../Components/Sections/IntroduceSection/IntroduceSection';
import WorkersSection from '../../Components/Sections/WorkersSection/WorkersSection';
import WeAreSection from '../../Components/Sections/WeAreSection/WeAreSection';
import PresentationSection from '../../Components/Sections/PresentationSection/PresentationSection';
import JoinTeamSection from '../../Components/Sections/JoinTeamSection/JoinTeamSection';

import './TeamPage.css';

export default function TeamPage() {
	return(
        <main className='main team-page'>
			      <IntroduceSection />
            <WorkersSection />
            <WeAreSection />
            <PresentationSection />
            <JoinTeamSection/>
		</main>	
    );
}