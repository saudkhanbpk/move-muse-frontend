import React, { useState, useEffect } from "react";
import axios from "axios";

const FbEvent = ({ eventId, accessToken }) => {
  const [eventData, setEventData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEventData = async () => {
      try {
        const response = await axios.get(
          `https://graph.facebook.com/v14.0/${eventId}/events?access_token=${accessToken}`
        );
        setEventData(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchEventData();
  }, [eventId, accessToken]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>{accessToken}</h1>
      <h1>{eventData?.name}</h1>
      <p>{eventData?.description}</p>
      <p>Location: {eventData?.place?.name}</p>
      <p>Start Time: {new Date(eventData?.start_time).toLocaleString()}</p>
    </div>
  );
};

export default FbEvent;
