import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import axios from "axios";
import { BaseUrl } from "../../BaseUrl";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const FeedbackForm = ({ onSubmit }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showRoleOptions, setShowRoleOptions] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    as: "",
    stars: "",
    venue: "",
    ratio: "",
    organization: "",
    artists: "",
    culture: "",
    label: "",
    description: "",
    flagged: false,
    role: "",
  });
  const [error, setError] = useState("");

  const { id } = useParams();

  const toggleForm = () => setIsOpen(!isOpen);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const validateInput = (value) => {
    return value === "" || (value >= 1 && value <= 5);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.as) {
      setError("Role selection is required.");
      return;
    }
    setError("");
    try {
      const response = await axios.post(
        `${BaseUrl}/api/v1/events/feedback/${id}`,
        formData
      );
      toast.success("Thank you for sharing your experience with the community!"); // Display the firework emoji as a toast message
      onSubmit();
      setIsOpen(false);
      setFormData({
        title: "",
        as: "",
        stars: "",
        venue: "",
        ratio: "",
        organization: "",
        artists: "",
        culture: "",
        label: "",
        description: "",
        flagged: false,
        role: "",
      });
    } catch (error) {
      console.error("Error submitting feedback:", error);
    }
  };

  return (
    <div className="container ">
      <ToastContainer /> {/* Add the ToastContainer here */}
      <div
        className="d-flex justify-content-end justify-content-md-center justify-content-lg-end"
        style={{ width: "240px" }}
      >
        <button
          className="btn btn-warning d-flex gap-2 align-items-center mt-3 ms-md-5 ms-lg-5 border border-2 border-danger"
          onClick={toggleForm}
          aria-expanded={isOpen}
          aria-controls="feedbackForm"
        >
          <FaPlus className="text-center" />
        </button>
      </div>

      {isOpen && (
        <form
          onSubmit={handleSubmit}
          className="card bg-light mx-auto rounded  mt-4"
          style={{ maxWidth: "660px", width: "100%" }}
        >
          <div className="card-body" style={{ backgroundColor: "#F2E7CB" }}>
            <div className="mb-3">
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Give a title to your review! (Optional)"
                className="form-control rounded"
                style={{
                  backgroundColor: "#F2E7CB",
                  border: "2px solid gray",
                  outline: "none",
                  height: "30px",
                }}
              />
            </div>
            <div className="mb-3">
              <h6 className="mb-2 fw-bold">My role at this festival:</h6>
              <div className="d-flex align-items-center">
                <MdKeyboardArrowDown
                  onClick={() => setShowRoleOptions(!showRoleOptions)}
                  style={{ fontSize: "30px", cursor: "pointer" }}
                />
                <div className="form-check ms-2 ">
                  <input
                    type="checkbox"
                    name="role"
                    className="form-check-input rounded"
                    checked={formData.role}
                    onChange={handleChange}
                    style={{
                      backgroundColor: "#F2E7CB",
                      border: "2px solid gray",
                      outline: "none",
                    }}
                  />
                  <label className="form-check-label">Hide my role</label>
                </div>
              </div>
              {showRoleOptions && (
                <div className="mt-2 ">
                  {[
                    "Attendee",
                    "Volunteer",
                    "Artist",
                    "Guest",
                  ].map((role, idx) => (
                    <div className="form-check " key={role}>
                      <input
                        type="radio"
                        required
                        className="form-check-input rounded"
                        name="as"
                        id={`role-${idx}`}
                        value={role.toLowerCase()}
                        checked={formData.as === role.toLowerCase()}
                        onChange={handleChange}
                      />
                      <label
                        className="form-check-label"
                        htmlFor={`role-${idx}`}
                      >
                        {role}
                      </label>
                    </div>
                  ))}
                </div>
              )}
              {error && <div className="text-danger mt-2">{error}</div>}
            </div>

            <div className="mb-3">
            <label className="form-check-label fw-bold mb-2">Rate your experience</label>
              <div className="d-md-flex flex-wrap gap-1 ">
                {["venue", "ratio",  "artists", "organization", "culture"].map(
                  (field) => (
                    <div
                      className="d-md-flex align-items-center flex-grow-1 mb-2"
                      key={field}
                    >
                      <label className="form-label fw-semibold me-2">{field}</label>
                      <input
                        type="text"
                        name={field}
                        placeholder="0.0"
                        value={formData[field]}
                        onChange={(e) => {
                          if (validateInput(e.target.value)) {
                            handleChange(e);
                          }
                        }}
                        className="form-control rounded"
                        style={{
                          backgroundColor: "#F2E7CB",
                          border: "2px solid gray",
                          outline: "none",
                          height: "30px",
                          width: "46px",
                        }}
                      />
                    </div>
                  )
                )}
              </div>
            </div>

            <div className="mb-3">
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Share your experience..."
                className="form-control rounded-4"
                rows="3"
                style={{
                  backgroundColor: "#F2E7CB",
                  border: "2px solid gray",
                  outline: "none",
                }}
              />
            </div>
            <button
              style={{ background: "#F6D46B", width: "200px" }}
              type="submit"
              className="btn btn-gray rounded mt-3"
            >
              Submit Feedback
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default FeedbackForm;
