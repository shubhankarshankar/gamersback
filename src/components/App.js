import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import ScrollToTop from "./ScollToTop";
import Navbar from "./Navbar";
import Landing from "./home/Landing";
import SubSectionExpand from "./home/SubSectionExpand";
import About from "./about/About";
import Footer from "./Footer";

class App extends Component {
	componentDidMount() {
		AOS.init();
	}

	render() {
		return (
			<div className="app-wrapper">
				<Router>
					<ScrollToTop />
					<div className="nav-outer-wrapper">
						<Navbar />
					</div>

					<Switch>
						<Route exact path="/" component={Landing} />
						<Route path="/about" component={About} />
						<Route path="/home/:type" component={SubSectionExpand} />
					</Switch>

					<Footer />
				</Router>
			</div>
		);
	}
}

export default App;
