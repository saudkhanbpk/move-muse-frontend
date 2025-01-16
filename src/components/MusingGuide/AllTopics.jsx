import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const AllTopics = () => {
  const location = useLocation();
  const { state } = location;
  const navigate = useNavigate();

  // State to manage the filter input and filtered topics
  const [filter, setFilter] = useState("");
  const [filteredTopics, setFilteredTopics] = useState(
    state?.originalTopics || []
  );

  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const topicsPerPage = 10;

  // Handle filter input changes
  const handleFilterChange = (event) => {
    const searchQuery = event.target.value.toLowerCase();
    setFilter(searchQuery);

    // Filter the topics based on the search query
    const filtered = state?.originalTopics?.filter((topic) =>
      topic.name.toLowerCase().includes(searchQuery)
    );
    setFilteredTopics(filtered);
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
      className="px-5 py-5 "
      style={{ background: "#F2E7CB", borderRadius: "10px" }}
    >
      <div className="mb-5">
        <input
          type="text"
          placeholder="Search topics..."
          value={filter}
          onChange={handleFilterChange}
          className="border rounded px-3 py-2 w-full max-w-md"
        />
      </div>

      {/* Display Filtered Topics */}
      <div className="">
        {currentTopics?.length > 0 ? (
          currentTopics.map((topic, index) => (
            <div key={topic.id} className="">
              <div
                className="h-100 p-2 "
                onClick={() => navigate("/articles", { state: topic })}
              >
                <h5
                  className="cursor-pointer"
                  style={{ width: "160px", textAlign: "justify" }}
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

