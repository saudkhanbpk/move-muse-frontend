import React from "react";
import SignUpButton from "../../../../components/Buttons/SignUpButton/SignUpButton";
import "../../HPComponents/HP_Hero/HP_Hero.css";
import newhomee from "../../../../img/icons/newhomee.png";
import { Link, useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  const navigateHandler = () => {
    navigate("/signup");
  };

  return (
    <section className="Hero">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 text-center text-md-start mb-5">
            <Link to="/festivals" className="User_celebration d-block mb-3">
              <img
                src={newhomee}
                className=" imgggg"
              />
            </Link>
          </div>
          <div className="col-md-6 hero-content">
            <h1>For Move & Muse</h1>
            <p>
              Your experiences are the threads that strengthen our dance community.
              Share your story, show love, and weave a richer tapestry for dancers
              worldwide.
            </p>
            <div className="d-flex justify-content-center justify-content-md-start">
              <SignUpButton onClick={navigateHandler} />
            </div>
          </div>
        </div>
        <div className="hero-decorations">
          <div className="magic-stream-upwards"> </div>
          <div className="magic-stream-left">
            <p>Join the Movement</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
