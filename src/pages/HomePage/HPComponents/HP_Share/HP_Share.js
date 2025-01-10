import React from "react";
import { Link } from "react-router-dom";
import "./HP_Share.css"; // HP_Share specific styles
import feedbackCloud from "../../../../img/icons/cloud_peach.png"; // Adjust the import path as needed
import map from "../../../../img/icons/map.png"; // Adjust the import path as needed
import arrow from "../../../../img/icons/arrow_purple.png"; // Adjust the import path as needed
import feedback from "../../../../img/icons/we_want_your_feedback.png"; // Adjust the import path as needed

const HP_Share = () => {
  return (
    <section className="hp-share">
      <div className="share-content">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h2>
            <span style={{ fontSize: "40px", fontWeight: "bold" }}>Share</span>{" "}
            Honest Reviews
          </h2>
          {/* <div className="share-actions"> */}
          <div className=" align-items-center gap-2 d-none d-sm-flex  ">
            <h5 className="signup_btn">
              Sign In
              <img src={feedbackCloud} alt="" className="cloudimage" />
            </h5>
            <h5 className="signup_btn2">
              Create an Account
              <img src={feedbackCloud} alt="" className="cloudimage2" />
            </h5>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 ">
            <p className="" style={{ fontWeight: "bold", color: "black" }}>
              Every year hundreds of dance festivals take place in hundreds of
              cities across the globe! Where should I go?
            </p>
            <ul>
              <li style={{ color: "black" }}>
                Create an account using your Facebook profile
              </li>
              <li style={{ color: "black" }}>
                Import dance events you went to from your calendar
              </li>
              <li style={{ color: "black" }}>
                Share your honest review about:
              </li>
              <ul className="circle-list">
                <li style={{ color: "black" }}>Lead/Follow Ratio</li>
                <li style={{ color: "black" }}>Festival venue</li>
                <li style={{ color: "black" }}>Classes</li>
                <li style={{ color: "black" }}>Parties</li>
                <li style={{ color: "black" }}>Day Socials</li>
                <li style={{ color: "black" }}>Other Entertainment</li>
                <li style={{ color: "black" }}>Culture</li>
                <li style={{ color: "black" }}>etc.</li>
              </ul>
              <li style={{ color: "black" }}>
                Leave elaborate feedback, and tell your own story!
              </li>
            </ul>
            <h4 className="my-4" style={{ fontWeight: "bold" }}>
              Remember
            </h4>
            <p className="reminder" style={{ color: "black" }}>
              Every piece of feedback is invaluable and will provide others with
              clearer insights to make better decisions about where to invest
              their time, energy, and resources for the most fulfilling
              experience!
            </p>
            <div className=" gap-2 d-flex d-sm-none">
              <button className="signIn_btn ">Sign In </button>
              <button className="signIn_btn ">Create an account</button>
            </div>
          </div>
          <div className="col-md-6">
            <img src={map} alt="" className="w-75 " />
            <div className="" style={{ position: "relative" }}>
              <img
                src={feedback}
                className="w-25  "
                style={{ position: "absolute", bottom: "120px", left: "30%" }}
                alt=""
              />
              <p
                style={{ color: "black" }}
                className="d-flex align-items-center"
              >
                <img src={arrow} alt="" className="w-25 " />
                As well as help organizers identify areas of improvement,
                creating a more engaging, inclusive, and memorable experience
                for all attendee.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HP_Share;
