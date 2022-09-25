import React, { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';

import './navMenu.scss';

function NavMenu() {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	return (
		<div className="nav-menu">
			<div className="nav-menu-logo">loopstudios</div>
			<div className="nav-menu-horizontal">
				<ViewMenu />
			</div>
			<div className="nav-menu-hamburger" onClick={handleShow}>
				<svg width="24" height="16" xmlns="http://www.w3.org/2000/svg">
					<g fill="#FFF" fillRule="evenodd">
						<path d="M0 0h24v2H0zM0 7h24v2H0zM0 14h24v2H0z" />
					</g>
				</svg>
			</div>
			<Offcanvas show={show} onHide={handleClose}>
				<Offcanvas.Header>
					<Offcanvas.Title className="nav-menu-logo">loopstudios</Offcanvas.Title>
					<svg onClick={handleClose} width="20" height="20" xmlns="http://www.w3.org/2000/svg">
						<path
							d="M17.778.808l1.414 1.414L11.414 10l7.778 7.778-1.414 1.414L10 11.414l-7.778 7.778-1.414-1.414L8.586 10 .808 2.222 2.222.808 10 8.586 17.778.808z"
							fill="#FFF"
							fillRule="evenodd"
						/>
					</svg>
				</Offcanvas.Header>
				<Offcanvas.Body>
					<ViewMenu />
				</Offcanvas.Body>
			</Offcanvas>
		</div>
	);
}
const ViewMenu = () => {
	return (
		<ul className="nav-menu-wrapper">
			<li className="nav-menu-item">
				<a href="#About" className="nav-menu-item-a">
					About
				</a>
			</li>
			<li className="nav-menu-item">
				<a href="#Coreers" className="nav-menu-item-a">
					Coreers
				</a>
			</li>
			<li className="nav-menu-item">
				<a href="#Events" className="nav-menu-item-a">
					Events
				</a>
			</li>
			<li className="nav-menu-item">
				<a href="#Products" className="nav-menu-item-a">
					Products
				</a>
			</li>
			<li className="nav-menu-item">
				<a href="#Support" className="nav-menu-item-a">
					Support
				</a>
			</li>
		</ul>
	);
};
export default NavMenu;
