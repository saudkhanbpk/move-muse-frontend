import React, { useEffect } from "react";
// import { Link } from "react-router-dom";
import "./HP_Celebrate.css";
// import magicStreamRight from "../../../../img/icons/magic_stream_right.png";
// import cloudPrpl from "../../../../img/icons/cloud_prpl.png";
import starPrpl from "../../../../img/icons/star_prpl.png";
import userlist from "../../../../img/icons/arrow_lady.png";
import feedbackCloud from "../../../../img/icons/cloud_prpl.png";
import userselebration from "../../../../img/icons/HP_celebrate_section.png";
import "./HP_Celebrate.css";
const HP_Celebrate = () => {
  useEffect(()=>{
window.scroll(0, 0)
  },[])
  return (
    <section className="hp-celebrate">
      <div className="celebrate-content">
        <div className="d-flex justify-content-between my-3">
          <h2 className="">
            <span style={{ fontWeight: "bold", fontSize: "40px" }}>
              Celebrate
            </span>{" "}
            Fellow Dancers
            {/* <img src={magicright} alt="" className="magicimg" /> */}
          </h2>
          <div className="d-flex align-items-center gap-4">
            <div className="d-sm-flex d-none align-items-center gap-2 ">
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
        </div>

        <div className="row">
          <div className="col-md-6">
            <p>
              Have you ever left a festival with your heart full of love and
              appreciation for the energy of a stranger, who just happened to be
              there with a kind open hug ready to give you exactly what you
              needed? May it be a long soft embrace with no agenda, extremely
              technical steps with a flawless execution, joyful dance play and
              experimentation, unwavering presence and attention... simply a
              dance.
            </p>
            <p>
              Here is the place to give your dance heroes kudos, so they feel
              appreciated for all the amazing things they do!
            </p>
            <div className="d-flex align-items-center">
              <img
                src={userlist}
                className="w-25"
                alt=""
                style={{ mixBlendMode: "multiply" }}
              />
              <ol className="celebrate-steps">
                <li>Create an account using your Facebook profile</li>
                <li>Import dance events you went to from your calendar</li>
                <li>
                  Look up the list of attendees from a particular festival
                </li>
                <li>Find familiar special faces!</li>
                <li>
                  Choose the type of kudos you want to give. Send that love!
                </li>
              </ol>
            </div>

            <p className="reminder">
              <img src={starPrpl} alt="Reminder" className="star-icon" />
              Missing your dance heroes on Move & Muse? Spread the word and
              invite your friends to join, so every dancer receives the kudos
              they deserve!
            </p>
          </div>
          <div className=" gap-2 d-flex d-sm-none">
            <button className="signIn_btn_celebrate ">Sign In </button>
            <button className="signIn_btn_celebrate ">
              Create an account
            </button>
          </div>
          <div className="col-md-6">
            <img
              src={userselebration}
              alt="user celebration"
              className="w-100"
              style={{ mixBlendMode: "multiply" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HP_Celebrate;
