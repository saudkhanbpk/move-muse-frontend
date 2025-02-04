import TopicDetailBg from "../../img/icons/topic-bg.png";
import MicImg from "../../img/icons/mic-icon.svg";
import ShareIcon from "../../img/icons/share-icon.svg";

export default function TopicDetail({ blog }) {
  const formattedDate = (dateString) => {
    const date = new Date(dateString);
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    };
    const newDate = date.toLocaleDateString("en-US", options);
    return newDate;
  };

  return (
    <div style={{ marginInline: "3rem" }}>
      <div
        style={{
          backgroundImage: `url(${TopicDetailBg})`,
          backgroundSize: "cover",
          backgroundPosition: "bottom",
          backgroundRepeat: "no-repeat",
          height: "100%",
        }}
        className="mt-5 p-5"
      >
        <div>
          <h1 className="topic-heading move-and-mouse-color  ">
            {blog?.title?.name ? blog?.title?.name : "No Title"}
          </h1>
          <p className="move-and-mouse-color fs-4 ">
            {blog?.author?.fullName}, {formattedDate(blog?.createdAt)}
          </p>
          <p className="text-justify overflow-x-hidden">{blog?.message}</p>
        </div>
        <div className="d-flex justify-content-between py-5 ">
          <img src={MicImg} alt="mic icon" />
          <p className="topic-heading fs-1 move-and-mouse-color">
            Move & <br /> Mouse
          </p>
        </div>
      </div>
      <div className="py-5">
        <button className="btn ">
          <img src={ShareIcon} alt="share-icon" width={100} />
        </button>
      </div>
    </div>
  );
}
