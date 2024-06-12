import './WeAreSection.css';

import TextBlock from './TextBlock/TextBlock';

const textBlockInfo = [
    {
        id: 0,
        title : 'Accomplishment',
        description: `1. I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you.`,
    },
    {
        id: 1,
        title : 'Creativity',
        description: `2. I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you.`
    },
    {
        id: 2,
        title : 'Community',
        description: `3. I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you.`
    },
]

export default function WeAreSection() {
	return(
        <section className='section we-are-section'>
            <div className='container--inner'>
                <h2 className='title'>What We Are About</h2>
                <div className='block-content'>
                    {textBlockInfo.map((textBlock)=> {
                        return <TextBlock key={textBlock.id} title={textBlock.title} description={textBlock.description}/>
                    })}
                </div>
            </div>    
            
        </section>
    );
}