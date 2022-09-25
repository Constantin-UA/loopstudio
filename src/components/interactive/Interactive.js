import interimg from '../../assets/images/desktop/image-interactive.jpg';
import './interactive.scss';

function Interactive() {
	return (
		<section className="interactive">
			<div className="interactive-wrapper">
				<div className="interactive-img">
					<img src={interimg} alt="interactive" />
				</div>
				<div className="interactive-description">
					<div className="interactive-title">THE LEADER IN INTERACTIVE VR</div>
					<div className="interactive-text">
						Founded in 2011, Loopstudios has been producing world-class virtual reality projects for
						some of the best companies around the globe. Our award-winning creations have
						transformed businesses through digital experiences that bind to their brand.
					</div>
				</div>
			</div>
		</section>
	);
}
export default Interactive;
