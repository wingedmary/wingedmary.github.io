import RoadmapElement from './RoadmapElement/RoadmapElement';
import RoadmapList from './RoadmapList.json';

import './Roadmap.css';

export default function Roadmap() {
	return(
		<section className='section roadmap-section'>
			<div className='container'>
				<div className='roadmap'>
					{RoadmapList.map((element)=> 
						<RoadmapElement
							key={element.id}
							date={element.date}
							steps={element.steps}
							isActive={element.isActive}
						/>
					)}
					
				</div>
			</div>
		</section>
	);
}