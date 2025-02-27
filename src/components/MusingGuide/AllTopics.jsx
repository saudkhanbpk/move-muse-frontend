import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./alltopics.css";
import { CiSearch, CiSquarePlus } from "react-icons/ci";
import axios from "axios";
import { BaseUrl } from "../../BaseUrl";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const adminToken = localStorage.getItem("token");

const AllTopics = ({ originalTopics, handleScroll }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const [filter, setFilter] = useState("");
  const [filteredTopics, setFilteredTopics] = useState([]);
  const [titles, setTitles] = useState([]);
  const [newTitle, setNewTitle] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const topicsPerPage = 10;

  useEffect(() => {
    setFilteredTopics(originalTopics);
  }, [originalTopics]);

  const handleFilterChange = (event) => {
    let searchQuery = event.target.value;

    // Capitalize the first letter
    if (searchQuery.length > 0) {
      searchQuery = searchQuery.charAt(0).toUpperCase() + searchQuery.slice(1).toLowerCase();
    }

    setFilter(searchQuery);

    const filtered = originalTopics?.filter((topic) =>
      topic.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    setFilteredTopics(filtered);
  };

  const paginate = (topics, pageNumber) => {
    const indexOfLastTopic = pageNumber * topicsPerPage;
    const indexOfFirstTopic = indexOfLastTopic - topicsPerPage;
    return topics.slice(indexOfFirstTopic, indexOfLastTopic);
  };

  const currentTopics = paginate(filteredTopics, currentPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const axiosConfig = {
    headers: {
      Authorization: `Bearer ${adminToken}`,
    },
  };

  const handleAddTitle = async () => {
    console.log("clicked", newTitle);
    if (newTitle.trim()) {
      try {
        const response = await axios.post(
          `${BaseUrl}/api/v1/addTitle`,
          { name: newTitle },
          axiosConfig
        );
        if (response.data.success) {
          setNewTitle("");
          setTitles(response.data.data.titles);
          toast.success("Title added successfully!");
        } else {
          console.error("Error adding title:", response.data.message);
        }
      } catch (error) {
        console.error("Error adding title:", error);
      }
    }
  };

  const totalPages = Math.ceil(filteredTopics.length / topicsPerPage);

  return (
    <div
      className="px-md-5 py-md-5"
      style={{ background: "#FFFFFF", borderRadius: "10px" }}
    >
      <div className="mb-5 firsttwoinputsmain ms-2 d-md-flex d-block">
        <div className="d-md-flex gap-3">
          <div className="ms-md-3 ms-0 d-flex align-items-center gap-2">
            <input
              type="text"
              onChange={(e) => setNewTitle(e.target.value)}
              placeholder="Add new Tpoic"
              className="childinput"
            />
          </div>

          <div>
            <input type="text" placeholder="Topics" className="childinput" />
          </div>
        </div>
        <div className="searchfotopicinputmain">
          <input
            type="text"
            placeholder="Search topics..."
            value={filter}
            onChange={handleFilterChange}
            className="py-md-1 px-md-2 searfotopicinout"
          />
          <div>
            <CiSearch style={{ fontSize: "30px" }} />
          </div>
        </div>
      </div>

      {/* Display Filtered Topics */}
      <div className="">
        {currentTopics?.length > 0 ? (
          currentTopics.map((topic, index) => (
            <div key={topic.id} className="">
              <div
                className="h-100 p-2"
                onClick={() => {
                  navigate("/articles", { state: topic });
                  handleScroll();
                }}
              >
                <h5
                  className="cursor-pointer textttt"
                  style={{ width: "fit-content", textAlign: "justify", }}
                >
                  {index + 1 + (currentPage - 1) * topicsPerPage}. {topic.name}
                </h5>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center w-full ">No topics found.</p>
        )}
        <div className="d-flex align-items-center gap-2 " >
          <div>
            <CiSquarePlus
              onClick={handleAddTitle}
              style={{
                borderRadius: "5px",
                fontSize: "50px",
                cursor: "pointer",
              }}
            />
          </div>
          <div>
            <h6 className="cursor-pointer textttt mt-2" >
              Add your topic
            </h6>
          </div>
        </div>
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="buttons mt-md-0 mt-4">
          <button
            className="px-3 py-1 mx-1 border rounded"
            disabled={currentPage === 1}
            onClick={() => handlePageChange(currentPage - 1)}
          >
            Previous
          </button>

          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              className={`px-3 py-1 mx-1 border rounded ${
                currentPage === index + 1 ? "bg-blue-500 text-danger" : ""
              }`}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </button>
          ))}
          <button
            className="px-3 py-1 mx-1 border rounded"
            disabled={currentPage === totalPages}
            onClick={() => handlePageChange(currentPage + 1)}
          >
            Next
          </button>
        </div>
      )}
      <ToastContainer />
    </div>
  );
};

export default AllTopics;
