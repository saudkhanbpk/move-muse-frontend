import React from "react";
import AboutHero from "../../components/AboutPage/AboutHero";
import "./AboutPage.css";
import AboutUs from "../../components/AboutPage/AboutUs";
import OurMission from "../../components/AboutPage/OurMission";
import MoveAndMouse from "../../components/AboutPage/MoveAndMouse";
import CommunityGuideLines from "../../components/AboutPage/CommunityGuideLines";

const AboutPage = () => {
  return (
    <div>
      <AboutHero />
      <AboutUs />
      <OurMission />
      <MoveAndMouse />
      <CommunityGuideLines />
    </div>
  );
};

export default AboutPage;
