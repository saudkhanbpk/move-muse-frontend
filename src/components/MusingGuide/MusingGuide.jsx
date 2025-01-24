import React, { useContext, useState, useEffect } from "react";
import "./MusingGuide.css";
import mic from "../../img/icons/mic.png";
import mictext from "../../img/icons/mictext.png";
import blog from "../../img/icons/blogcatalogue.svg";
import NotificationService from "../NotificationService/NotificationService";
import ApiService from "../../services/ApiService";
import { UserContext } from "../../context/UserContext";
import arrow_next_prpl from "../../../src/img/icons/arrow_next_prpl.png";
import { useNavigate, useLocation } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import AllTopics from "./AllTopics";

const MusingGuide = ({ topicValue, setTopicValue, fetchData }) => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  const location = useLocation();
  const { state } = location;

  const [text, setText] = useState("");
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState(user?.fullName);
  const [date, setDate] = useState(new Date().toLocaleDateString());
  const [inputValue, setInputValue] = useState("");
  const [selectedHashtags, setSelectedHashtags] = useState([]);
  const [newTopic, setNewTopic] = useState("");
  const [topics, setTopics] = useState([]);
  const [filter, setFilter] = useState("");
  const [originalTopics, setOriginalTopics] = useState([]);
  const [displayedTopics, setDisplayedTopics] = useState([]);
  const topicsPerPage = 5;

  useEffect(() => {
    setDisplayedTopics(topics.slice(0, topicsPerPage));
  }, [topics]);

  useEffect(() => {
    fetchTopics();
  }, []);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleFilterChange = (e) => {
    const searchValue = e.target.value.toLowerCase();
    setFilter(searchValue);
    setNewTopic(searchValue);
    const filtered = originalTopics.filter((topic) =>
      topic.name.toLowerCase().startsWith(searchValue)
    );
    setTopics(filtered);
    setDisplayedTopics(filtered.slice(0, topicsPerPage));
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

  const fetchTopics = async () => {
    try {
      const response = await ApiService.get("getAllTitles");
      setOriginalTopics(response.data.data.titles);
      setTopics(response.data.data.titles); // Default filtered topics
    } catch (error) {
      console.log("Failed to fetch topics:", error);
      NotificationService.notifyError("Failed to fetch topics.");
    }
  };

  const handleTextChange = (e) => setText(e.target.value);
  const handleAuthorChange = (e) => setAuthor(e.target.value);

  const logData = async (e) => {
    e.preventDefault();
    const newPost = {
      titleId: state !== null ? state._id : topicValue?._id,
      author: user?._id,
      message: text,
      hashtags: selectedHashtags,
    };
    try {
      const response = await ApiService.post("createBlog", newPost);
      NotificationService.notify(
        "Your Blog will be in Pending once approved by MnM Admins then it will be published!"
      );
      fetchData();
      setTopicValue("");
    } catch (error) {
      NotificationService.notifyError("Blog Failed");
    }
    setTitle("");
    setAuthor("");
    setSelectedHashtags([]);
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
        fetchTopics(); // Refresh the topics list
      } catch (error) {
        NotificationService.notifyError("Api failed ");
      }
    } else {
      NotificationService.notifyError(
        "Please enter a unique topic or a topic that is not already listed."
      );
    }
  };

  return (
    <>
      <div className="main_misguide mt-4 ">
        <div
          className=" p-5 "
          style={{
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            minHeight: "400px",
          }}
        >
          <div className="mb-3 ">
            {/* <h1 className="fw-bold">Topic Title </h1> */}
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
              <AllTopics originalTopics={originalTopics} />
            </div>
            <div className="musingparagraph ms-md-5 ms-0" style={{ background: "#FFFFFF" }}>
              <h2
                style={{
                  fontWeight: "bold",
                  color: "#545454",
                  paddingLeft: "15px ",
                }}
              >
                Musing Guide
              </h2>
              <ol >
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
        <div
          style={{
            backgroundImage: `url(${blog})`,
            backgroundSize: "cover",
            backgroundPosition: "bottom",
            backgroundRepeat: "no-repeat",
            height: "100vh",
          }}
          className="p-md-4 mt-5"
        >
          <div>
            <input
              type="text"
              placeholder="Enter Your Title"
              value={topicValue?.name || state?.name}
              className="Title_input "
              style={{ fontFamily: "cursive", paddingLeft: "46px" }}
            />
            <p
              className="my-2  fs-5 d-flex justify-content-between align-items-center p-2"
              style={{ marginLeft: "20px", marginTop: "20px" }}
            >
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
                  marginLeft: "20px",
                }}
              />
              Date : {new Date().toLocaleDateString()}
            </p>
            <textarea
              value={text}
              placeholder="Start Writing here..."
              onChange={handleTextChange}
              className="my-2  fs-5  w-md-100  border-0"
              style={{
                minHeight: "150px",
                background: "transparent",
                outline: "none",
                marginLeft: "45px",
              }}
            />
          </div>

          <div className="moveandmusetextmain">
            <p className=" moveandmusetextchild">
              <span className="cedarville-cursive-regular">
                Move & Muse Community | Author
              </span>
            </p>
          </div>
        </div>

        <div className="my-4 d-flex align-items-center gap-3 ">
          <button className="button-3d" onClick={logData}>
            Submit
          </button>
        </div>
      </div>
    </>
  );
};

export default MusingGuide;
