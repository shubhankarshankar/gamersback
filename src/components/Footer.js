import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../imgs/logo.png";

const Footer = () => {
	const [email, setEmail] = useState();

	const onFormSubmit = event => {
		event.preventDefault();
	};

	return (
		<div className="footer-wrapper">
			<div className="footer-inner-wrapper">
				<div className="branding-wrapper">
					<div className="brand-logo">
						<img src={logo} alt="Brand Logo" className="logo" />
					</div>
					<p>
						We create possibilities <br />
						to connect and nourish the gamers.
						<br />
						<br />
						<span className="bold">Lets Game !</span>
						<br />
						<span className="cw">
							Copyright &copy; 2020 Gamersback All Rights Reserved.
						</span>
					</p>
				</div>
				<div className="footer-links-wrapper">
					<div className="explore-wrapper">
						<p className="footer-link-title">Explore</p>
						<ul className="footer-link-list">
							<li className="footer-link">
								<Link to="/">Home</Link>
							</li>
							<li className="footer-link">
								<Link to="/about">About Us</Link>
							</li>
							<li className="footer-link">
								<Link to="/team">Team</Link>
							</li>
							<li className="footer-link">
								<Link to="/benefits">Benefits</Link>
							</li>
							<li className="footer-link">
								<Link to="/projects">Projects</Link>
							</li>
							<li className="footer-link">
								<Link to="contact">Career Contact</Link>
							</li>
						</ul>
					</div>
					<div className="follow-wrapper">
						<p className="footer-link-title">Follow</p>
						<ul className="footer-link-list">
							<li className="footer-link">
								<a href="https://google.com">Instagram</a>
							</li>
							<li className="footer-link">
								<a href="https://google.com">Youtube</a>
							</li>
							<li className="footer-link">
								<a href="https://google.com">LinkedIn</a>
							</li>
						</ul>
					</div>
					<div className="legal-wrapper">
						<p className="footer-link-title">Legal</p>
						<ul className="footer-link-list">
							<li className="footer-link">
								<a href="https://google.com">Terms</a>
							</li>
							<li className="footer-link">
								<a href="https://google.com">Privacy</a>
							</li>
						</ul>
					</div>
				</div>
				<div className="newsletter-wrapper">
					<p className="footer-link-title">Newsletter Subscription</p>
					<form onSubmit={onFormSubmit}>
						<input
							value={email}
							type="text"
							name="newsletter-email"
							class="newsletter-email"
							placeholder="Enter your email"
							onChange={event => {
								setEmail(event.target.value);
							}}
						/>
						<input type="submit" className="footer-submit" value="subscribe" />
					</form>
				</div>
			</div>
		</div>
	);
};

export default Footer;
