import React, { Component } from "react";

export default class About extends Component {
	infoCards = [
		{
			number: 45,
			label: "cities",
		},
		{
			number: 45,
			label: "colleges",
		},
		{
			number: 20000,
			label: "members",
		},
	];

	pinkBannerText =
		"Lorem ipsum, dolor sit amet consectetur adipisicing elit.Perferendis nihil, ea id quaerat temporibus eos, quos unde exercitationem culpa quod voluptatibus numquam aliquam. At enim, quaerat omnis accusantium rerum iusto tenetur, quia est corporis, vel alias temporibus vitae pariatur? Minima debitis at quis harum perspiciatis excepturi eveniet officiis voluptatem reiciendis earum cum in, similique ab architecto incidunt ea eum";

	render() {
		return (
			<div className="about-outer-wrapper">
				<div className="about-inner-wrapper">
					<section className="about-us-banner">
						<div className="au-banner-inner">
							<h2 className="au-header" data-aos="fade-up">
								about us
							</h2>
							<p className="au-para" data-aos="fade-down">
								Bringing the Gamers together through through live experiences.
							</p>
						</div>
					</section>
					<section className="pink-banner">
						<div className="pink-banner-inner">
							<p data-aos="fade-left" data-aos-duration="2000">
								{this.pinkBannerText}
							</p>
						</div>
					</section>
					<section className="count-banner">
						<div className="count-banner-inner">
							<div className="info-card-container">
								{this.infoCards.map(info => {
									return (
										<div className="info-card">
											<div
												className="number"
												data-aos="fade-down"
												data-aos-duration="2000">
												{info.number}
											</div>
											<div
												className="label"
												data-aos="fade-up"
												data-aos-duration="2000">
												{info.label}
											</div>
										</div>
									);
								})}
							</div>
						</div>
					</section>
					<section className="buttons-section">
						<div className="bt-card-container">
							<div
								className="button-card bt-bg-1"
								data-aos="fade-right"
								data-aos-duration="1200">
								discover
							</div>
							<div
								className="button-card bt-bg-2"
								data-aos="fade-left"
								data-aos-duration="1200">
								join us
							</div>
						</div>
					</section>
				</div>
			</div>
		);
	}
}
