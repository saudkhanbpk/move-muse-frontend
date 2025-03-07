import React, { useContext, useEffect, useRef, useState } from "react";
// import { Container, Row, Col, Button, Nav, Navbar } from "react-bootstrap";
import Hero from "./HPComponents/HP_Hero/HP_Hero";
import MoveMuse from "./HPComponents/HP_MoveMuse/HP_MoveMuse";
import "bootstrap/dist/css/bootstrap.min.css";
import HP_Celebrate from "./HPComponents/HP_Celebrate/HP_Celebrate";
import HP_Share from "./HPComponents/HP_Share/HP_Share";
import HP_PlatformFeatures from "./HPComponents/HP_PlatformFeatures/HP_PlatformFeatures";
import HP_Events from "./HPComponents/HP_Events/HP_Events";
import DiscoverNewEvent from "../../components/DiscoverNewEvent/DiscoverNewEvent";
import KeyProject from "../../components/KeyProject/KeyProject";
// import FbEvent from "../../components/Events/FbEvent";
// import { UserContext } from "../../context/UserContext";
import ApiService from "../../services/ApiService";
import InitialSignInInfo from "../NotificationPage/InitialSignInInfo";
import { UserContext } from "../../context/UserContext";
import CardsForFutureEvents from "../../components/CardsForEvents/CardsForFutureEvents";

const HomePage = () => {
  // const { user } = useContext(UserContext);

  const { profileCredentials } = useContext(UserContext);
  const [success, setSuccess] = useState(
    JSON.parse(localStorage.getItem("success")) || false
  );

  const [upcomingEvents, setUpcomingEvents] = useState([]);
  const [isFirstTimeLoginModalOPen, setIsFirstTimeLoginModalOPen] =
    useState(false);
  const upcomingEventsRef = useRef(() => {});

  upcomingEventsRef.current = async () => {
    const upComing = await ApiService.get("events/future-events");
    setUpcomingEvents(upComing.data);
  };

  useEffect(() => {
    upcomingEventsRef.current();
  }, [upcomingEventsRef]);

  const [pastEvents, setPastEvents] = useState([]);

  const pastEventsRef = useRef(() => {});

  pastEventsRef.current = async () => {
    const upComing = await ApiService.get("events/past-events");
    setPastEvents(upComing.data);
  };

  useEffect(() => {
    pastEventsRef.current();
  }, [upcomingEventsRef]);

  useEffect(() => {
    if (profileCredentials?.isFirstTimeLogin) {
      setIsFirstTimeLoginModalOPen(true);
    } else {
      setIsFirstTimeLoginModalOPen(false);
    }
  }, [profileCredentials?.isFirstTimeLogin]);

  const handleFavoriteToggle = (eventIdData) => {
  };

  return (
    <div className="homepage">
      {isFirstTimeLoginModalOPen && (
        <InitialSignInInfo setSuccess={setSuccess} />
      )}
      <Hero />
      {/* <HP_Events
        upcomingEvents={upcomingEvents}
        pastEvents={pastEvents}
        onFavoriteToggle={handleFavoriteToggle}
      /> */}
      <div className="">
        <p className="mt-4 fs-1 fw-bold ms-5">Coming up</p>
      </div>
      <div>
        <CardsForFutureEvents />
      </div>
      <HP_PlatformFeatures />
      <DiscoverNewEvent />
      <HP_Share />
      <HP_Celebrate />
      <MoveMuse />
      <KeyProject />
    </div>
  );
};

export default HomePage;
