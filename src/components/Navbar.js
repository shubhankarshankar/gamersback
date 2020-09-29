import React, { Component } from "react";
import { Link } from "react-router-dom";

import navLogo from "../imgs/logo.png";

class Navbar extends Component {
	render() {
		return (
			<nav className="nav-wrapper">
				<div className="brand-logo">
					<img src={navLogo} alt="Brand Logo" className="logo" />
				</div>
				<div className="nav-list-wrapper">
					<ul className="nav-list">
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/about">About Us</Link>
						</li>
						<li>
							<Link to="/benefits">Benefits</Link>
						</li>
						<li>
							<Link to="/projects">Upcoming GB Projects</Link>
						</li>
						<li>
							<Link to="contact">Career Contact</Link>
						</li>
					</ul>
				</div>
			</nav>
		);
	}
}

export default Navbar;
