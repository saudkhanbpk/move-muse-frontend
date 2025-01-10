import React, { useContext, useState } from "react";
import "./MusingGuideblog.css";
import mic from "../../img/icons/mic.png";
import mictext from "../../img/icons/mictext.png";
import NotificationService from "../NotificationService/NotificationService";
import ApiService from "../../services/ApiService";
import { UserContext } from "../../context/UserContext";
import TopicDetailBg from '../../img/icons/topic-bg.png'
import submitButton from '../../img/icons/submitbtn.png'
const MusingGuideblog = ({ topicValue, setTopicValue, fetchData }) => {
  const { user } = useContext(UserContext);
  const [text, setText] = useState("");
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState(user?.fullName);
  const [date, setDate] = useState(new Date().toLocaleDateString());
  const [inputValue, setInputValue] = useState("");
  const [selectedHashtags, setSelectedHashtags] = useState([]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

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

  const handleTextChange = (e) => setText(e.target.value);
  const handleAuthorChange = (e) => setAuthor(e.target.value);
  const logData = async (e) => {
    e.preventDefault();
    // if (!text.trim() || !title.trim()) {
    //   NotificationService.notifyError(
    //     "Author ,Title and message cannot be empty!"
    //   );
    //   return;
    // }

    const newPost = {
      titleId: topicValue?._id,
      author: user?._id,
      message: text,
      hashtags: selectedHashtags,
    };
    try {
      const response = await ApiService.post(`createBlog/${user?._id}`, newPost);
      NotificationService.notify("Blog created ");
      fetchData();
      setTopicValue("");
    } catch (error) {
      NotificationService.notifyError("Blog Failed");
    }
    setTitle("");
    setAuthor("");
    setSelectedHashtags([])
    setDate(new Date().toISOString().slice(0, 10));
    setText("");
  };
  console.log("the selected hashtags are show here : ", selectedHashtags);
  const guideSteps = [
    "We see musing about dance like a generous flow of sap! But for our blog posts we are inviting you to share the maple syrup thoughts that can heal hearts, or trigger profound conversations in our communities. Therefore please enjoy the playground of 500 words.",
    "Decide whether you would like to publish it under your name or as a MnM community member.",
    "Need more time to finish your musings? Save your draft on your desktop as a Notepad or Word document to continue working on it later. Even if it happens that the topic is no longer available once you are back, feel free to email us to see what can be done / submit it under your own topic.",
    "Add up to 5 tags to make it easier for others to find your article.",
    "Once the team confirms the final version of the article, you will be invited to add an audio recording of yourself reading your musings. Our community voices need to be heard!",
  ];

  return (
    <>
      <div className="main_misguide "
      >
        <h2 className="ms-4" style={{ fontWeight: "bold" }}>Musing Guide</h2>
        <ul className="Musing_List">
          {guideSteps.map((step, index) => (
            <ol key={index}>{`${index + 1}. ${step}`}</ol>
          ))}
        </ul>
        <div
          style={{
           
            flexDirection: "column",
            padding: "10px",
          }}
          className="p-md-4 d-flex justify-content-between"
        >
          <div
            style={{
              backgroundImage: `url(${TopicDetailBg})`,
              backgroundSize: "cover",
              backgroundPosition: "bottom",
              backgroundRepeat: "no-repeat",
              height: "100%",
            }}
          >
            <div>
              <input
                type="text"
                placeholder="Sex Ed & Social Dance"
                // value={title}
                value={topicValue?.name || ""}
                className="Title_input"
              // onChange={handleTitleChange}

              />
              <p className="my-2  fs-5">
                <input
                  type="text"
                  placeholder="Author"
                  value={user?.fullName}
                  onChange={handleAuthorChange}
                  style={{
                    background: "transparent",
                    outline: "none",
                    border: "none",
                    width: "150px",
                  }}
                />{" "}
                Date : {new Date().toLocaleDateString()}
              </p>
              <textarea
              
                value={text}
                placeholder="Start Writting here..."
                onChange={handleTextChange}
                className="my-2  fs-5 w-100 border-0"
                style={{
                  minHeight: "130vh",
                  
                  background: "transparent",
                  outline: "none",
                }}
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Add hashtags here"
                value={inputValue}
                className="py-2"
                style={{
                  background: "transparent",
                  outline: "none",
                  border: "none",
                  width: "250px",
                }}
                onChange={handleInputChange}
                onKeyPress={handleKeyPress}
              />
              <div>
                <h4> Hashtags:</h4>
                {selectedHashtags.map((hashtag, index) => (
                  <span key={index}>{hashtag} </span>
                ))}
              </div>
            </div>
            <div className="imgesss">
              <img
                src={mic}
                alt=""
                className="img-fluid"
                style={{ mixBlendMode: "multiply", width: "50px" }}
              />
              <img
                src={mictext}
                alt=""
                className="img-fluid"
                style={{ mixBlendMode: "multiply", width: "280px" }}
              />
            </div>
          </div>

          <div className="my-4 d-flex flex-column gap-3">
            <img
              src={submitButton}
              alt="Submit Button"
              className="img-fluid mb-3"
              style={{ width: '100px', cursor: 'pointer' }}
              onClick={logData}
            />
            <button className="button-3d d-none" onClick={logData}>
              Submit
            </button>
          </div>
        </div>

      </div>
    </>
  );
};

export default MusingGuideblog;
