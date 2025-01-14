import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import axios from "axios";
import { BaseUrl } from "../../BaseUrl";
import { useParams } from "react-router-dom";

const FeedbackForm = ({ onSubmit }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showRoleOptions, setShowRoleOptions] = useState(false);
  const [showOrganizerInput, setShowOrganizerInput] = useState(false);
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
  const [successMessage, setSuccessMessage] = useState("");

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
    try {
      const response = await axios.post(
        `${BaseUrl}/api/v1/events/feedback/${id}`,
        formData
      );
      setSuccessMessage(response.data.message);
      setTimeout(() => setSuccessMessage(""), 5000);
      onSubmit();
      setIsOpen(false);
    } catch (error) {
      console.error("Error submitting feedback:", error);
    }
  };

  return (
    <div className="container ">
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

      {successMessage && (
        <div className="alert alert-success mt-3">{successMessage}</div>
      )}

      {isOpen && (
        <form
          onSubmit={handleSubmit}
          className="card bg-light mx-auto rounded  mt-4"
          style={{ maxWidth: "600px", width: "100%" }}
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
                    "Artist(Paid)",
                    "InvitedGuest",
                  ].map((role, idx) => (
                    <div className="form-check " key={role}>
                      <input
                        type="radio"
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
            </div>

            <div className="mb-3">
              <div className="d-md-flex flex-wrap gap-2 w-100">
                {["venue", "ratio",  "artists", "organization", "culture"].map(
                  (field) => (
                    <div
                      className="d-md-flex align-items-center flex-grow-1 mb-2"
                      key={field}
                    >
                      <label className="form-label fw-bold me-2">{field}</label>
                      <input
                        type="text"
                        name={field}
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
                          width: "40px",
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
