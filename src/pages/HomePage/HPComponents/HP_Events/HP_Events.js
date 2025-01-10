
import React, { useEffect, useState } from "react";
import axios from "axios";
import EventCard from "../../HPComponents/HP_Events/EventCard/EventCard";
import "../../HPComponents/HP_Events/HP_Events.css";
import forwardIcon from "../../../../img/icons/arrow_next_prpl.png";
import { BaseUrl } from "../../../../BaseUrl";

const HP_Events = ({ onFavoriteToggle }) => {
  const [upcomingEvents, setUpcomingEvents] = useState([]);
  const [upcomingRange, setUpcomingRange] = useState(3);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch upcoming events
  useEffect(() => {
    const fetchEvents = async () => {
      // console.log("Fetching future events...");
      try {
        const response = await axios.get(
          // "https://move-muse-backend-1.onrender.com/api/v1/events/future-events"
          `${BaseUrl}/api/v1/events/future-events`
        );
        // console.log("response", response);
        setUpcomingEvents(response.data); // Populate events state with fetched data
        setLoading(false); // Set loading to false after data is fetched
      } catch (err) {
        console.error("Error fetching events:", err);
        setError("Failed to load events.");
        setLoading(false); // Set loading to false even if there is an error
      }
    };
    fetchEvents();
  }, []);

  // Show more upcoming events
  const handleShowMoreUpcoming = () => {
    if (upcomingRange >= upcomingEvents.length) return;
    setUpcomingRange((prevRange) => prevRange + 2);
  };

  // Handle loading and error states
  if (loading) return <p>Loading events...</p>;
  if (error) return <p>{error}</p>;

  return (
    <section className="hp-events">
      <div className="upcoming-events">
        <h2
          className="width_text"
          style={{ color: "#480249", fontWeight: "bold", width: "full" }}
        >
          Coming up
        </h2>
        <div className="events-grid">
          {upcomingEvents.slice(0, upcomingRange).map((event, index) => (
            <EventCard
              key={index}
              event={event}
              futureEvent={true}
              onFavoriteToggle={onFavoriteToggle}
            />
          ))}
        </div>
      </div>
      <div className="d-flex justify-content-end">
        <button className="btn" onClick={handleShowMoreUpcoming}>
          <img
            src={forwardIcon}
            alt="forward btn"
            style={{ width: "100px", height: "100px" }}
          />
        </button>
      </div>
    </section>
  );
};

export default HP_Events;