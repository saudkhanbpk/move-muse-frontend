import React, { useEffect, useState } from "react";
import "./BlogPage.css";
import hand from "../../img/icons/handimg.png";
import blogtext from "../../img/icons/blogtext.png";
import arrowForward from "../../img/icons/arrow_charcoal.png";
import endline from "../../img/icons/endline.png";
import back from "../../img/icons/backarrow.png";
import forward from "../../img/icons/forwardarrow.png";
import { CiCirclePlus, CiSearch } from "react-icons/ci";
// import MusingGuide from "../../components/MusingGuide/MusingGuide";
import SmallCards from "../../components/SmallCards/SmallCards";
import Dropdown from "../../components/Dropdown/Dropdown";
import kindness from "../../img/icons/kindness.png";
import awareness from "../../img/icons/awareness.png";
import cummunity from "../../img/icons/cummunity.png";
import respect from "../../img/icons/respect.png";
import curisity from "../../img/icons/curisity.png";
import empowerment from "../../img/icons/empowerment.png";
// import NotificationService from "../../components/NotificationService/NotificationService";
// import ApiService from "../../services/ApiService";
import { Link } from "react-router-dom";
import ApiService from "../../services/ApiService";
import NotificationService from "../../components/NotificationService/NotificationService";
const BlogPage = () => {
  const styles = ["Salsa", "Ballet", "Hip Hop", "Contemporary", "Jazz"];
  const categories = ["Beginner", "Intermediate", "Advanced", "Professional"];
  // const [newTopic, setNewTopic] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStyle, setSelectedStyle] = useState(styles[0]);
  const [selectedCategories, setSelectedCategories] = useState(categories[0]);
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedPost, setSelectedPost] = useState(null);
  const [topics, setTopics] = useState([]);
  const [selectedTopic, setSelectedTopic] = useState("");
  const [selectedDates, setSelectedDates] = useState("");
  const [authorFilter, setAuthorFilter] = useState("");
  const [dates, setDates] = useState([]);
  // const [topicValue, setTopicValue] = useState("");
  const postsPerPage = 8;
  const imageArray = [
    kindness,
    curisity,
    awareness,
    respect,
    cummunity,
    empowerment,
  ];

  const handleStyleChange = (event) => {
    setSelectedStyle(event.target.value);
  };
  const handleCategoryChange = (event) => {
    setSelectedCategories(event.target.value);
  };

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const data = await ApiService.get("getApprovedBlogs");
        const fetchedPosts = data?.data?.data?.blogs;
        setPosts(fetchedPosts);
        const fetchedTopics = fetchedPosts.map((post) => post.title.name);
        const fetchedDates = [
          ...new Set(fetchedPosts.map((post) => post.date.slice(0, 10))),
        ];
        setTopics(fetchedTopics);
        setDates(fetchedDates);
      } catch (error) {
        console.error("Failed to fetch blogs:", error);
      }
    };

    fetchBlog();
  }, [setPosts]);

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

  if (authorFilter) {
    filteredPosts = filteredPosts.filter((post) =>
      post.author.fullName.toLowerCase().includes(authorFilter.toLowerCase())
    );
  }

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  const handleNext = () => {
    setCurrentPage((prevPage) =>
      prevPage < totalPages ? prevPage + 1 : prevPage
    );
  };

  const handlePrev = () => {
    setCurrentPage((prevPage) => (prevPage > 1 ? prevPage - 1 : prevPage));
  };
  const handlePostClick = (post) => {
    setSelectedPost(post);
  };
  return (
    <>
      <div className="p-4 bg-colormain" >
        <div className="row">
          <div className="headingmove_msue ">
            <h2 className="">Move & Muse Catalogue</h2>
            <img
              src={blogtext}
              alt=""
              style={{ mixBlendMode: "multiply", width: "70px" }}
            />
          </div>
          <div className="col-md-8">
            <ul className="">
              {[
                "Every topic in this catalogue is waiting for submissions from our valuable readers, writers, and dancers.",
                "Can‘t find something that speaks to you, feel free to create your own!",
                "Submit your article. This will make the topic unavailable for others to pick.",
                "Our dedicated M&M team will go over every piece of writing to ensure that it aligns with M&M community values and reach out back to you.",
              ].map((item, index) => (
                <li key={index} className="listdata">
                  - {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="col-md-4 d-flex justify-content-center">
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
          <p
            style={{
              position: "relative",
              top: "10px",
              border: "2px solid redirect",
            }}
          >
            Regular Search
          </p>
        </div>
        <div className="search_section">
          <div className="selectbox_div">
            <Dropdown
              name="styles"
              options={styles}
              value={selectedStyle}
              onChange={handleStyleChange}
            />
            <Dropdown
              name="categories"
              options={categories}
              value={selectedCategories}
              onChange={handleCategoryChange}
            />
          </div>

          <div className="search_divInput" >
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Contain text"
              className="searchfield"
            />
            <CiSearch className="Icon" />
          </div>
        </div>

        <div className="my-4 ">
          <div style={{ display: "flex" }}>
            <div className="selectbox_div2">
              <select name="categories" id="categories">
                <option value="">Choose your category</option>
                <option value="styles1">Styles 1</option>
                <option value="styles2">Styles 2</option>
                <option value="styles3">Styles 3</option>
                <option value="styles4">Styles 4</option>
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
              <img src={arrowForward} alt="" className="img-fluid arrowImage" />
              <p style={{ position: "relative", top: "10px" }}>Advance</p>
            </div>
          </div>
        </div>

        <input
          type="text"
          value={authorFilter}
          className="input_topic"
          onChange={(e) => setAuthorFilter(e.target.value)}
          placeholder="Filter by author"
          style={{ marginTop: "20px" }}
        />

        <div className="post-list row my-4">
          {posts.length > 0 &&
            currentPosts.map((post, index) => (
              <div
                key={index}
                className="post-card col-md-4 "
                onClick={() => handlePostClick(post)}
              >
                <h2>{post.title?.name}</h2>
                <p>
                  <strong>Author:</strong> {post.author.fullName}
                </p>
                <p>
                  <strong>Date:</strong> {post.date.slice(0, 10)}
                </p>
                <p>{post.message}</p>
              </div>
            ))}
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <div></div>
          <p className="fs-5">
            Pages : {currentPage} .... {totalPages}
          </p>
          <div className="d-flex justify-content-end ">
            <img
              src={back}
              alt=""
              className="img-fluid"
              onClick={handlePrev}
              style={{ width: "50px", marginInline: "5px" }}
            />
            <img
              src={forward}
              alt=""
              onClick={handleNext}
              className="img-fluid"
              style={{ width: "50px", marginInline: "5px" }}
            />
          </div>
        </div>

        <Link to="/articles" className="btn btn-success">
          Discover
        </Link>
        <div className="d-flex justify-content-center my-3">
          <img src={endline} alt="" className="img-fluid" />
        </div>
      </div>

</>
  );
};

export default BlogPage;
