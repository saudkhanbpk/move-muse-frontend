import React, { useState, useEffect } from "react";
import axios from "axios";
import redImage from "../../img/icons/redImage.png";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import flagfigma from "../../img/icons/flagfigma.png";
import { KudoCard } from "./KudoCard";
import ReviewsSection from "../Reviews/ReviewsSection";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import underLine from "../../img/icons/underLine.svg";
import "../../../src/components/ProfileForm/eventdetail.css";
import ContactUs from "../ContactUs/ContactUs";
import { Link, useParams } from "react-router-dom";
import { BaseUrl } from "../../BaseUrl";
import papershape from "../../img/icons/paper123.png";
import ApiService from "../../services/ApiService";
import { toast } from "react-toastify";

const SingleFutureEvent = () => {
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showMessage, setShowMessage] = useState(false);
  const [message, setMessage] = useState("");
  const [isFlagged, setIsFlagged] = useState(false); // State to track if the review is flagged
  const [isFavorited, setIsFavorited] = useState(false); // State to track if the event is favorited

  const { id } = useParams();

  const handleFlagClick = () => {
    if (isFlagged) {
      handleUnflag();
    } else {
      setShowMessage(true);
    }
  };

  const handleUpdate = async () => {
    try {
      const response = await ApiService.put(
        `events/future-event-update/${id}`,
        {
          flagged: true,
          message: message,
        }
      );
      console.log("response", response);
      if (response.data.success) {
        toast.success("Content flagged successfully.");
        setShowMessage(false);
        setIsFlagged(true);
      } else {
        toast.error("Failed to flag content.");
      }
    } catch (error) {
      console.error("Error flagging content:", error);
      toast.error("There was an error flagging the content.");
    }
  };

  const handleUnflag = async () => {
    try {
      const response = await ApiService.put(
        `events/future-event-update/${id}`,
        {
          flagged: false,
          message: "",
        }
      );
      console.log("response", response);
      if (response.data.success) {
        toast.success("Content unflagged successfully.");
        setIsFlagged(false);
      } else {
        toast.error("Failed to unflag content.");
      }
    } catch (error) {
      console.error("Error unflagging content:", error);
      toast.error("There was an error unflagging the content.");
    }
  };

  const favouriteUpdate = async (isFavorited) => {
    try {
      const response = await ApiService.put(`events/favourite-update/${id}`, {
        favourite: isFavorited,
      });
      console.log("response", response);
      if (response.data.success) {
        if (isFavorited) {
          toast.success("Event added to favorites.");
        } else {
          toast.info("Event removed from favorites.");
        }
        setIsFavorited(isFavorited); // Update the favorited state
      } else {
        toast.error("Failed to update favorite status.");
      }
    } catch (error) {
      console.error("Error updating favorite status:", error);
      toast.error("There was an error updating the favorite status.");
    }
  };

  const handleFavoriteToggle = () => {
    favouriteUpdate(!isFavorited);
  };

  useEffect(() => {
    const fetchFutureEvents = async () => {
      try {
        const response = await axios.get(
          `${BaseUrl}/api/v1/events/future-event/${id}`
        );
        setEvent(response.data.event);
        setIsFlagged(response.data.event.flagged); // Set initial flagged state
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch events.");
        setLoading(false);
      }
    };

    fetchFutureEvents();
  }, [id]);

  if (loading) {
    return <div>Loading events...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!event) {
    return <div>No event found.</div>;
  }

  const words = event.location ? event.location.split(" ") : [];
  const firstTwoWords = words.slice(0, 2).join(" ");
  const thirdWord = words[2] || "";

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { month: "short", day: "numeric" };
    const formattedDate = date.toLocaleDateString("en-US", options);
    const year = date.getFullYear();
    return `${formattedDate}, ${year}`;
  };

  const startDate = event.startDateTime ? formatDate(event.startDateTime) : "";
  const endDate = event.endDateTime ? formatDate(event.endDateTime) : "";
  const formattedDateRange = `${startDate.split(",")[0]} - ${
    endDate.split(",")[0]
  }, ${startDate.split(",")[1]}`;

  const categoryText = String(event.category || "");
  const categoryWords = categoryText.split(" ");
  const allButLastCategoryWord = categoryWords.slice(0, -1).join(" ");
  const lastCategoryWord = categoryWords[categoryWords.length - 1];

  return (
    <div style={{ background: "#f6d46b", width: "100%" }}>
      <div className="container">
        <div className="event-section">
          <div className="row d-flex justify-content-between align-items-center">
            <div
              className="col-12 col-md-6"
              style={{ color: "#480249", position: "relative" }}
            >
              <h1 style={{ marginBottom: "1rem" }}>{event.title}</h1>
            </div>
            <div className="col-12 col-md-6 d-md-flex justify-content-md-end">
              {showMessage && (
                <div
                  className=" d-flex align-items-center justify-content-center"
                  style={{
                    position: "absolute",
                    right: "250px",
                    top: "110px",
                    backgroundImage: `url(${papershape})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    height: "180px",
                    width: "300px",
                  }}
                >
                  <div className="w-75 h-75 d-flex flex-column pt-3">
                    <textarea
                      name="message"
                      id="message"
                      onChange={(e) => setMessage(e.target.value)}
                      value={message}
                      className="w-100 h-100 border-0 p-1 bg-none "
                      placeholder="When flagging content please include message for our admin"
                      style={{ outline: "none" }}
                    ></textarea>
                    <button
                      className="btn position-relative start-50  "
                      style={{
                        background: "#F6D46B",
                        backgroundSize: "contain",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        width: "80px",
                        height: "40px",
                        borderRadius: "50px",
                        marginLeft: "20px",
                      }}
                      onClick={handleUpdate}
                    >
                      Submit
                    </button>
                  </div>
                  <button
                    type="button"
                    className="btn-close position-absolute end-0"
                    aria-label="Close"
                    style={{ top: 25 }}
                    onClick={() => setShowMessage(false)}
                  ></button>
                </div>
              )}
              <div
                className="d-flex gap-2 mt-5  "
                style={{ marginRight: "40px" }}
              >
                <img
                  src={isFlagged ? redImage : flagfigma}
                  onClick={handleFlagClick}
                  className="flage"
                  style={
                    isFlagged
                      ? {
                          cursor: "pointer",
                          width: "30px",
                          height: "30px",
                          marginTop: "10px",
                        }
                      : {
                          cursor: "pointer",
                          width: "60px",
                          height: "52px",
                          marginTop: "2px",
                        }
                  }
                />

                <div className="mt-2 border border-2 border-primary">
                  {isFavorited ? (
                    <FaHeart
                      size={30}
                      style={{ color: "red" }}
                      onClick={handleFavoriteToggle}
                    />
                  ) : (
                    <FaRegHeart
                      size={30}
                      style={{ color: "red" }}
                      onClick={handleFavoriteToggle}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="mt-2 d-md-flex justify-content-end ">
            <div className="col-12 col-md-7">
              <Link to={event.eventlink}>
                <img
                  src="https://img.freepik.com/free-vector/people-dancing-background_1048-7872.jpg"
                  alt="Festival"
                  className="w-100"
                  style={{
                    height: "450px",
                    objectFit: "cover",
                    borderRadius: "0px",
                    cursor: "pointer",
                  }}
                />
              </Link>
            </div>
            <div className="col-12 col-md-5">
              <div className="d-flex flex-wrap justify-content-center gap-2 mt-2">
                {/* First Card */}
                <div className="col-12 col-sm-6 col-md-5 p-2 d-flex justify-content-center">
                  <img
                    src="https://images.unsplash.com/photo-1547153760-18fc86324498?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW9kZXJuJTIwZGFuY2V8ZW58MHx8MHx8fDA%3D"
                    alt="logo"
                    style={{
                      height: "200px",
                      width: "100%",
                      objectFit: "cover",
                      borderRadius: "0px",
                    }}
                  />
                </div>

                {/* Second Card */}
                <div className="col-12 col-sm-6 col-md-5 p-2 d-flex justify-content-center">
                  <div
                    className="d-flex align-items-center justify-content-center text-black"
                    style={{
                      background: "#9bb09d",
                      width: "100%",
                      maxWidth: "200px",
                      height: "200px",
                      borderTopLeftRadius: "0",
                      borderTopRightRadius: "0",
                      borderBottomLeftRadius: "90px",
                      borderBottomRightRadius: "90px",
                      flexDirection: "column",
                      textAlign: "center",
                    }}
                  >
                    <p className="m-0 text-center">
                      <strong className="fs-4">{formattedDateRange}</strong>
                    </p>
                  </div>
                </div>

                {/* Third Card */}
                <div className="col-12 col-sm-6 col-md-5 p-2 d-flex justify-content-center">
                  <div
                    className="d-flex align-items-center justify-content-center text-black"
                    style={{
                      background: "#ffa7df",
                      width: "100%",
                      maxWidth: "200px",
                      height: "200px",
                      borderTopLeftRadius: "0",
                      borderTopRightRadius: "90px",
                      borderBottomLeftRadius: "0",
                      borderBottomRightRadius: "90px",
                      flexDirection: "column",
                      textAlign: "center",
                    }}
                  >
                    <p className="m-0">
                      <strong className="fs-4">{firstTwoWords}</strong>
                    </p>
                    <p className="m-0">
                      <strong className="fs-4">{thirdWord}</strong>
                    </p>
                  </div>
                </div>

                {/* Fourth Card */}
                <div className="col-12 col-sm-6 col-md-5 p-2 d-flex justify-content-center">
                  <div
                    className="d-flex align-items-center justify-content-center rounded-circle bg-white text-black"
                    style={{
                      width: "100%",
                      maxWidth: "200px",
                      height: "200px",
                    }}
                  >
                    <p className="text-center m-0" style={{ width: "170px" }}>
                      <strong>{allButLastCategoryWord}</strong>
                      <br />
                      <strong>{lastCategoryWord}</strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="d-md-flex gap-5 mt-5">
            <div className="col-12 col-md-7">
              <div className="d-flex align-items-center gap-2 mb-3 position-relative">
                <div style={{ position: "relative", display: "inline-block" }}>
                  <h1 style={{ color: "#013f3f", marginBottom: "0.5rem" }}>
                    Description
                  </h1>
                  <img
                    src={underLine}
                    alt="Underline"
                    style={{
                      position: "absolute",
                      bottom: "-10px",
                      left: "0",
                      width: "120%",
                    }}
                  />
                </div>
                <div>
                  <a
                    href={event.eventlink}
                    target="blank"
                    rel="noopener noreferrer"
                  >
                    <FaFacebookSquare
                      size={30}
                      style={{
                        color: "blue",
                        cursor: "pointer",
                      }}
                    />
                  </a>
                </div>
              </div>
              <p>{event.description}</p>
              <div className="mb-4">
                <div className="d-md-flex gap-2 align-items-center mb-4">
                  <strong className="font-weight-semibold mb-0 text-decoration-underline">
                    Genres:
                  </strong>
                  {event.category}
                </div>
                <div className="d-md-flex gap-2 align-items-center mb-3">
                  <strong className="font-weight-semibold mb-0 text-decoration-underline">
                    Tickets:
                  </strong>
                  <p className="ml-3 mb-0">{event.price}</p>
                </div>
                <div className="d-md-flex gap-2 align-items-center mb-3">
                  <strong className="font-weight-semibold mb-0 text-decoration-underline">
                    Organizer:
                  </strong>
                  {event.organizer}
                </div>
                <div className="d-md-flex align-items-center gap-2 mb-3">
                  <strong className="font-weight-semibold mb-0 text-decoration-underline">
                    Artists:
                  </strong>
                  {event.artist}
                </div>
              </div>
              <div>
                <ReviewsSection />
              </div>
            </div>

            <div className="col-12 col-md-4">
              <div className="mb-4 position-relative">
                <div
                  style={{
                    position: "relative",
                    display: "inline-block",
                    marginBottom: "1rem",
                  }}
                >
                  <div className="d-flex justify-content-between align-items-center gap-2">
                    <h1 style={{ color: "#013f3f", marginBottom: "0.5rem" }}>
                      Location
                    </h1>
                    <FaLocationDot size={35} />
                  </div>
                  <img
                    src={underLine}
                    alt="Underline"
                    style={{
                      position: "absolute",
                      bottom: "-10px",
                      left: "0",
                      width: "120%",
                    }}
                  />
                </div>
                <p style={{ marginTop: "1rem" }}>{event.location}</p>
              </div>

              <KudoCard poeple={event.peopleResponse} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleFutureEvent;
