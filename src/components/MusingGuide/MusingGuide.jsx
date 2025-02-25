import React, { useContext, useState, useEffect, useRef } from "react";
import "./MusingGuide.css";
import blog from "../../img/icons/blogcatalogue.svg";
import NotificationService from "../NotificationService/NotificationService";
import ApiService from "../../services/ApiService";
import { UserContext } from "../../context/UserContext";
import { useNavigate, useLocation } from "react-router-dom";
import AllTopics from "./AllTopics";
import { IoClose } from "react-icons/io5";

const MusingGuide = ({ topicValue, setTopicValue, fetchData }) => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  const location = useLocation();
  const { state } = location;

  const [text, setText] = useState("");
  const [title, setTitle] = useState("");
  const [date, setDate] = useState(new Date().toLocaleDateString());
  const [inputValue, setInputValue] = useState("");
  const [selectedHashtags, setSelectedHashtags] = useState([]);
  const [newTopic, setNewTopic] = useState("");
  const [topics, setTopics] = useState([]);
  const [filter, setFilter] = useState("");
  const [originalTopics, setOriginalTopics] = useState([]);
  const [displayedTopics, setDisplayedTopics] = useState([]);
  const [signatureOption, setSignatureOption] = useState("author");
  const [showSuccess, setShowSuccess] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const topicsPerPage = 5;
  const submitArticeleContainerRef = useRef();

  useEffect(() => {
    setDisplayedTopics(topics.slice(0, topicsPerPage));
  }, [topics]);

  useEffect(() => {
    fetchTopics();
  }, []);

  const fetchTopics = async () => {
    try {
      const response = await ApiService.get("getAllTitles");
      setOriginalTopics(response.data.data.titles);
      setTopics(response.data.data.titles);
    } catch (error) {
      console.log("Failed to fetch topics:", error);
      NotificationService.notifyError("Failed to fetch topics.");
    }
  };

  const handleTextChange = (e) => setText(e.target.value);
  const handleSignatureChange = (e) => setSignatureOption(e.target.value);

  const handleTagInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const addTag = () => {
    if (inputValue.trim() && selectedHashtags.length < 5) {
      setSelectedHashtags([...selectedHashtags, inputValue.trim()]);
      setInputValue("");
    } else if (selectedHashtags.length >= 5) {
      NotificationService.notifyError("You can add up to 5 tags.");
    }
  };

  const handleTagInputKeyDown = (e) => {
    if (e.key === "Enter") {
      addTag();
    }
  };

  const logData = async (e) => {
    e.preventDefault();
    if (selectedHashtags.length < 5) {
      NotificationService.notifyError("Please add at least 5 tags.");
      return;
    }

    const newPost = {
      titleId: state !== null ? state._id : topicValue?._id,
      author: signatureOption === "author" ? user?._id : "Move & Muse Community",
      message: text,
      hashtags: selectedHashtags,
      authorType: signatureOption,
    };
    try {
      const response = await ApiService.post("createBlog", newPost);
      setShowSuccess(true);
      setFormSubmitted(true);
      setTimeout(() => {
        setShowSuccess(false);
      }, 4000);
      fetchData();
      setTopicValue("");
    } catch (error) {
      NotificationService.notifyError("Blog Failed");
    }
    setTitle("");
    setSelectedHashtags([]);
    setDate(new Date().toISOString().slice(0, 10));
    setText("");
    if (!topicValue) {
      NotificationService.notifyError("Please fill out the title field");
    }
    if (!text) {
      NotificationService.notifyError("Please fill out the text field");
    }
  };

  const handleScroll = () => {
    submitArticeleContainerRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const guideSteps = [
    "We see musing about dance like a generous flow of sap! But for our blog posts we are inviting you to share the maple syrup thoughts that can heal hearts, or trigger profound conversations in our communities. Therefore please enjoy the playground of 500 words.",
    "Decide whether you would like to publish it under your name or as a MnM community member.",
    "Need more time to finish your musings? Save your draft on your desktop as a Notepad or Word document to continue working on it later. Even if it happens that the topic is no longer available once you are back, feel free to email us to see what can be done / submit it under your own topic.",
    "Add up to 5 tags to make it easier for others to find your article.",
    "Once the team confirms the final version of the article, you will be invited to add an audio recording of yourself reading your musings. Our community voices need to be heard!",
  ];

  const handleAddTopic = async () => {
    if (
      newTopic &&
      !topics.some(
        (topic) => topic.name.toLowerCase() === newTopic.toLowerCase()
      )
    ) {
      try {
        const name = newTopic;
        const data = await ApiService.post("addTitle", { name });
        setNewTopic("");
        NotificationService.notifyInfo("Title Added Successfully");
        fetchData();
        fetchTopics();
      } catch (error) {
        NotificationService.notifyError("Api failed ");
      }
    } else {
      NotificationService.notifyError(
        "Please enter a unique topic or a topic that is not already listed."
      );
    }
  };

  useEffect(() => {
    if (state) {
      setTopicValue(state?.name);
    }
  }, [state, topicValue]);

  return (
    <>
      <div className="main_misguide mt-4  mb-5">
        <div
          className=" p-5 "
          style={{
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            minHeight: "400px",
          }}
        >
          <div className="mb-3 ">
            <div
              className=""
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "end",
              }}
            >
              <div
                onClick={() =>
                  navigate("/alltopics", { state: { originalTopics } })
                }
              ></div>
            </div>
            <div>
              <AllTopics
                originalTopics={originalTopics}
                handleScroll={handleScroll}
              />
            </div>
            <div
              className="musingparagraph ms-md-5 ms-0"
              style={{ background: "#FFFFFF" }}
            >
              <h2
                style={{
                  fontWeight: "bold",
                  color: "#545454",
                  paddingLeft: "15px ",
                }}
              >
                Musing Guide
              </h2>
              <ol>
                {guideSteps.map((step, index) => (
                  <li
                    style={{ color: "#545454", fontWeight: "600" }}
                    key={index}
                  >{`${step}`}</li>
                ))}
              </ol>
            </div>
          </div>
        </div>
        {!formSubmitted && (
          <div
            style={{
              backgroundImage: `url(${blog})`,
              backgroundSize: "cover",
              backgroundPosition: "bottom",
              backgroundRepeat: "no-repeat",
              height: "100vh",
              marginBottom: "20px",
            }}
            className="p-md-4 p-3 mt-5"
            ref={submitArticeleContainerRef}
          >
            <div className="titleanddatemain">
              <div className="mt-3 d-flex justify-content-center" style={{ position: 'relative'}}>
                <IoClose onClick={() => navigate(-1)} style={{
                  position: 'absolute',
                  top: '-20px',
                  right:'-10px',
                  fontSize:'25px',
                  cursor:'pointer'
                }} />
              </div>
              <input
                type="text"
                placeholder="Enter Your Title"
                value={topicValue || state?.name}
                className="Title_input Musingtext"
              />
              <div className=" d-md-flex flex-column gap-0   ">
                <div>
                  <input
                    type="text"
                    placeholder="Author"
                    value={user?.fullName}
                    style={{
                      background: "transparent",
                      outline: "none",
                      border: "none",
                    }}
                    className="Musingtext fs-1 "
                    readOnly
                  />
                </div>
                <div>
                  <strong className="Musingtext  fs-3 ">
                    Date : {new Date().toLocaleDateString()}
                  </strong>
                </div>
              </div>

              <textarea
                value={text}
                placeholder="Start Writing here..."
                onChange={handleTextChange}
                className="my-2  fs-4   textareamsg border-0 Musingtext"
              />

              <div className=" hashtahmain  d-flex flex-column align-items-center">
                <div className="Musingtext d-flex justify-content-end">
                  <h2 className="">How would you like to sign your article?</h2>
                </div>
                <div className="d-flex gap-3 autor justify-content-end ">
                  <input
                    type="checkbox"
                    value="author"
                    checked={signatureOption === "author"}
                    onChange={handleSignatureChange}
                    style={{ background: "transparent" }}
                  />
                  <label className="Musingtext fs-2"> Author</label>
                </div>
                <div className="d-flex gap-3 justify-content-end ">
                  <input
                    type="checkbox"
                    value="community"
                    checked={signatureOption === "community"}
                    onChange={handleSignatureChange}
                  />
                  <label className="Musingtext fs-2">Move & Muse Community</label>
                </div>
              </div>
              <div className="tags-section">
              <div>
                <input
                  type="text"
                  value={inputValue}
                  onChange={handleTagInputChange}
                  onKeyDown={handleTagInputKeyDown}
                  placeholder="Enter a tag"
                  style={{ background: "transparent", border: '2px solid red', outline: 'none', textAlign: 'center', padding: '3px 5px' }}
                 className=""/>
                <div className="d-flex gap-3" >
                  {selectedHashtags.map((tag, index) => (
                    <span key={index} className="Musingtext fs-4 " >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="  ">
                <button className="button-3d mb-5 " onClick={logData}>
                  Submit
                </button>
              </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {showSuccess && (
        <div className="success-popup">
          <div className="success-message-content">
            Thank you for sharing your musings with us, an admin will approve your article or get back with some comments as soon as possible!
          </div>
        </div>
      )}

      <style jsx>{`
        .success-popup {
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background-color: #F6D46B;
          border: 1px solid #ccc;
          padding: 20px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          z-index: 1000;
          border-radius: 40px;
        }
        .success-message-content {
          font-size: 1.2rem;
          color: white;
        }
      `}</style>
    </>
  );
};

export default MusingGuide;