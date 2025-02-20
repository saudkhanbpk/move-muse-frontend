import React, { useState, useEffect } from "react";
import axios from "axios";
import "./CardsForEvents.css";
import { useNavigate } from "react-router-dom";
import { BaseUrl } from "../../BaseUrl";
import { FaCalendarAlt, FaMapMarkerAlt, FaUser } from "react-icons/fa";
import { LuCircleDollarSign } from "react-icons/lu";
import arrowleft from "../../../src/img/icons/arrow_previous_prpl.png";
import arrowright from "../../../src/img/icons/arrow_next_prpl.png";

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
    <section className="p-md-4 ">
      <div className="d-md-flex d-lg-flex gap-md-4">
        {currentEvents.map((event) => (
          <div key={event._id} className="card_Div shadow-sm ">
            {/* <div className="imag-wrapper" >
              <img
                src={
                  event.image ||
                  "https://img.freepik.com/free-vector/party-people-silhouetes-background_1048-911.jpg?semt=ais_hybrid"
                } // Assuming event.image is the event's image URL
                className="card-image"
                alt="Event Thumbnail"
              />
            </div> */}
            <div className="card-content">
              <div className="eventtitlediv">
                <h5 className="linesofCards fw-bold ">{event?.title}</h5>
              </div>
              <p className="linesofCards  pt-md-3 ">
                <span className="sub">
                  {" "}
                  {event?.description.split(" ").slice(0, 3).join(" ")}...
                </span>
              </p>
              <div className="event-details gap-y-0">
                <p className="linesofCards ">
                  <FaUser />{" "}
                  <span className="sub"> {event?.artist || "N/A"}</span>
                </p>
                <p className="linesofCards ">
                  <FaMapMarkerAlt />{" "}
                  <span className="sub">
                    {event?.location.split(" ").slice(0, 3).join(" ") || "N/A"}
                  </span>
                </p>
                <p className="linesofCards ">
                  <LuCircleDollarSign />{" "}
                  <span className="sub"> {event?.price}</span>
                </p>
                <p className="linesofCards align-items-md-center d-md-flex gap-md-1">
                  <FaCalendarAlt />{" "}
                  <span className="sub">
                    {" "}
                    {new Date(event?.startDateTime).toLocaleDateString()}
                  </span>
                </p>
              </div>
              <a
                className=""
                onClick={() => navigate(`/event/${event?._id}`)}
                style={{ display: "flex", justifyContent: "center" }}
              >
                Visit Event
              </a>
            </div>
          </div>
        ))}
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
