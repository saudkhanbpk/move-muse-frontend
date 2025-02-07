import React, { useEffect } from "react";
import "./DiscoverNewEvent.css";
import technique from "../../img/icons/discoverbelow.png";
import userscoping from "../../img/icons/1_share_reviews.png";
const DiscoverNewEvent = () => {
  useEffect(()=>{
    window.scroll(0, 0)
  },[])
  return (
    <>
      <section className="Discover-section">
        <h2 style={{ fontSize: "25px" }}>
          <span style={{ fontWeight: "bold", fontSize: "40px" }}>
            Discover{" "}
          </span>
          New Events
        </h2>
        <img src={userscoping} className="userScope" alt="" />

        <p className="all_text">
          All our events are automatically added from existing FB event pages.
          Since FB is the main platform for organizers, we periodically import
          any dance related events thanks to all MnM community members.{" "}
        </p>

        <ol>
          <li className="listof-order">
            You don’t have to be a supporting member of MnM Community to browse
            past and future events
          </li>
          <li className="listof-order">
            By creating an account you are helping MnM to expand our pull of
            recorded events. Heartfelt thanks from all of us!
          </li>
          <li className="listof-order">
            Complete your account, to automatically see events in your preferred
            dance style and geographical area on the event discovery page
          </li>
        </ol>

        <div style={{ position: "relative" }}>
          <img src={technique} className="techniqueimage" alt="" />
        </div>
      </section>
    </>
  );
};

export default DiscoverNewEvent;
