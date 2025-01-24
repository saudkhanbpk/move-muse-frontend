import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./alltopics.css";
import { CiSearch } from "react-icons/ci";

const AllTopics = ({ originalTopics }) => {
  const location = useLocation();
  const navigate = useNavigate();

  // State to manage the filter input and filtered topics
  const [filter, setFilter] = useState("");
  const [filteredTopics, setFilteredTopics] = useState([]);

  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const topicsPerPage = 10;

  useEffect(() => {
    // Ensure at least ten topics are displayed initially
    const initialTopics = originalTopics.slice(0, 10);
    setFilteredTopics(initialTopics);
  }, [originalTopics]);

  // Handle filter input changes
  const handleFilterChange = (event) => {
    const searchQuery = event.target.value.toLowerCase();
    setFilter(searchQuery);

    // Filter the topics based on the search query
    const filtered = originalTopics?.filter((topic) =>
      topic.name.toLowerCase().includes(searchQuery)
    );

    // Ensure at least ten topics are displayed
    if (filtered.length < 10) {
      const additionalTopics = originalTopics.slice(0, 10 - filtered.length);
      setFilteredTopics([...filtered, ...additionalTopics]);
    } else {
      setFilteredTopics(filtered);
    }
  };

  // Logic to paginate the filtered topics
  const paginate = (topics, pageNumber) => {
    const indexOfLastTopic = pageNumber * topicsPerPage;
    const indexOfFirstTopic = indexOfLastTopic - topicsPerPage;
    return topics.slice(indexOfFirstTopic, indexOfLastTopic);
  };

  // Get current topics for the current page
  const currentTopics = paginate(filteredTopics, currentPage);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Calculate total pages
  const totalPages = Math.ceil(filteredTopics.length / topicsPerPage);

  return (
    <div
      className="px-md-5 py-md-5"
      style={{ background: "#FFFFFF", borderRadius: "10px" }}
    >
      <div className="mb-5 firsttwoinputsmain ms-2 d-md-flex d-block">
        <div className="d-md-flex gap-3">
          <div className="ms-md-3 ms-0">
            <input type="text" placeholder="Style" className="childinput" />
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
                onClick={() => navigate("/articles", { state: topic })}
              >
                <h5
                  className="cursor-pointer cedarville-cursive-regular"
                  style={{ width: "fit-content", textAlign: "justify" }}
                >
                  {index + 1 + (currentPage - 1) * topicsPerPage}. {topic.name}
                </h5>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center w-full">No topics found.</p>
        )}
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="buttons">
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
    </div>
  );
};

export default AllTopics;
