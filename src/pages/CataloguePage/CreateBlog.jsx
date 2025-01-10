import TopicDetailBg from "../../img/icons/topic-bg.png";
import MicImg from "../../img/icons/mic-icon.svg";
import SubmitBtn from "../../img/icons/flagged-btn.svg";
import { useEffect, useState } from "react";
import ApiService from "../../services/ApiService";
import NotificationService from "../../components/NotificationService/NotificationService";

export default function CreateBlog({ topic, user }) {
  const [author, setAuthor] = useState(user?.fullName);
  const [inputValue, setInputValue] = useState("");
  const [inputTitle, setInputTitle] = useState("");
  const [selectedHashtags, setSelectedHashtags] = useState([]);
  const [desc, setDesc] = useState("");

  useEffect(() => {
    setInputTitle(topic?.name);
  }, [topic]);

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      const newHashtags = inputValue
        .split(" ")
        .filter((tag) => tag.trim() !== "")
        .map((tag) => (tag.startsWith("#") ? tag : `#${tag}`));
      setSelectedHashtags([...selectedHashtags, ...newHashtags]);
      setInputValue("");
    }
  };

  const logData = async (e) => {
    e.preventDefault();

    const newPost = {
      titleId: topic?._id,
      author: user?._id,
      message: desc,
      hashtags: selectedHashtags,
    };
    try {
      const response = await ApiService.post(
        `createBlog/${user?._id}`,
        newPost
      );
      NotificationService.notify("Blog created ");

      setInputValue("");
      setInputTitle("");
      setSelectedHashtags([]);
      setDesc("");
    } catch (error) {
      NotificationService.notifyError("Blog Failed");
    }
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
          <input
            type="text"
            placeholder="Enter Your Title"
            className="blog-title-input fw-semibold fs-1"
            style={{ color: "#545454" }}
            value={inputTitle}
            onChange={(e) => setInputTitle(e.target.value)}
          />
          <div
            className="d-flex align-items-center gap-5 my-3"
            style={{ color: "#545454" }}
          >
            <h3>{author ? author : "Author"}</h3>
            <span>Date: {new Date().toLocaleDateString()}</span>
          </div>
          <div>
            <textarea
              name=""
              placeholder="Start writing here..."
              className="text-area-blog"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            ></textarea>
          </div>
        </div>

        <div className="d-flex flex-column gap-3">
          <input
            type="text"
            placeholder="Enter hash tag here"
            className="blog-title-input fs-2"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyPress}
          />
          <div>
            <h4 className="font-style fw-semibold fs-3"> Hashtags:</h4>
            {selectedHashtags.map((hashtag, index) => (
              <span key={index}>{hashtag} </span>
            ))}
          </div>
        </div>

        <div className="d-flex justify-content-between pb-5">
          <img src={MicImg} alt="mic icon" />
          <p className="topic-heading fs-1 move-and-mouse-color fs-1 text-center">
            Move & Mouse <br /> Community / author
          </p>
        </div>
      </div>
      <div className="my-5 d-flex ">
        <button
          className="btn"
          style={{
            backgroundImage: `url(${SubmitBtn})`,
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            width: "110px",
            height: "50px",
          }}
          onClick={logData}
        >
          <span>Submit</span>
        </button>
        <div className="flex-grow-1 text-center font-style fs-3">
          Tags: {selectedHashtags?.length}
        </div>
      </div>
    </div>
  );
}
