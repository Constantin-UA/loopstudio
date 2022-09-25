import FacebookLogo from '../../assets/images/icon-facebook.svg';
import TwitterLogo from '../../assets/images/icon-twitter.svg';
import PinterestLogo from '../../assets/images/icon-pinterest.svg';
import InastagramLogo from '../../assets/images/icon-instagram.svg';
import './footer.scss';

function Footer() {
	return (
		<section id="support" className="footer">
			<div className="footer-wrapper">
				<div className="footer-logo">loopstudios</div>
				<div className="footer-social">
					<img src={FacebookLogo} alt="facebook" />
					<img src={TwitterLogo} alt="twitter" />
					<img src={PinterestLogo} alt="pinterest" />
					<img src={InastagramLogo} alt="instagram" />
				</div>
				<ul className="footer-menu-wrapper">
					<li className="footer-menu-item">
						<a href="#About" className="footer-menu-item-a">
							About
						</a>
					</li>
					<li className="footer-menu-item">
						<a href="#Coreers" className="footer-menu-item-a">
							Coreers
						</a>
					</li>
					<li className="footer-menu-item">
						<a href="#Events" className="footer-menu-item-a">
							Events
						</a>
					</li>
					<li className="footer-menu-item">
						<a href="#Products" className="footer-menu-item-a">
							Products
						</a>
					</li>
					<li className="footer-menu-item">
						<a href="#Support" className="footer-menu-item-a">
							Support
						</a>
					</li>
				</ul>
				<div className="footer-rights">© 2021 Loopstudios. All rights reserved.</div>
			</div>
		</section>
	);
}

export default Footer;
