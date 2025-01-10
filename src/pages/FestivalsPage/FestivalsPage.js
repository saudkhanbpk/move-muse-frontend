import React from "react";
import './FestivalsPage.css'
import UpCommingEvents from "./UpCommingEvents/UpCommingEvents";
import RecentKudosFestival from "./RecentKudosFestival/RecentKudosFestival";
const FestivalsPage = () => {
  return <>
    <section className="festival_section">
      <RecentKudosFestival />
      <UpCommingEvents />
    </section>
  </>;
};

export default FestivalsPage;
