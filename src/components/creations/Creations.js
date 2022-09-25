import planetIMG from '../../assets/images/desktop/image-deep-earth.jpg';
import nightArcade from '../../assets/images/desktop/image-night-arcade.jpg';
import soccer from '../../assets/images/desktop/image-soccer-team.jpg';
import theGrid from '../../assets/images/desktop/image-grid.jpg';
import fromAbove from '../../assets/images/desktop/image-from-above.jpg';
import borealis from '../../assets/images/desktop/image-pocket-borealis.jpg';
import curiosity from '../../assets/images/desktop/image-curiosity.jpg';
import fisheye from '../../assets/images/desktop/image-fisheye.jpg';
import planetIMGB from '../../assets/images/mobile/image-deep-earth.jpg';
import nightArcadeB from '../../assets/images/mobile/image-night-arcade.jpg';
import soccerB from '../../assets/images/mobile/image-soccer-team.jpg';
import theGridB from '../../assets/images/mobile/image-grid.jpg';
import fromAboveB from '../../assets/images/mobile/image-from-above.jpg';
import borealisB from '../../assets/images/mobile/image-pocket-borealis.jpg';
import curiosityB from '../../assets/images/mobile/image-curiosity.jpg';
import fisheyeB from '../../assets/images/mobile/image-fisheye.jpg';

import { useState, useEffect } from 'react';
import './creations.scss';

function Creations() {
	const [screenWidth, setScreenWidth] = useState(
		window.getComputedStyle(document.querySelector('body')).getPropertyValue('width').slice(0, -2)
	);
	const images =
		+screenWidth > 375
			? [planetIMG, nightArcade, soccer, theGrid, fromAbove, borealis, curiosity, fisheye]
			: [planetIMGB, nightArcadeB, soccerB, theGridB, fromAboveB, borealisB, curiosityB, fisheyeB];
	const names = [
		'Deep earth',
		'Night arcade',
		'Soccer team VR',
		'The grid',
		'From up above VR',
		'Pocket borealis',
		'The curiosity',
		'Make it fisheye',
	];
	return (
		<div className="creations">
			<div className="creations-wrapper">
				<div className="creations-header">
					<div className="creations-title">OUR CREATIONS</div>
					<button className="creations-button">SEE ALL</button>
				</div>
				<div className="creations-items">
					{images.map((item, idx) => {
						return (
							<div key={idx} className="creations-item">
								<img src={item} alt={item} className="creations-item-img" />
								<div className="creations-item-name">{names[idx].toUpperCase()}</div>
							</div>
						);
					})}
				</div>
				<button className="creations-button-small">SEE ALL</button>
			</div>
		</div>
	);
}
export default Creations;
