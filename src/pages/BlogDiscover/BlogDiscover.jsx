import React, { useEffect, useState } from "react";
import hand from "../../img/icons/handimg.png";
import blogtext from "../../img/icons/blogtext.png";
import SmallCards from "../../components/SmallCards/SmallCards";
import { CiSearch } from "react-icons/ci";
import Dropdown from "../../components/Dropdown/Dropdown";
import arrowForward from "../../img/icons/arrow_charcoal.png";
import mic from "../../img/icons/mic.png";
import mictext from "../../img/icons/mictext.png";
import ApiService from "../../services/ApiService";
import back from "../../img/icons/backarrow.png";
import forward from "../../img/icons/forwardarrow.png";
import kindness from "../../img/icons/kindness.png";
import awareness from "../../img/icons/awareness.png";
import cummunity from "../../img/icons/cummunity.png";
import respect from "../../img/icons/respect.png";
import curisity from "../../img/icons/curisity.png";
import writingimg from "../../img/icons/handwriteimg.png";
import empowerment from "../../img/icons/empowerment.png";
import { useNavigate } from "react-router-dom";
import SearchFields from "../../components/SearchFields/SearchFields";

const BlogDiscover = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const styles = ["styles", "Ballet", "Hip Hop", "Contemporary", "Jazz"];
  const Popular = ["Popular", "Ballet", "Hip Hop", "Contemporary", "Jazz"];
  const [selectedPost, setSelectedPost] = useState(null);
  const [topics, setTopics] = useState([]);
  const [dates, setDates] = useState([]);
  const [posts, setPosts] = useState([]);
  const [selectedStyle, setSelectedStyle] = useState("");
  const [selectedTopic, setSelectedTopic] = useState("");
  const [selectedPopular, setSelectedPopular] = useState("");
  const [selectedDates, setSelectedDates] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 8;
  const categories = ["Beginner", "Intermediate", "Advanced", "Professional"];
  const navigate = useNavigate();
  const imageArray = [
    kindness,
    curisity,
    awareness,
    respect,
    cummunity,
    empowerment,
  ];
  let filteredPosts = [...posts];

  if (selectedTopic && selectedDates) {
    filteredPosts = filteredPosts.filter(
      (post) =>
        post.title.name === selectedTopic &&
        post.date.slice(0, 10) === selectedDates
    );
  } else if (selectedTopic) {
    filteredPosts = filteredPosts.filter(
      (post) => post.title.name === selectedTopic
    );
  } else if (selectedDates) {
    filteredPosts = filteredPosts.filter(
      (post) => post.date.slice(0, 10) === selectedDates
    );
  }
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  const handleStyleChange = (event) => {
    setSelectedStyle(event.target.value);
  };
  const handleTopicChange = (event) => {
    setSelectedTopic(event.target.value);
  };
  const handleDatesChange = (event) => {
    setSelectedDates(event.target.value);
  };
  const handlePopularChange = (event) => {
    setSelectedPopular(event.target.value);
  };
  console.log("the seelected post : ", selectedPost);
  return (
    <>
      <div className="p-4 bg-colormain">
        <div className="row">
          <div className="headingmove_msue ">
            <h2 className="" style={{ fontSize: "40px" }}>
              Welcome to Move & Muse
            </h2>
            <img
              src={blogtext}
              alt=""
              style={{ mixBlendMode: "multiply", width: "70px" }}
            />
          </div>
          <div className="col-md-8">
            <ul className="">
              {[
                "Enjoy dancers sharing their bits of wisdom and",
                "encouragement. All of the essays are aligned with our values. ",
              ].map((item, index) => (
                <li key={index} className="listdata">
                  - {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="col-md-4 d-flex justify-content-center border border-2 border-danger">
            <img src={hand} alt="" style={{ mixBlendMode: "multiply" }} />
          </div>
        </div>
        <SmallCards imageArray={imageArray} />
      </div>
      <div className="p-md-4 selectbox-maindiv">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "start",
          }}
        >
          <img src={arrowForward} alt="" className="img-fluid arrowImage" />
          <p style={{ position: "relative", top: "10px" }}>Regular Search</p>
        </div>
        <SearchFields
          styles={styles}
          selectedStyle={selectedStyle}
          handleStyleChange={handleStyleChange}
          topics={topics}
          selectedTopic={selectedTopic}
          handleTopicChange={handleTopicChange}
          Popular={Popular}
          selectedPopular={selectedPopular}
          handlePopularChange={handlePopularChange}
          dates={dates}
          selectedDates={selectedDates}
          handleDatesChange={handleDatesChange}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />
        <div className="my-4">
          <div className="d-md-flex">
            <div className="selectbox_div2">
              <select name="categories" id="categories">
                <option value="">Choose your category</option>
                {categories.map((category, index) => (
                  <option key={index} value={category.toLowerCase()}>
                    {category}
                  </option>
                ))}
              </select>
              <CiSearch className="icon" />
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "end",
              }}
            >
              <img src={arrowForward} alt="" className="img-fluid arrowImage " />
              <p style={{ position: "relative", top: "10px" }}>Advance</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogDiscover;
