import React from "react";

const VBgSection = props => {
	return (
		<div className="section-inner">
			<video id="vid-bg" loop autoPlay muted>
				<source src={props.vid} type="video/mp4" />
				Your browser does not support video
			</video>

			<div className="inner-video-content">
				<div className="video-section-qa" data-aos="fade-up">
					<div className="intro-question v-intro-q">
						<div className="line"></div>
						<div className="text-sub">What we do</div>
					</div>
					<div className="landing-intro line-ht-lower mg-bt">{props.ans}</div>
					<div className="subtitle">{props.sub}</div>
				</div>
				<div className="right-side-note" data-aos="fade-left">
					<div className="side-title">{props.sideTitle}</div>
					<div className="subtitle">{props.sideNote}</div>
				</div>
			</div>
		</div>
	);
};

export default VBgSection;
