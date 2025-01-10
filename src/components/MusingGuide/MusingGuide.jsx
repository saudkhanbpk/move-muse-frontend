import React, { useContext, useState, useEffect } from "react";
import "./MusingGuide.css";
import mic from "../../img/icons/mic.png";
import mictext from "../../img/icons/mictext.png";
import blog from "../../img/icons/blogcatalogue.svg";
import NotificationService from "../NotificationService/NotificationService";
import ApiService from "../../services/ApiService";
import { UserContext } from "../../context/UserContext";

const MusingGuide = ({ topicValue, setTopicValue, fetchData }) => {
  const { user } = useContext(UserContext);
  const [text, setText] = useState("");
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState(user?.fullName);
  const [date, setDate] = useState(new Date().toLocaleDateString());
  const [inputValue, setInputValue] = useState("");
  const [selectedHashtags, setSelectedHashtags] = useState([]);
  const [newTopic, setNewTopic] = useState("");
  const [topics, setTopics] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filter, setFilter] = useState("");
  const [originalTopics, setOriginalTopics] = useState([]);
  const [displayedTopics, setDisplayedTopics] = useState([]);
  const [page, setPage] = useState(1);
  const topicsPerPage = 5;

  useEffect(() => {
    setDisplayedTopics(topics.slice(0, topicsPerPage));
  }, [topics]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const openModal = () => {
    setIsModalOpen(true);
    fetchTopics(); // Fetch topics when opening the modal
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value); // Update filter state
  };

  const filteredTopics = originalTopics.filter(
    (topic) => topic.name.toLowerCase().includes(filter.toLowerCase()) // Filter topics
  );

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
      titleId: topicValue?._id,
      author: user?._id,
      message: text,
      hashtags: selectedHashtags,
    };
    try {
      const response = await ApiService.post(`createBlog`, newPost);
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
    if (newTopic && !topics.includes(newTopic)) {
      try {
        const name = newTopic;
        const data = await ApiService.post("addTitle", { name });
        setNewTopic("");
        NotificationService.notifyInfo("Title Added Successfully");
        fetchData();
      } catch (error) {
        NotificationService.notifyError("Api failed ");
      }
    } else {
      NotificationService.notifyError(
        "Please enter a unique topic or a topic that is not already listed."
      );
    }
  };

  const handleTopicInputChange = (e) => {
    const searchValue = e.target.value.toLowerCase();
    setNewTopic(searchValue);
    setIsModalOpen(true);
    setTopics(
      originalTopics.filter((topic) =>
        topic.name.toLowerCase().includes(searchValue)
      )
    );
  };

  const handleLoadMore = () => {
    setDisplayedTopics([...displayedTopics, ...topics.slice(page * topicsPerPage, (page + 1) * topicsPerPage)]);
    setPage(page + 1);
  };

  return (
    <>
      <div className="main_misguide mt-4 ">
        <h2 style={{ fontWeight: "bold", color: "#545454" }}>Musing Guide</h2>
        <ol>
          {guideSteps.map((step, index) => (
            <li
              style={{ color: "#545454", fontWeight: "600" }}
              key={index}
            >{`${step}`}</li>
          ))}
        </ol>
        <div className="min-vh-100 p-5 "
         style={{
          backgroundImage: `url(${blog})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "100%",
        }}>
        <div className="mb-3 " >
          <h1 className="fw-bold">Title</h1>
          <input
            type="text"
            value={newTopic}
            onChange={handleTopicInputChange}
            className="input_topic"
            placeholder="Search For a Topic"
          />

          <button
            className="text-primary px-3 fw-bold"
            onClick={openModal}
            style={{ cursor: "pointer", fontSize: "16px" }}
          >
            View All
          </button>
        </div>

        {isModalOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 flex  justify-center items-center z-50 "
            onClick={closeModal}
          >
            <div
              className="bg-white rounded-lg w-11/12 md:w-3/4 lg:w-1/2 p-6"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold">All Topics</h3>
                <button
                  onClick={closeModal}
                  className="text-gray-500 hover:text-gray-800 p-1"
                >
                  Hide
                </button>
              </div>
              <ul className="max-h-80 overflow-y-auto ">
                {displayedTopics.map((topic, index) => (
                  <li
                    key={index}
                    className="py-2 border-b cursor-pointer hover:bg-gray-100"
                    onClick={() => {
                      setTopicValue(topic);
                      closeModal();
                    }}
                  >
                    {topic.name}
                  </li>
                ))}
              </ul>
              {topics.length > displayedTopics.length && (
                <button
                  className="mt-4 px-4 py-2 rounded text-black mb-3"
                  onClick={handleLoadMore}
                >
                  Load More
                </button>
              )}
            </div>
          </div>
          
        )}
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
              value={topicValue?.name || ""}
              className="Title_input"
              style={{ fontFamily: "cursive" }}
            />
            <p
              className="my-2  fs-5"
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
                  marginTop: "20px",
                }}
              />{" "}
              Date : {new Date().toLocaleDateString()}
            </p>
            <textarea
              value={text}
              placeholder="Start Writing here..."
              onChange={handleTextChange}
              className="my-2  fs-5 w-100 border-0"
              style={{
                minHeight: "150px",
                background: "transparent",
                outline: "none",
                marginTop: "30px",
                marginLeft: "10px",
              }}
            />
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
