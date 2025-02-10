import { useNavigate } from "react-router-dom";
import topicCardBg from "../../img/icons/topic-card-bg.svg";
import { useEffect } from "react";

const backgroundColors = ["#FFEBA9", "#EECDC6", "#D9D9D9", "#A4A68B"];

export default function TopicCard({
  index,
  blog: { _id, author, title, message },
  setBlogId,
}) {
  const backgroundColor = backgroundColors[index % backgroundColors.length];
  const navigate = useNavigate();

  const handleCardClick = () => {
    setBlogId(_id);
    navigate(`/topicCardreadmore/${_id}`);
  };
  useEffect(()=>{
    window.scroll(0, 0)
  }, [])

  return (
    <div
      className="topic-card"
      style={{
        width: "315px",
        height: "200px",
        backgroundColor: backgroundColor,
        margin: "2rem auto",
        cursor: "pointer",
      }}
      tabIndex={0}
      onClick={handleCardClick}
    >
      <div className="position-relative">
        <img
          src={topicCardBg}
          alt="topic-card-bg"
          width={310}
          height={290}
          className="position-absolute"
          style={{ top: -60, left: 3 }}
        />
        <div
          className="position-absolute"
          style={{ width: 245, marginLeft: "2rem", height: "100%" }}
        >
          <h1 className="topic-heading">
            {title?.name ? title?.name : "title"}
          </h1>
          <span className="fs-5 topic-heading">{author?.fullName}</span>
          <p
            className="text-justify"
            style={{
              height: "120px",
              overflowY: "auto", // Add scrollbar for overflow content
            }}
          >
            {message ? message : "_________"}
          </p>
        </div>
      </div>
    </div>
  );
}
