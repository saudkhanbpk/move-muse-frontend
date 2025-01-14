import React, { useState, useEffect } from "react";
import axios from "axios";
import "./CardsForEvents.css";
import { useNavigate } from "react-router-dom";
import { BaseUrl } from "../../BaseUrl";
import { FaCalendarAlt, FaMapMarkerAlt, FaUser } from "react-icons/fa";
import { LuCircleDollarSign } from "react-icons/lu";
import arrowleft from '../../../src/img/icons/arrow_previous_prpl.png';
import arrowright from '../../../src/img/icons/arrow_next_prpl.png';

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
        `${BaseUrl}/api/v1/events/future-events`,
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

   
  }, [events]);

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
    <section className="p-4 cursor-pointer">
      <div className="d-flex row gap-4">
        {currentEvents.map((event) => (
          <div
            key={event._id}
            className="card_Div p-3 shadow-sm"
            onClick={() => navigate(`/event/${event?._id}`)}
          >
            <div className="imag-wrapper">
              <img
                src={event.image || 'https://img.freepik.com/free-vector/party-people-silhouetes-background_1048-911.jpg?semt=ais_hybrid'} // Assuming event.image is the event's image URL
                className="card-image"
                alt="Event Thumbnail"
              />
            </div>
            <div className="card-content"
            style={{lineHeight:'10px'}}>
              <h4 className="event-title fw-bold ">{event?.title}</h4>
              <p className="event-description">
                <span className="sub"> {event?.description.split(" ").slice(0, 3).join(" ")}...</span>

              </p>
              <div className="event-details">
              <p className="event-description">
                  <FaUser />   <span className="sub" > {event?.artist || "N/A"}</span>
                </p>
                <p className="event-description ">
                  <FaMapMarkerAlt /> <span className="sub"> {event?.location.split(" ").slice(0, 3).join(" ") || "N/A"}</span>
                </p>
                <p className="event-description ">
                  <LuCircleDollarSign />  <span className="sub">  {event?.price}</span>
                </p>
                <p className="event-description ">
                  <FaCalendarAlt />  <span className="sub">  {new Date(event?.startDateTime).toLocaleDateString()}</span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="d-flex justify-content-between align-items-center mt-5">
                <img
                    src={arrowleft}
                    alt="previous"
                    width={120}
                    className={` ${currentPage === 1 ? "opacity-50" : ""}`}
                    onClick={handlePreviousPage}
                    style={{ cursor: "pointer" }}
                />
                <span className="fw-bold">{`Page ${currentPage} of ${totalPages}`}</span>
                <img
                    src={arrowright}
                    alt="next"
                    width={120}
                    className={`cursor-pointer ${currentPage === totalPages ? "opacity-50" : ""}`}
                    onClick={handleNextPage}
                    style={{ cursor: "pointer" }}
                />
            </div>
    </section>
  );
};

export default CardsForFutureEvents;
