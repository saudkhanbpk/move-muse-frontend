import topicCardBg from "../../img/icons/topic-card-bg.svg";

const backgroundColors = ["#FFEBA9", "#EECDC6", "#D9D9D9", "#A4A68B"];

export default function TopicCard({
  index,
  blog: { _id, author, title, message },
  setBlogId,
}) {
  const backgroundColor = backgroundColors[index % backgroundColors.length];
  return (
    <div
      className="topic-card"
      style={{
        width: "315px",
        height: "200px",
        backgroundColor: backgroundColor,
        margin:"2rem auto"
      }}
      tabIndex={0}
      onClick={() => setBlogId(_id)}
    >
      <div className="position-relative">
        <img
          src={topicCardBg}
          alt="topic-card-bg"
          width={310}
          height={290}
          className="position-absolute "
          style={{ top: -60, left: 3 }}
        />
        <div
          className="position-absolute "
          style={{ width: 245, marginLeft: "2rem" }}
        >
          <h1 className="topic-heading">
            {title?.name ? title?.name : "title"}
          </h1>
          <span>{author?.fullName}</span>
          <p className="text-justify overflow-hidden" style={{height:'120px'}}>{message ? message : "_________"}</p>
        </div>
      </div>
    </div>
  );
}
