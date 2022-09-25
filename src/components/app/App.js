import Header from '../header/Header';
import NavMenu from '../navMenu/NavMenu';
import Interactive from '../interactive/Interactive';
import Creations from '../creations/Creations';
import Footer from '../footer/Footer';
import './app.scss';

function App() {
	return (
		<div className="app">
			<NavMenu />
			<Header />
			<Interactive />
			<Creations />
			<Footer />
			{/*		<div className="attribution">
				Challenge by{' '}
				<a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
					Frontend Mentor
				</a>
				. Coded by <a href="#">Konstantin</a>.
			</div> */}
		</div>
	);
}

export default App;
