import React, { useState, useEffect } from "react";
import axios from "axios";
import EventModal from "./EventModal";
import { BaseUrl } from "../../BaseUrl";
import MagicCircle from "../../img/icons/magic_circle.png";
import { IoClose } from "react-icons/io5";

const CreateEvent = ({ closeForm }) => {
  const [formData, setFormData] = useState({
    title: "",
    startDateTime: "",
    endDateTime: "",
    location: "",
    description: "",
    price: "",
    organizer: "",
    peopleResponse: "",
    artist: "",
    eventlink: "",
    flagged: false,
    favourite: false
  });

  const [formErrors, setFormErrors] = useState({});
  const [danceInput, setDanceInput] = useState("");
  const [addedDances, setAddedDances] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleKeyPress = (e) => {
    if (
      e.key === "Enter" &&
      danceInput.trim() &&
      !addedDances.includes(danceInput.trim())
    ) {
      e.preventDefault();
      setAddedDances((prevDances) => [...prevDances, danceInput.trim()]);
      setDanceInput("");
    }
  };

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  const handleLinkSubmit = (submittedLink) => {
    setFormData({ ...formData, eventlink: submittedLink });
    closeModal();
  };

  const handleInputChange = (e) => setDanceInput(e.target.value);

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));

    if (formErrors[name]) {
      setFormErrors((prevErrors) => {
        const updatedErrors = { ...prevErrors };
        delete updatedErrors[name];
        return updatedErrors;
      });
    }
  };

  const removeDance = (indexToRemove) => {
    setAddedDances((prevDances) =>
      prevDances.filter((_, index) => index !== indexToRemove)
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      setLoading(true);
      try {
        await axios.post(`${BaseUrl}/api/v1/events/create`, {
          ...formData,
          category: addedDances.join(", "),
          artist: formData.artist,
        });
        resetForm();
        setShowSuccess(true);
        setTimeout(() => {
          setShowSuccess(false);
          closeForm();
        }, 4000);
      } catch (error) {
        console.log("error", error);
      } finally {
        setLoading(false);
      }
    }
  };

  const resetForm = () => {
    setFormData({
      title: "",
      startDateTime: "",
      endDateTime: "",
      location: "",
      description: "",
      price: "",
      organizer: "",
      peopleResponse: "",
      artist: "",
      eventlink: "",
    });
    setAddedDances([]);
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.eventlink) errors.eventlink = "Event Link is required";
    if (!formData.title) errors.title = "Event Name is required";
    if (!formData.location) errors.location = "Event Location is required";
    if (!formData.startDateTime)
      errors.startDateTime = "Event Start Date is required";
    if (!formData.endDateTime)
      errors.endDateTime = "Event End Date is required";
    if (!formData.description)
      errors.description = "Event Description is required";
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  return (
    <>
      <div className="container col-12 col-lg-6">
        {showSuccess ? (
          <div className="success-message">
            Event created successfully!
          </div>
        ) : (
          <div
            className="p-4 border rounded shadow-sm mt-5"
            style={{ backgroundColor: "#FFF7D8", padding: "10px" }}
          >
            <form onSubmit={handleSubmit}>
              {/* Event Link Field with Modal Trigger */}
              <div className="mt-3 d-flex justify-content-center" style={{ position: 'relative'}}>
                <IoClose onClick={closeForm} style={{
                  position: 'absolute',
                  top: '-20px',
                  right:'-10px',
                  fontSize:'25px',
                  cursor:'pointer'

                }} />
                <style>
                  {`
                 .custom-placeholder::placeholder {
                 color: white;
                 }
                  `}
                </style>

                <input
                  type="text"
                  name="eventlink"
                  value={formData.eventlink}
                  onChange={handleFormChange}
                  className="form-control rounded-pill ps-3 custom-placeholder"
                  placeholder="Event Link"
                  style={{
                    padding: "3px",
                    maxWidth: "500px",
                    border: "2px solid #470248",
                    backgroundColor: "#C3A5E6",
                  }}
                  onClick={openModal} // Open Modal on Click
                />
              </div>
              {formErrors.eventlink && (
                <div className="text-danger p-2">
                  {formErrors.eventlink}
                </div>
              )}

              {/* Event Name Field */}
              <div className="mt-3 d-flex justify-content-center">
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleFormChange}
                  className="form-control rounded-pill ps-3"
                  placeholder="Event Name"
                  style={{
                    padding: "3px",
                    maxWidth: "500px",
                    border: "2px solid #470248",
                    backgroundColor: "transparent",
                  }}
                />
              </div>
              {formErrors.title && (
                <div className="text-danger p-2">{formErrors.title}</div>
              )}

              {/* Event Location Field */}
              <div className="mt-3 d-flex justify-content-center">
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleFormChange}
                  className="form-control rounded-pill ps-3"
                  placeholder="Event Location"
                  style={{
                    padding: "3px",
                    maxWidth: "500px",
                    border: "2px solid #470248",
                    backgroundColor: "transparent",
                  }}
                />
              </div>
              {formErrors.location && (
                <div className="text-danger p-2">{formErrors.location}</div>
              )}

              {/* Date and Time Fields */}
              <div className="d-flex justify-content-center mb-3 mt-3">
                <div
                  className="d-flex flex-wrap justify-content-between gap-3"
                  style={{ maxWidth: "600px" }}
                >
                  <div className="d-flex gap-3">
                    <div className="w-100">
                      <input
                        type="text"
                        name="startDateTime"
                        value={formData.startDateTime}
                        onChange={handleFormChange}
                        onFocus={(e) => (e.target.type = "date")}
                        placeholder="Event Start Date"
                        className="form-control rounded-pill w-100"
                        style={{
                          width: "50%",
                          maxWidth: "150px",
                          border: "2px solid #470248",
                          backgroundColor: "transparent",
                        }}
                      />
                      {formErrors.startDateTime && (
                        <div className="text-danger">
                          {formErrors.startDateTime}
                        </div>
                      )}
                    </div>
                    <div className="w-100">
                      <input
                        type="text"
                        name="endDateTime"
                        value={formData.endDateTime}
                        onChange={handleFormChange}
                        onFocus={(e) => (e.target.type = "date")}
                        placeholder="Event End Date"
                        className="form-control rounded-pill w-100"
                        style={{
                          width: "50%",
                          maxWidth: "150px",
                          border: "2px solid #470248",
                          backgroundColor: "transparent",
                        }}
                      />
                      {formErrors.endDateTime && (
                        <div className="text-danger">
                          {formErrors.endDateTime}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Dance Style Category */}
              <div className="mt-3 d-flex justify-content-center">
                <div
                  className="form-control rounded-pill d-flex align-items-center"
                  style={{
                    padding: "3px",
                    overflowX: "auto",
                    maxWidth: "500px",
                    border: "2px solid #470248",
                    gap: "5px",
                    whiteSpace: "nowrap", // Prevent wrapping to the next line
                    scrollbarWidth: "none", // Hide scrollbar for Firefox
                    msOverflowStyle: "none", // Hide scrollbar for IE and Edge
                  }}
                >
                  {addedDances.map((dance, index) => (
                    <span
                      key={index}
                      className="fs-6 d-flex align-items-center rounded-pill"
                      style={{
                        borderRadius: "12px",
                        padding: "5px 10px",
                        color: "black",
                        fontWeight: "semibold",
                      }}
                    >
                      {dance}
                      <button
                        type="button"
                        className="btn-close ms-2"
                        style={{ fontSize: "10px", color: "white" }}
                        aria-label="Remove"
                        onClick={() => removeDance(index)}
                      ></button>
                    </span>
                  ))}
                  <input
                    type="text"
                    name="category"
                    className="border-0 flex-grow-1"
                    placeholder="Add Dance Style"
                    style={{
                      outline: "none",
                      padding: "3px",
                      backgroundColor: "transparent",
                      height: "20px",
                    }}
                    value={danceInput}
                    onChange={handleInputChange}
                    onKeyPress={handleKeyPress}
                  />
                </div>
              </div>
              {formErrors.category && (
                <div className="text-danger p-2">{formErrors.category}</div>
              )}

              {/* Event Description Field */}
              <div className="mt-3 d-flex justify-content-center">
                <textarea
                  type="text"
                  name="description"
                  value={formData.description}
                  onChange={handleFormChange}
                  className="form-control rounded-4"
                  placeholder="Event Description"
                  rows="4"
                  style={{
                    padding: "10px",
                    maxWidth: "500px",
                    border: "2px solid #470248",
                    backgroundColor: "transparent",
                  }}
                />
              </div>
              {formErrors.description && (
                <div className="text-danger p-2">
                  {formErrors.description}
                </div>
              )}

              <div>
                <h5 className="text-secondary mt-4">Additional</h5>
                <div className="mb-3">
                  <input
                    type="text"
                    name="price"
                    value={formData.price}
                    onChange={handleFormChange}
                    className="form-control rounded-pill"
                    placeholder="Price e.g., Full Pass: CA$149.37 incl. CA$10.37 Fee"
                    style={{
                      maxWidth: "70%",
                      border: "2px solid #470248",
                      backgroundColor: "transparent",
                    }}
                  />
                </div>

                <div className="mb-3">
                  <input
                    type="text"
                    name="organizer"
                    value={formData.organizer}
                    onChange={handleFormChange}
                    className="form-control rounded-pill"
                    placeholder="Organizer e.g., Island Afro Latin Events"
                    style={{
                      maxWidth: "80%",
                      border: "2px solid #470248",
                      backgroundColor: "transparent",
                    }}
                  />
                </div>

                <div className="mb-3">
                  <input
                    type="number"
                    name="peopleResponse"
                    value={formData.peopleResponse}
                    onChange={handleFormChange}
                    className="form-control rounded-pill"
                    placeholder="People responded to FB event"
                    style={{
                      maxWidth: "85%",
                      border: "2px solid #470248",
                      backgroundColor: "transparent",
                    }}
                  />
                </div>

                <div className="mb-3">
                  <input
                    type="text"
                    name="artist"
                    value={formData.artist}
                    onChange={handleFormChange}
                    className="form-control rounded-pill"
                    placeholder="Artist Name is here"
                    style={{
                      maxWidth: "90%",
                      border: "2px solid #470248",
                      backgroundColor: "transparent",
                    }}
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="mt-4">
                <button
                  type="submit"
                  className="btn rounded-pill"
                  style={{ backgroundColor: "#f6d46d" }}
                  disabled={loading}
                >
                  {loading ? "Creating..." : "Create Event"}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>

      {/* Modal for event link */}
      {showModal && (
        <EventModal closeModal={closeModal} submitLink={handleLinkSubmit} />
      )}
    </>
  );
};

export default CreateEvent;
