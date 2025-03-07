import React, { useState, useEffect } from "react";
import axios from "axios";
import { BaseUrl } from "../../BaseUrl";
import "./attended.css";

const Attended = () => {
  const [feedback, setFeedback] = useState(null);
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("userData"));
    setUser(userData);
  }, []);

  useEffect(() => {
    if (user) {
      const fetchFeedback = async () => {
        try {
          const response = await axios.get(
            `${BaseUrl}/api/v1/events/feedback/singlefeedback/${user._id}`
          );
          setFeedback(response.data.data);
        } catch (err) {
          setError(err.response?.data.message || "Failed to fetch feedback");
        }
      };

      fetchFeedback();
    }
  }, [user]);

  return (
    <div className="ms-md-5 mt-5 mb-5">
      <h1 className="mb-4 ms-md-0 ms-5 ">Attended</h1>
      {error && <div className="text-danger">Error: {error}</div>}
      {!feedback ? (
        <div>Loading...</div>
      ) : (
        <div className="d-flex flex-wrap gap-3 p-md-0 p-3 justify-content-center">
          {feedback.map((fb) => (
            <div
              key={fb._id}
              className="main mb-3"
              style={{ background: "#F2E7CB" }}
            >
              <div className="card-content">
                <div className="card-item">
                  <h5>Venue</h5>
                  <p>{fb.venue}</p>
                </div>
                <div className="card-item">
                  <h5>Ratio</h5>
                  <p>{fb.ratio}</p>
                </div>
                <div className="card-item">
                  <h5>Organization</h5>
                  <p>{fb.organization}</p>
                </div>
                <div className="card-item">
                  <h5>Artists</h5>
                  <p>{fb.artists}</p>
                </div>
                <div className="card-item">
                  <h5>Culture</h5>
                  <p>{fb.culture}</p>
                </div>
              </div>
              <div className="title-description">
                <p style={{ textDecoration: "underline" }}>{fb.title}</p>
                <p >{fb.description}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Attended;
