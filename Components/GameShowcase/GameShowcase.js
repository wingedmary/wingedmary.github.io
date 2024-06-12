function GameShowcase() {
	return(
		
		<div className='showcase'>
			<div className='showcase-cover'>
				<h3 className='title'>Forest</h3>
			</div>
			<div className='showcase-actions'>
				<ul className='action-list'>
					<li className='item'>
						<div className='icon'></div>
						<span className='title'>1.6K</span>
					</li>
					<li className='item'>
						<div className='icon'></div>
						<span className='title'>6.9K</span>
					</li>
					<li className='item'>
						<div className='icon'></div>
						<span className='title'>Share</span>
					</li>
					<li className='item'>
						<div className='icon'></div>
						<span className='title'>More</span>
					</li>
				</ul>

				<button className='start-game'>Play</button>
			</div>
		</div>
			
	);
}