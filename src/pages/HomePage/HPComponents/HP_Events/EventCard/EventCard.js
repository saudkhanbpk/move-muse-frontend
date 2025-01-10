
import React from "react";
import heartIcon from "../../../../../img/icons/blog_heart_selected.png";
import "./EventCard.css";
import { useNavigate } from "react-router-dom";

const EventCard = ({ event, onFavoriteToggle, futureEvent, pastEvent }) => {
  const formatDateString = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const generateAvatar = (value) => {
    const avatar = value.slice(0, 2).toUpperCase();
    return avatar;
  };

  const navigate = useNavigate();

  return (
    <div className="event-card" onClick={() => navigate(`/event/${event._id}`)}>
      <div
        className="event-image d-flex align-items-center justify-content-center"
        style={{
          backgroundImage: `url(${event.imageUrl})`,
        }}
      >
        <h1 className="fw-bold">
          {!event.imageUrl && generateAvatar(event.title)}
        </h1>
      </div>
      <div className="event-info">
        <h5>{event.title}</h5>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          {/* <p>{event.location},</p> */}
          {futureEvent && <p> <strong>Date: </strong>{formatDateString(event.startDateTime)}</p>}
          {/* {pastEvent && <p>{formatDateString(event.endDateTime)}</p>} */}
        </div>
        {/* Display Category */}
        <p className="event-category "><strong>Category: </strong>{event.category}</p>
        <p className="event-duration"><strong>Duration: </strong>{event.duration}</p>
        {/* Display URL as a clickable link */}
        <a
          href={event.url}
          target="_blank"
          rel="noopener noreferrer"
          className="event-url"
        >
          Visit Event
        </a>
      </div>
      <button
        className="event-favorite"
        onClick={(e) => {
          e.stopPropagation();
          onFavoriteToggle(event.id);
        }}
      >
        <img
          src={heartIcon}
          alt="Favorite"
          style={{ width: "60px", height: "60px" }}
        />
      </button>
    </div>
  );
};

export default EventCard;
