// import React, { useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";

// const AllTopics = () => {
//   const location = useLocation();
//   const { state } = location;
//   const navigate = useNavigate();

//   // State to manage the filter input and filtered topics
//   const [filter, setFilter] = useState("");
//   const [filteredTopics, setFilteredTopics] = useState(
//     state?.originalTopics || []
//   );

//   // Handle filter input changes
//   const handleFilterChange = (event) => {
//     const searchQuery = event.target.value.toLowerCase();
//     setFilter(searchQuery);

//     // Filter the topics based on the search query
//     const filtered = state?.originalTopics?.filter((topic) =>
//       topic.name.toLowerCase().includes(searchQuery)
//     );
//     setFilteredTopics(filtered);
//   };

//   return (
//     <div className=" px-5 py-5">
//       <div className=" mb-5">
//         <input
//           type="text"
//           placeholder="Search topics..."
//           value={filter}
//           onChange={handleFilterChange}
//           className="border rounded px-3 py-2 w-full max-w-md"
//         />
//       </div>

//       {/* Display Filtered Topics */}
//       <div className="row g-4">
//         {filteredTopics?.length > 0 ? (
//           filteredTopics.map((topic) => (
//             <div key={topic.id} className="">
//               <div
//                 className="h-100 p-3 cursor-pointer"
//                 onClick={() => navigate("/articles", { state: topic })}
//               >
//                 <h5>{topic.name}</h5>
//               </div>
//             </div>
//           ))
//         ) : (
//           <p className="text-center w-full">No topics found.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default AllTopics;
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

  return (
    <div className="px-5 py-5 " style={{background: '#F2E7CB', borderRadius: '10px'}}>
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
        {filteredTopics?.length > 0 ? (
          filteredTopics.map((topic, index) => (
            <div key={topic.id} className="">
              <div
                className="h-100 p-2 "
                onClick={() => navigate("/articles", { state: topic })}
              >
                <h5 className="cursor-pointer " style={{width: '160px', textAlign: 'justify'}}>
                  {index + 1}. {topic.name}
                </h5>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center w-full">No topics found.</p>
        )}
      </div>
    </div>
  );
};

export default AllTopics;
