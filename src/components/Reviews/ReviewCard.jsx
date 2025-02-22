import React, { useState, useEffect } from "react";
import ReviewUserImage from "../../img/icons/dance.svg";
import { FaStar } from "react-icons/fa";
import redImage from "../../img/icons/redImage.png";
import papershape from "../../img/icons/paper123.png";
import flagfigma from "../../img/icons/flagfigma.png";
import ApiService from "../../services/ApiService";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import blog_heart_selected from "../../img/icons/blog_heart_selected.png";
import blog_heart_unselected from "../../img/icons/blog_heart_unselected.png";

export default function ReviewCard({
  item: {
    _id,
    title,
    as,
    venue,
    ratio,
    organization,
    artists,
    culture,
    label,
    description,
    flagged,
    likeReview,
  },
  fetchFeedback,
}) {
  const [stars, setStars] = useState(0);
  const [showMessage, setShowMessage] = useState(false);
  const [message, setMessage] = useState("");
  const [isFlagged, setFlagged] = useState(flagged);
  const [isLiked, setIsLiked] = useState(likeReview);

  useEffect(() => {
    const calculateStars = () => {
      const total = venue + ratio + organization + artists + culture;
      const average = total / 5;

      if (average < 3.5) {
        return Math.floor(average);
      } else if (average > 4.5) {
        return Math.ceil(average);
      } else {
        return Math.round(average);
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
        message,
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

  const handleLike = async () => {
    try {
      const response = await ApiService.put(`events/like-review/${_id}`, {
        likeReview: !isLiked,
      });
      fetchFeedback();
      if (response.data.success) {
        setIsLiked(!isLiked);
        toast.success(isLiked ? "Review unliked successfully." : "Review liked successfully.");
      } else {
        toast.error("Failed to update like status.");
      }
    } catch (error) {
      toast.error("There was an error updating the like status.");
    }
  };

  const renderStars = () => {
    return Array.from({ length: stars }, (_, i) => (
      <FaStar key={i} color="#f8b706" size={20} />
    ));
  };

  return (
    <div className="reviewCard d-flex flex-column align-items-center justify-content-start flex-sm-row gap-3 position-relative">
      <div className="d-flex flex-column align-items-center justify-content-center">
        <span
          className="card-image-span border border-2 rounded-circle d-flex align-items-center justify-content-center"
          style={{ width: "80px", height: "80px" }}
        >
          <img src={ReviewUserImage} width={30} alt="review" />
        </span>
        <span className="fw-semibold fs-5 text-capitalize">{as}</span>
        <span className="d-flex">{renderStars()}</span>
      </div>
      <div>
        <div className="cardInfo p-3 rounded-4 position-relative">
          <div className="d-flex gap-2 justify-content-between align-items-center">
            <div
              className="d-flex flex-wrap gap-2"
              style={{ height: "fit-content" }}
            >
              <span className="fs-6 fw-bold">Venue {venue}</span>
              <span className="fs-6 fw-bold">Ratio {ratio}</span>
              <span className="fs-6 fw-bold">Organization {organization}</span>
              <span className="fs-6 fw-bold">Artists {artists}</span>
              <span className="fs-6 fw-bold">Culture {culture}</span>
            </div>
            <div className="d-flex align-items-center ms-2 mt-3">
              <div>
                {isFlagged ? (
                  <img
                    src={redImage}
                    alt="flagged"
                    style={{ width: "30px", height: "30px" }}
                  />
                ) : (
                  <img
                    src={flagfigma}
                    style={{ width: "40px", height: "40px", cursor: "pointer" }}
                    onClick={() => setShowMessage(!showMessage)}
                    title="Click to flag your review"
                  />
                )}
              </div>
              <div>
                <img
                  src={isLiked ? blog_heart_selected : blog_heart_unselected}
                  style={{ cursor: "pointer", width: "70px" }}
                  onClick={handleLike}
                />
              </div>
            </div>
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
              autoFocus
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
