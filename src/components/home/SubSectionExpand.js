import React, { Component } from "react";

class SubSectionExpand extends Component {
	componentDidMount() {
		console.log(this.props);
	}

	render() {
		return <div>{this.props.match.params.type}</div>;
	}
}

export default SubSectionExpand;
