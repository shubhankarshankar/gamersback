import React, { Component } from "react";

import PostVideoSubSection from "./PostVideoSubSection";

import img1 from "../../imgs/IIM-Bangalore-Campus.jpg";
import img2 from "../../imgs/nsrcel.jpg";

class PostVideoSection extends Component {
	sections = [
		{
			id: 1,
			title: "Endurance",
			desc:
				"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed in consectetur dicta perferendis nulla, delectus eaque maxime reiciendis amet ea dolorem dolores ad doloremque autem.",
			link: "endurance",
		},
		{
			id: 2,
			title: "Strength",
			desc:
				"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed in consectetur dicta perferendis nulla, delectus eaque maxime reiciendis amet ea dolorem dolores ad doloremque autem.",
			link: "strength",
		},
		{
			id: 3,
			title: "Power Lifting",
			desc:
				"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed in consectetur dicta perferendis nulla, delectus eaque maxime reiciendis amet ea dolorem dolores ad doloremque autem.",
			link: "power-lifting",
		},
		{
			id: 4,
			title: "Power Yoga",
			desc:
				"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed in consectetur dicta perferendis nulla, delectus eaque maxime reiciendis amet ea dolorem dolores ad doloremque autem.",
			link: "power-yoga",
		},
		{
			id: 5,
			title: "Cardio",
			desc:
				"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed in consectetur dicta perferendis nulla, delectus eaque maxime reiciendis amet ea dolorem dolores ad doloremque autem.",
			link: "cardio",
		},
	];

	render() {
		return (
			<div>
				<div className="why-us-wrapper">
					<div className="center-wrap">
						<div data-aos="fade-up">
							<div className="intro-question">
								<div className="line"></div>
								<div className="text-sub">Why Us</div>
							</div>
							<div className="landing-intro why-us-answer">
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Explicabo, laborum eveniet harum maxime rem ipsum quam illo
								facilis nisi voluptas! Qui fuga corrupti fugit facere.
							</div>
						</div>
						<div className="red-line"></div>
					</div>
					<div className="why-us-images">
						<div>
							<img
								src={img1}
								alt="IIM Bangalore"
								className="image-1"
								data-aos="fade-right"
							/>
						</div>
						<div>
							<img
								src={img2}
								alt="IIM Bangalore"
								className="image-2"
								data-aos="fade-right"
							/>
						</div>
					</div>
				</div>
				<div className="post-video-section-wrapper">
					{this.sections.map(item => {
						return (
							<PostVideoSubSection
								key={item.id}
								id={item.id}
								title={item.title}
								desc={item.desc}
								linkTo={item.link}
							/>
						);
					})}
				</div>
			</div>
		);
	}
}

export default PostVideoSection;
