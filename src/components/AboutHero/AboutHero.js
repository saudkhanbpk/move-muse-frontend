import React from "react";
import SignUpButton from "../../components/Buttons/SignUpButton/SignUpButton";
import "./AboutHero.css";
import celeb from "../../img/icons/heroimage.png";
import { Link, useNavigate } from "react-router-dom";

const AboutHero = () => {
  const navigate = useNavigate();
  const navigateHandler = () => {
    navigate("/login")
  };
  return (
    <section className="Hero">
      <div className="hero-content">
        <h1>The Move & Muse Project</h1>
        <p>
          At Move & Muse, we believe in the transformative power of social dance and its ability to bring joy, connection, and growth. This project was born with the mission of enriching the global social dance community by providing a space where every dancer's voice can be heard, every step can be celebrated, and every experience can be shared.
        </p>
        <div className="d-flex justify-content-center ">
          <SignUpButton onClick={navigateHandler} />
        </div>
      </div>
      <div className="hero-decorations  ">
        <div className="magic-stream-upwards"> </div>
        <div className="magic-stream-left">
          <p className="">Join the Movement</p>
        </div>
      </div>
      <div className="User_celebration ">
        <Link to="/festivals">
          <img
            src={celeb}
            alt="Celebrating user"
            className="user_cleb img-fluid"
          />
        </Link>
      </div>
    </section>
  );
};

export default AboutHero;
