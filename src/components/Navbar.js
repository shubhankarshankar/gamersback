import React, { Component } from "react";
import { Link } from "react-router-dom";

import navLogo from "../imgs/logo.png";

class Navbar extends Component {
	render() {
		return (
			<nav className="nav-wrapper">
				<div className="brand-logo">
					<Link to="/">
						<img src={navLogo} alt="Brand Logo" className="logo" />
					</Link>
				</div>
				<div className="nav-list-wrapper">
					<ul className="nav-list">
						<li>
							<Link to="/about">About</Link>
						</li>
						<li>
							<Link to="/help">Help</Link>
						</li>
						<li>
							<Link to="/jobs">Jobs</Link>
						</li>
						<li>
							<Link to="/privacy">Privacy</Link>
						</li>
						<li>
							<Link to="/terms">Terms</Link>
						</li>
					</ul>
				</div>
			</nav>
		);
	}
}

export default Navbar;
