import SingleNewsContent from '../../Components/SingleNewsContent/SingleNewsContent';
import NewsSidebar from '../../Components/NewsSidebar/NewsSidebar';

import './SingleNewsPage.css';

export default function SingleNewsPage() {
    return (
        <main className='main single-news-page'>
            <section className='section'>
                <div className='container'>
                    <SingleNewsContent />
                    <NewsSidebar />
                </div>
            </section>
            
		</main>
    );
}