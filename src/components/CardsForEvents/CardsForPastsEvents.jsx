import React, { useState, useEffect, useContext } from "react";
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
import StarRating from "./StarRating";
import { UserContext } from "../../context/UserContext";
import { useLocation } from "react-router-dom";

const CardsForPastEvents = () => {
  const [events, setEvents] = useState([]);

  console.log("events : 11", events);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const { user } = useContext(UserContext);
  const eventsPerPage = 4;
  const navigate = useNavigate();
  const location = useLocation();
  console.log("location 1122: ", location);
  useEffect(() => {
    const fetchPastEvents = async () => {
      try {
        let response;
        let sortedEvents;
        if (location.pathname === "/profile") {
          response = await axios.get(
            `${BaseUrl}/api/v1/events/past-events/${user?._id}`
          );
          sortedEvents = response.data.event.sort(
            (a, b) => new Date(b.startDateTime) - new Date(a.startDateTime)
          );
        } else {
          response = await axios.get(`${BaseUrl}/api/v1/events/past-events`);
          sortedEvents = response.data.sort(
            (a, b) => new Date(b.startDateTime) - new Date(a.startDateTime)
          );
        }
        console.log("sortedEvents :", sortedEvents);

        const storedRatings =
          JSON.parse(localStorage.getItem("eventRatings")) || {};
        const eventsWithRatings = sortedEvents.map((event) => ({
          ...event,
          rating: storedRatings[event._id] || event.rating || 0,
        }));
        console.log("eventsWithRatings :", eventsWithRatings);

        setEvents(eventsWithRatings);
      } catch (err) {
        setError("Failed to fetch events.");
      } finally {
        setLoading(false);
      }
    };

    fetchPastEvents();
  }, []);

  const handleLikeToggle = async (eventId, currentLikeStatus) => {
    try {
      const newLikeStatus = !currentLikeStatus;
      await axios.put(`${BaseUrl}/api/v1/events/Like-PastFestival/${eventId}`, {
        likePastFestival: newLikeStatus,
      });
      setEvents((prevEvents) =>
        prevEvents.map((event) =>
          event._id === eventId
            ? { ...event, likePastFestival: newLikeStatus }
            : event
        )
      );
      toast.success(newLikeStatus ? "Festival liked!" : "Festival unliked!");
    } catch (error) {
      console.error("Error liking the festival", error);
      toast.error("Failed to update like status.");
    }
  };

  const handleRatingChange = async (eventId, newRating) => {
    try {
      await axios.put(`${BaseUrl}/api/v1/events/update-rating/${eventId}`, {
        rating: newRating,
      });

      // Update localStorage with the new rating
      const updatedEvents = events.map((event) =>
        event._id === eventId ? { ...event, rating: newRating } : event
      );
      const eventRatings = updatedEvents.reduce((acc, event) => {
        acc[event._id] = event.rating;
        return acc;
      }, {});
      localStorage.setItem("eventRatings", JSON.stringify(eventRatings));

      setEvents(updatedEvents);
      toast.success("Rating updated!");
    } catch (error) {
      console.error("Error updating rating", error);
      toast.error("Failed to update rating.");
    }
  };

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

  return (
    <section className="p-md-4 overflow-hidden">
      <ToastContainer />
      <div className="row">
        {currentEvents.map((event) => (
          <div key={event._id} className="col-lg-4 col-xl-3 gap-2 col-md-6">
            <div
              className="event-card p-2"
              onClick={() => navigate(`/past-event/${event._id}`)}
            >
              <div
                className="event-image d-flex align-items-center justify-content-center"
                style={{
                  backgroundImage: `url(${event.imageUrl})`,
                }}
              >
                <h1 className="fw-bold">
                  {!event.imageUrl && event.title.slice(0, 2).toUpperCase()}
                </h1>
              </div>
              <div className="event-info">
                <h5>{event.title}</h5>
                <p className="event-duration">
                  {event?.description.split(" ").slice(0, 3).join(" ")}...
                </p>
                <p className="event-description">
                  <FaUser />{" "}
                  <span className="sub">{event.artist || "N/A"}</span>
                </p>
                <p className="event-description">
                  <FaMapMarkerAlt />{" "}
                  <span className="sub">{event.location || "N/A"}</span>
                </p>
                <p className="event-description">
                  <LuCircleDollarSign />{" "}
                  <span className="sub">{event.price}</span>
                </p>
                <div
                  style={{ display: "flex", alignItems: "center", gap: "10px" }}
                >
                  <FaCalendarAlt />
                  <p>
                    {new Date(event.startDateTime).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                </div>
                <StarRating
                  rating={event.rating || 0}
                  onRatingChange={(newRating) =>
                    handleRatingChange(event._id, newRating)
                  }
                />
              </div>
              <button
                className="event-favorite"
                onClick={(e) => {
                  e.stopPropagation();
                  handleLikeToggle(event._id, event.likePastFestival);
                }}
              >
                <img
                  src={
                    event.likePastFestival
                      ? blog_heart_selected
                      : blog_heart_unselected
                  }
                  alt="Favorite"
                  style={{ width: "60px", height: "60px" }}
                />
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="d-flex justify-content-between align-items-center mt-5 flex-column flex-md-row text-center">
        <img
          src={arrowleft}
          alt="previous"
          width={120}
          className={`${currentPage === 1 ? "opacity-50" : ""}`}
          onClick={handlePreviousPage}
          style={{ cursor: "pointer" }}
        />
        <span className="fw-bold fs-6 my-2 my-md-0">
          {`Page ${currentPage} of ${totalPages}`}
        </span>
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

export default CardsForPastEvents;
