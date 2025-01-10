import { useNavigate } from "react-router-dom";
import AboutHeroImg from "../../img/icons/about-hero-img.png";
import Button from "../Buttons/SignUpButton/SignUpButton";

export default function AboutHero() {
  const navigate = useNavigate();
  const navigateHandle = () => {
    navigate("/login");
  };

  return (
    <div className="hero-container d-flex flex-column-reverse flex-lg-row px-5 align-items-center justify-content-center">
      <div className="d-flex flex-column gap-4 info-container w-100">
        <h1 className="fw-semibold">The Move & Muse Project</h1>
        <p className="text-justify fs-3">
          At Move & Muse, we believe in the transformational power of social dance
          and its ability to bring joy, connection, and growth. This project was
          born with the mission of enriching the global social dance community
          by providing a space where every dancer's voice can be heard, every
          step can be celebrated, and every experience can be shared.
        </p>
        <div style={{ width: "200px" }}>
          <Button onClick={navigateHandle} />
        </div>
      </div>
      <div className="w-100">
        <img src={AboutHeroImg} alt="about-hero-img" className="img-fluid" />
      </div>
    </div>
  );
}
