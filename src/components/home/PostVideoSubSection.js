import React from "react";
import { Link } from "react-router-dom";

class PostVideoSubSection extends React.Component {
	render() {
		return (
			<div className="pv-sub-section-outer-wrapper">
				<div className="pv-sub-section-inner-wrapper">
					<Link to={`/home/${this.props.linkTo}`} data-aos="fade-up">
						<div className="sub-section-id">0{this.props.id}.</div>
						<div className="sub-section-title">{this.props.title}</div>
						<div className="sub-section-desc">{this.props.desc}</div>
					</Link>
				</div>
			</div>
		);
	}
}

export default PostVideoSubSection;
