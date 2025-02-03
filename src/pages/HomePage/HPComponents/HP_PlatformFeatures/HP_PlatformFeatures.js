import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./HP_PlatformFeatures.css"; // Be sure to create this CSS file
import shareImage from "../../../../img/icons/1_share_reviews.png"; // Adjust the file name as needed
import celebrateImage from "../../../../img/icons/2_celebrate.png"; // Adjust the file name as needed
import discoverImage from "../../../../img/icons/3_discover.png"; // Adjust the file name as needed
import moveMuseImage from "../../../../img/icons/4_move_n_muse.png"; // Adjust the file name as needed

const HP_PlatformFeatures = () => {
  const location = useLocation();

  // Scroll to specific positions based on the location
  // useEffect(() => {
  //   if (location.pathname === "/login") {
  //     window.scrollTo(0, 2500); // Scroll to 2000px if on the login page
  //   } else if (location.pathname === "/festivals") {
  //     window.scrollTo(0, 0); 
  //   } else {
  //     window.scrollTo(0, 0); 
  //   }
  // }, [location.pathname]); 

  return (
    <section className="hp-platform-features">
      <h2>What can you do on the Move & Muse platform?</h2>
      <div className="features-container">
        <div className="feature-item">
          <Link to="/festivals">
            <img src={discoverImage} alt="Discover New Events" />
            <div className="line"></div>
            <h5>
              <span style={{ color: "darkgreen" }}>Discover</span> New Events
            </h5>
            <p>
              Thanks to all DanceDense community members sharing their Facebook
              Events
            </p>
          </Link>
        </div>
        <div className="feature-item">
          <Link to="/login">
            <img src={shareImage} alt="Share Honest Reviews" />
            <div className="line"></div>
            <h5>
              <span style={{ color: "darkgreen" }}>Share</span> Honest Reviews
            </h5>
            <p>About dance festivals you go to</p>
          </Link>
        </div>
        <div className="feature-item">
          <Link to="/login">
            <img src={celebrateImage} alt="Celebrate Fellow Dancers" />
            <div className="line"></div>
            <h5>
              <span style={{ color: "darkgreen" }}>Celebrate</span> Fellow
              Dancers
            </h5>
            <p>By showing love to people that make your festival experience</p>
          </Link>
        </div>
        <div className="feature-item">
          <Link to="/articles">
            <img src={moveMuseImage} alt="Move & Muse" />
            <div className="line"></div>
            <h5>
              <span style={{ color: "darkgreen" }}>Move & Muse</span> Blog
            </h5>
            <p>
              By exploring thoughtful insights shared by dancers around the
              globe
            </p>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HP_PlatformFeatures;
