import React, { useState, useEffect } from "react";
import axios from "axios";
import "./CardsForEvents.css";
import { useNavigate } from "react-router-dom";
import { BaseUrl } from "../../BaseUrl";
import { FaCalendarAlt, FaMapMarkerAlt, FaUser } from "react-icons/fa";
import { LuCircleDollarSign } from "react-icons/lu";
import arrowleft from "../../../src/img/icons/arrow_previous_prpl.png";
import arrowright from "../../../src/img/icons/arrow_next_prpl.png";
import blog_heart_selected from "../../img/icons/blog_heart_selected.png";
import blog_heart_unselected from "../../img/icons/blog_heart_unselected.png";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CardsForFutureEvents = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const eventsPerPage = 4;
  const navigate = useNavigate();

  const fetchFutureEvents = async () => {
    try {
      const response = await axios.get(
        `${BaseUrl}/api/v1/events/future-events`
      );
      setEvents(response.data);
      setLoading(false);
    } catch (err) {
      setError("Failed to fetch events.");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFutureEvents(); // Initial fetch
  }, []);

  if (loading) {
    return <div>Loading events...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  const totalPages = Math.ceil(events.length / eventsPerPage);
  const startIndex = (currentPage - 1) * eventsPerPage;
  const currentEvents = events.slice(startIndex, startIndex + eventsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleLikeToggle = async (eventId, currentLikeStatus) => {
    try {
      const newLikeStatus = !currentLikeStatus;
      await axios.put(`${BaseUrl}/api/v1/events/like-festival/${eventId}`, {
        like: newLikeStatus,
      });
      setEvents((prevEvents) =>
        prevEvents.map((event) =>
          event._id === eventId ? { ...event, like: newLikeStatus } : event
        )
      );
      toast.success(newLikeStatus ? "Festival liked!" : "Festival unliked!");
    } catch (err) {
      console.error("Failed to update like status:", err);
      toast.error("Failed to update like status.");
    }
  };

  return (
    <section className="p-md-4">
      <ToastContainer />
      <div className="row">
        {currentEvents.map((event) => {
          const titleChars = event.title.slice(0, 2);
          return (
            <div key={event._id} className="col-lg-4 col-xl-3 gap-2 col-md-6">
              <div
                className="event-card p-3"
                onClick={() => navigate(`/event/${event?._id}`)}
              >
                <div className="event-image">
                  <h1 className="event-title">{titleChars}</h1>
                  <div
                    className="favorite-icon"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleLikeToggle(event._id, event.like);
                    }}
                  >
                    <img
                      src={
                        event.like ? blog_heart_selected : blog_heart_unselected
                      }
                      alt="Like"
                      className="blogheartfuturecard"
                    />
                  </div>
                </div>
                <div className="event-info">
                  <h5>{event.title}</h5>
                  <p className="event-description">
                    {event?.description.split(" ").slice(0, 3).join(" ")}...
                  </p>
                  <p className="event-details">
                    <FaUser /> {event?.artist || "N/A"}
                  </p>
                  <p className="event-details">
                    <FaMapMarkerAlt /> {event?.location || "N/A"}
                  </p>
                  <p className="event-details">
                    <LuCircleDollarSign /> {event?.price}
                  </p>
                  <p className="event-details">
                    <FaCalendarAlt />{" "}
                    {new Date(event?.startDateTime).toLocaleDateString()}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="d-flex justify-content-between align-items-center mt-5 flex-column flex-md-row text-center">
        <img
          src={arrowleft}
          alt="previous"
          width={120}
          className={` ${currentPage === 1 ? "opacity-50" : ""}`}
          onClick={handlePreviousPage}
          style={{ cursor: "pointer" }}
        />
        <span className="fw-bold fs-6 my-2 my-md-0">{`Page ${currentPage} of ${totalPages}`}</span>
        <img
          src={arrowright}
          alt="next"
          width={120}
          className={`cursor-pointer ${
            currentPage === totalPages ? "opacity-50" : ""
          }`}
          onClick={handleNextPage}
          style={{ cursor: "pointer" }}
        />
      </div>
    </section>
  );
};

export default CardsForFutureEvents;
