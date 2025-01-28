import React, { useState, useEffect } from "react";
import ReviewUserImage from "../../img/icons/dance.svg";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import redImage from "../../img/icons/redImage.png";
import papershape from "../../img/icons/paper123.png";
import flagfigma from "../../img/icons/flagfigma.png";
import ApiService from "../../services/ApiService";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ReviewCard({
  item: {
    _id,
    title,
    as,
    starss,
    venue,
    ratio,
    organization,
    artists,
    culture,
    label,
    description,
    flagged,
  },
  fetchFeedback,
}) {
  const [stars, setStars] = useState(0);
  const [showMessage, setShowMessage] = useState(false);
  const [message, setMessage] = useState("");
  const [isFlagged, setFlagged] = useState(flagged);

  useEffect(() => {
    const calculateStars = () => {
      const total = venue + ratio + organization + artists + culture;
      const average = total / 5;

      // Round to the nearest whole or half-star
      if (average - Math.floor(average) <= 0.5) {
        return Math.floor(average) + 0.5; // Retain the half-star
      } else {
        return Math.round(average); // Round to full star
      }
    };

    setStars(calculateStars());
  }, [venue, ratio, organization, artists, culture]);

  const handleFlag = async () => {
    if (message === "") {
      toast.error("Message can't be empty");
      return;
    }
    try {
      const response = await ApiService.put(`events/update-feedback/${_id}`, {
        flagged: true,
        message: message,
      });
      fetchFeedback();
      if (response.data.success) {
        setFlagged(true);
        toast.success("Content flagged successfully.");
        setShowMessage(false);
      } else {
        toast.error("Failed to flag content.");
      }
    } catch (error) {
      toast.error("There was an error flagging the content.");
    }
  };


  const renderStars = () => {
    const fullStars = Math.floor(stars);
    const hasHalfStar = stars % 1 !== 0;

    const starElements = [];

    for (let i = 0; i < fullStars; i++) {
      starElements.push(<FaStar key={`full-${i}`} color="#f8b706" size={20} />);
    }

    if (hasHalfStar) {
      starElements.push(<FaStarHalfAlt key="half" color="#f8b706" size={20} />);
    }

    return starElements;
  };

  return (
    <div
      className="reviewCard d-flex flex-column align-items-center justify-content-start flex-sm-row gap-3 position-relative"
      style={{ width: "100%" }}
    >
      {/* User Info Section */}
      <div className="d-flex flex-column align-items-center justify-content-center">
        <span
          className="card-image-span border border-2 rounded-circle d-flex align-items-center justify-content-center"
          style={{ width: "80px", height: "80px" }}
        >
          <img src={ReviewUserImage} width={30} alt="review" />
        </span>
        <span className="fw-semibold fs-5  text-capitalize">{as}</span>
        <span className="d-flex">{renderStars()}</span>
      </div>

      {/* Review Content Section */}
      <div>
        <div className="cardInfo p-3 rounded-4 position-relative">
          <div className="d-flex gap-2 justify-center">
            <div className="d-flex flex-wrap gap-2 " style={{ height: "fit-content" }}>
              <span className="fs-6 fw-bold">Venue {venue}</span>
              <span className="fs-6 fw-bold">Ratio {ratio}</span>
              <span className="fs-6 fw-bold">Organization {organization}</span>
              <span className="fs-6 fw-bold">Artists {artists}</span>
              <span className="fs-6 fw-bold">Culture {culture}</span>
            </div>
            {isFlagged ? (
              <button
                className="position-relative btn"
                style={{
                  outline: "none",
                  padding: "0px",
                  cursor: "pointer",
                }}
                title="Click to unflag your review"
                
              >
                <img
                  src={redImage}
                  alt="flagged"
                  style={{ width: "30px", height: "30px" }}
                />
              </button>
            ) : (
              <img
                src={flagfigma}
                style={{
                  width: "50px",
                  height: "50px",
                  cursor: "pointer",
                }}
                onClick={() => setShowMessage(!showMessage)}
                title="Click to flag your review"
              />
            )}
          </div>
          <h4 className="text-decoration-underline color-card-text fw-semibold">
            {title}
          </h4>
          <div style={{ lineHeight: "0.5" }}>
            <p>{description}</p>
            <p>{label}</p>
          </div>
        </div>
      </div>

      {/* Modal for Flagging */}
      {showMessage && (
        <div
          className="position-absolute end-0 top-0 d-flex align-items-center justify-content-center"
          style={{
            backgroundImage: `url(${papershape})`,
            right: "250px",
            top: "110px",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            height: "180px",
            width: "300px",
          }}
        >
          <div className="w-75 h-75 d-flex flex-column pt-3">
            <textarea
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-100 h-100 border-0 p-1 bg-none active"
              placeholder="When flagging content, please include a message for our admin"
              style={{ outline: "none" }}
              autoFocus={true}
            ></textarea>
            <button
              onClick={handleFlag}
              className="btn position-relative start-50"
              style={{
                background: "#F6D46B",
                width: "80px",
                height: "40px",
                borderRadius: "50px",
                marginLeft: "20px",
              }}
            >
              Submit
            </button>
          </div>
          <button
            type="button"
            className="btn-close position-absolute end-0"
            aria-label="Close"
            style={{ top: 25 }}
            onClick={() => setShowMessage(false)}
          ></button>
        </div>
      )}
    </div>
  );
}
