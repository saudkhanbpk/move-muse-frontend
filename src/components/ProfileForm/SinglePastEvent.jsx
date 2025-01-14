import React, { useState, useEffect } from "react";
import axios from "axios";
import SubmitBtn from "../../img/icons/flagged-btn.svg";
import redImage from '../../img/icons/redImage.png';
import { FaHeart } from "react-icons/fa";
import { KudoCard } from "./KudoCard";
import ReviewsSection from "../Reviews/ReviewsSection";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import underLine from "../../img/icons/underLine.svg";
import "../../../src/components/ProfileForm/eventdetail.css";
import ContactUs from "../ContactUs/ContactUs";
import { Link, useParams } from "react-router-dom";
import { BaseUrl } from "../../BaseUrl";
import FlagImg from "../../img/icons/flag.svg";
import FlaggedBg from "../../img/icons/flagged-bg.svg";
import FlaggedBtn from "../../img/icons/flagged-btn.svg";

const SinglePastEvent = () => {
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showMessage, setShowMessage] = useState(false);

  const handleFlagClick = () => {
    setShowMessage(!showMessage);
  };

  const { id } = useParams();

  useEffect(() => {
    const fetchFutureEvents = async () => {
      try {
        const response = await axios.get(
          `${BaseUrl}/api/v1/events/past-event/${id}`
        ); // Replace with your correct API route
        setEvent(response.data.event);
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
    const options = { month: 'short', day: 'numeric' };
    const formattedDate = date.toLocaleDateString('en-US', options);
    const year = date.getFullYear();
    return `${formattedDate}, ${year}`;
  };

  const startDate = event.startDateTime ? formatDate(event.startDateTime) : "";
  const endDate = event.endDateTime ? formatDate(event.endDateTime) : "";
  const formattedDateRange = `${startDate.split(',')[0]} - ${endDate.split(',')[0]}, ${startDate.split(',')[1]}`;

  const categoryText = String(event.category || "");
  const categoryWords = categoryText.split(" ");
  const allButLastCategoryWord = categoryWords.slice(0, -1).join(" ");
  const lastCategoryWord = categoryWords[categoryWords.length - 1];

  return (
    <div style={{ background: "#f6d46b" , width:'100%'}}>
      <div className="container">
        <div className="event-section">
          <div className="row d-flex justify-content-between align-items-center">
            <div
              className="col-12 col-md-6"
              style={{ color: "#480249", position: "relative" }}
            >
              <h1 style={{ marginBottom: "1rem" }}>
                {event.title}
              </h1>
            </div>
            <div className="col-12 col-md-6 d-md-flex justify-content-md-end">
              {showMessage && (
                 <div
                 className=" d-flex align-items-center justify-content-center"
                 style={{
                  position:'absolute',
                   right: "250px",
                   top:'110px',
                   
                   backgroundImage: `url(${FlaggedBg})`,
                   backgroundSize: "contain",
                   backgroundPosition: "center",
                   backgroundRepeat: "no-repeat",
                   height: "170px",
                   width: "280px",
                 }}
               >
                 <div className="w-75 h-75 d-flex flex-column">
                   <textarea
                     name=""
                     id=""
                     className="w-100 h-100 border-0 p-1"
                     placeholder="When flagging content please include message for our admin"
                     style={{ outline: "none" }}
                   ></textarea>
                   <button
                     className="btn position-relative start-50"
                     style={{
                       backgroundImage: `url(${FlaggedBtn})`,
                       backgroundSize: "contain",
                       backgroundPosition: "center",
                       backgroundRepeat: "no-repeat",
                       width: "110px",
                       height: "50px",
                     }}
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
                className="d-flex gap-2 mt-5"
                style={{ marginRight: "40px" }}
              >
                <img src={redImage} alt="" onClick={handleFlagClick} className="flage" style={{ cursor: 'pointer', width: '30px', height: '30px', marginTop: '5px' }} />
                <div className="mt-2">
                  <FaHeart  style={{ color: "red", width: '30px', height: '30px' }} />
                </div>
              </div>
            </div>
          </div>
          <div className="mt-2 d-md-flex justify-content-end">
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
                    cursor: "pointer"
                  }}
                />
              </Link>
            </div>
            <div className="col-12 col-md-5">
              <div className="d-md-flex flex-wrap justify-content-center mt-2">
                <div style={{ marginRight: "30px" }}>
                  <img
                    src="https://images.unsplash.com/photo-1547153760-18fc86324498?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW9kZXJuJTIwZGFuY2V8ZW58MHx8MHx8fDA%3D"
                    alt="logo"
                    className="danceee"
                    style={{
                      height: "200px",
                      objectFit: "cover",
                      borderRadius: "0px",
                    }}
                  />
                </div>
                <div
                  className="d-flex align-items-center justify-content-center text-black"
                  style={{
                    background: "#9bb09d",
                    width: "200px",
                    height: "200px",
                    borderTopLeftRadius: "0",
                    borderTopRightRadius: "0",
                    borderBottomLeftRadius: "90px",
                    borderBottomRightRadius: "90px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    textAlign: "center",
                  }}
                >
                  <p className="m-0 text-center">
                    <strong className="fs-4">{formattedDateRange}</strong>
                  </p>
                </div>
              </div>

              <div className="d-flex flex-wrap justify-content-center justify-items-center gap-1 mt-3">
                <div
                  className="d-flex align-items-center justify-content-center text-black"
                  style={{
                    background: "#ffa7df",
                    width: "200px",
                    height: "200px",
                    borderTopLeftRadius: "0",
                    borderTopRightRadius: "90px",
                    borderBottomLeftRadius: "0",
                    borderBottomRightRadius: "90px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    textAlign: "center",
                  }}
                >
                  <p className="m-0"  >
                    <strong className="fs-4">{firstTwoWords}</strong>
                  </p>
                  <p className="m-0" >
                    <strong className="fs-4">{thirdWord}</strong>
                  </p>
                </div>
                <div
                  className="d-flex align-items-center justify-content-center rounded-circle bg-white text-black"
                  style={{ width: "200px", height: "200px" }}
                >
                  <p className="text-center m-0" style={{width:'170px'}}>
                    <strong className=" ">{allButLastCategoryWord}</strong>
                    <br />
                    <strong className="">{lastCategoryWord}</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="d-md-flex gap-5 mt-5">
            <div className="col-12 col-md-7">
              <div className="d-flex align-items-center gap-2 mb-3 position-relative">
                <div
                  style={{ position: "relative", display: "inline-block" }}
                >
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
                  <Link to={event.eventlink}><FaFacebookSquare size={30} style={{ color: "blue", cursor: 'pointer' }} /></Link>
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
                  <p className="ml-3 mb-0">
                    {event.price}
                  </p>
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

export default SinglePastEvent;
