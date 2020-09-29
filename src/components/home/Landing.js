import React from "react";

import VBgSection from "./VBgSection";
import PostVideoSection from "./PostVideoSection";

import v1 from "../../vids/1.mp4";
import v2 from "../../vids/2.mp4";
import v3 from "../../vids/3(1).mp4";
import v4 from "../../vids/3(1)_1.mp4";
import v5 from "../../vids/5.mp4";

const Landing = () => {
	return (
		<div>
			<div className="landing-wrapper">
				<div className="landing-front">
					<div className="qa-block" data-aos="fade-up">
						<div className="intro-question">
							<div className="line"></div>
							<div className="text-sub">Who we are</div>
						</div>
						<div className="landing-intro">
							we translate everyday changes into new communication experiences
						</div>
					</div>
				</div>
			</div>

			<div className="section-wrapper">
				<VBgSection
					vid={v1}
					ans="The world we want to story..."
					sub="...propels us as a creative agency to collaborate with our partners 
            in a strategic, artsy, creative, technological and crafty way"
					sideTitle="Sport City"
					sideNote="Our goal was to refresh the brand and empower our users making 
            them feel part of a true, free and dynamic sport's community"
				/>
			</div>
			<div className="section-wrapper">
				<VBgSection
					vid={v2}
					ans="without a formal shape or definition"
					sub="We create limitless solutions for our partners to help them achieve 
            thier bussiness goals, while materialising their most ambitious ideas"
					sideTitle="Lubezki"
					sideNote="See through 'El Chivo' Lubezki eyes and how he redefines 
            rebelliousness in this web experience."
				/>
			</div>
			<div className="section-wrapper">
				<VBgSection
					vid={v3}
					ans="we combine experiences"
					sub="To transform ideas, strategies"
					sideTitle="Epic moleskine"
					sideNote="Discover the world inside some of our selected artists' minds, 
            through web experience where you can find their stories captured in every 
            page."
				/>
			</div>
			<div className="section-wrapper">
				<VBgSection
					vid={v4}
					ans="we don't settle with ok"
					sideTitle="barrios"
					sideNote="Cerveza Indio celebrated the best Barrios in Mexico City creating 
            a web promo & content campaign inviting their consumers to be part of this 
            celebration."
				/>
			</div>
			<div className="section-wrapper">
				<VBgSection
					vid={v5}
					ans="we defy rules if it means settling"
					sub="That's we called evolution, to face changes on a daily basis that 
            push us too think of revolutionary ideas that can boost people interactions 
            and experiences."
					sideTitle="tecate app"
					sideNote="We redesigned the Tecate App, converting it in the biggest 
            forum for Tectate's community achieving more interaction among users."
				/>
			</div>

			<div className="post-video-section">
				<PostVideoSection />
			</div>
		</div>
	);
};

export default Landing;
