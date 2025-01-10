import React, { useState, useEffect } from "react";
import ReviewUserImage from "../../img/icons/dance.svg";
import StarImage from "../../img/icons/star-1.png";
import redImage from "../../img/icons/redImage.png";
import FlaggedBg from "../../img/icons/flagged-bg.svg";
import flagfigma from "../../img/icons/flagfigma.png"
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
      const maxPossible = 5; 
      return Math.min(Math.ceil(total / 5), maxPossible);
    };

    setStars(calculateStars());
  }, [venue, ratio, organization, artists, culture]);

  const handleFlag = async () => {
    try {
      if (message === '') {
        toast.error("Message can't be empty");
        return;
      }
      const response = await ApiService.put(`events/update-feedback/${_id}`, {
        flagged: true,
        message: message,
      });
      fetchFeedback(); 
      if (response.data.success) {
        setFlagged(true); // Update local flag state
        toast.success("Content flagged successfully."); 
        setShowMessage(false); // Close modal
      } else {
        toast.error("Failed to flag content."); 
      }
    } catch (error) {
      console.error("Error flagging content:", error);
      toast.error("There was an error flagging the content."); 
    }
  };

  const handleUnflag = async () => {
    try {
      const response = await ApiService.put(`events/update-feedback/${_id}`, {
        flagged: false, 
        message: "", 
      });
      fetchFeedback(); // Refresh feedback data
      if (response.data.success) {
        setFlagged(false); // Update local flag state
        toast.success("Content unflagged successfully."); // Notify user
      } else {
        toast.error("Failed to unflag content."); // Notify user in case of failure
      }
    } catch (error) {
      console.error("Error unflagging content:", error);
      toast.error("There was an error unflagging the content."); // Error handling
    }
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
        <span className="fw-semibold fs-5 text-capitalize">{as}</span>
        <span className="d-flex">
          {Array(stars)
            .fill(null)
            .map((_, index) => (
              <img src={StarImage} width={20} alt="Star" key={index} />
            ))}
        </span>
      </div>

      {/* Review Content Section */}
      <div>
        <div className="d-flex align-items-center justify-content-between"></div>
        <div className="cardInfo p-3 rounded-4 position-relative">
          <div className="d-flex gap-2 justify-center">
            <div
              className="d-flex flex-wrap gap-2"
              style={{ height: "fit-content" }}
            >
              <span>Venue {venue}</span>
              <span>Ratio {ratio}</span>
              <span>Organization {organization}</span>
              <span>Artists {artists}</span>
              <span>Culture {culture}</span>
            </div>
            {isFlagged ? (
              // Display redImage when flagged
              <button
                className="position-relative btn"
                style={{
                  outline: "none",
                  padding: "0px",
                  cursor: "pointer",
                }}
                title="Click to unflag your review"
                onClick={handleUnflag} // Unflag action
              >
                <img src={redImage} alt="flagged" style={{ width: "30px", height: "30px" }} />
              </button>
            ) : (
              // Display flagfigma when not flagged
              <img
                src={flagfigma}
                style={{
                  width: "50px",
                  height: "50px",
                  cursor: "pointer",
                }}
                onClick={() => setShowMessage(!showMessage)} // Open flag modal
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
            backgroundImage: `url(${FlaggedBg})`,
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            height: "170px",
            width: "280px",
          }}
        >
          <div className="w-75 h-75 d-flex flex-column">
            <textarea
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-100 h-100 border-0 p-1"
              placeholder="When flagging content, please include a message for our admin"
              style={{ outline: "none" }}
            ></textarea>
            <button
              onClick={handleFlag}
              className="btn position-relative start-50 "
              style={{
                // border: "1px solid black",
                backgroundSize: "contain",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                width: "110px",
                height: "50px",
                background: '#F6D46B',
                borderRadius: '50px'
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
