import React, { useContext, useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import ApiService from "../../services/ApiService";
import { FaUser } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import { FaClock } from "react-icons/fa6";
import "./EventPage.css";
import { MdOutlineDateRange } from "react-icons/md";
import Dropdown from "react-bootstrap/Dropdown";
import InviteUser from "./InviteUser";
import { UserContext } from "../../context/UserContext";
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa6";
import NotificationService from "../../components/NotificationService/NotificationService";

const EventPage = () => {
  const { profileCredentials } = useContext(UserContext);
  const [event, setEvent] = useState(null);
  const [userInterest, setUserInterest] = useState([]);

  const eventRef = useRef(() => {});
  const interestRef = useRef(() => {});
  const { id } = useParams();

  eventRef.current = async () => {
    try {
      const res = await ApiService.post(
        "events/single-events",
        { eventId: id },
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setEvent(res.data.event);
    } catch (error) {
    }
  };

  useEffect(() => {
    if (id) {
      eventRef.current();
    }
  }, [id]);

  interestRef.current = async () => {
    try {
      const res = await ApiService.get(
        `events/user-interest-events?eventId=${id}`,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setUserInterest(res.data);
    } catch (error) {
    }
  };

  useEffect(() => {
    interestRef.current();
  }, [id]);

  const formatDateString = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const isIdInUserInterest = userInterest?.some((interest) => {
    return interest?.profile?._id === profileCredentials?._id;
  });

  const toggleInterest = async () => {
    if (!profileCredentials) {
      return NotificationService.notifySuccess("Create your profile first");
    }
    const updatedInterest = isIdInUserInterest
      ? userInterest.filter(
          (interest) => interest.profile?._id !== profileCredentials?._id
        )
      : [
          ...userInterest,
          {
            profile: {
              _id: profileCredentials?._id,
              profilePic: profileCredentials?.profilePic,
              username: profileCredentials?.username,
            },
            approve: false,
            accept: false,
            _id: new Date().getTime().toString(),
          },
        ];
    setUserInterest(updatedInterest);
    try {
      await ApiService.post(
        "events/interest-events",
        { eventId: id, userId: profileCredentials._id },
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      NotificationService.notifySuccess("Interest toggled");
    } catch (error) {
    }
  };

  return (
    <div className="d-flex flex-column gap-5 mb-5 align-items-center">
      <div className="w-100">
        <img
          src={event?.imageUrl}
          alt="event image"
          className="object-fit-cover w-100"
          style={{ maxHeight: 500 }}
        />
      </div>

      <div
        className="d-flex flex-grow-1 align-items-end flex-wrap justify-content-between px-4 gap-2 border-bottom m-auto border-dark pb-4"
        style={{ width: "80%" }}
      >
        <div className="d-flex flex-column">
          <span className="fw-semibold fs-5">
            {formatDateString(event?.startDateTime)}
          </span>
          <span className="fw-bold fs-1">{event?.title}</span>
          <span className="fw-semibold fs-5">{event?.location}</span>
        </div>

        <div className="d-flex gap-3">
          <button className="btn btn-dark" onClick={toggleInterest}>
            {isIdInUserInterest ? (
              <FaStar className="mb-1 mx-1" />
            ) : (
              <CiStar className="mb-1 mx-1" />
            )}
            Interested
          </button>
          {event?.profile?._id === profileCredentials?._id && (
            <InviteUser eventId={event?._id} />
          )}
        </div>
      </div>

      <div className="d-flex flex-column flex-md-row justify-content-between border w-100 rounded bg-light p-3 details">
        <div className="d-flex flex-column gap-3">
          <h1 className="fw-semibold">Detail</h1>
          <span className="d-flex align-items-center gap-3 ">
            <FaUser />
            <p className="m-0">
              Event by <strong>{event?.profile?.category}</strong>
            </p>
            <img
              src={event?.profile?.profilePic}
              alt="Host image"
              className="img-fluid rounded-circle"
              width={50}
              height={50}
            />
          </span>
          <span className="d-flex align-items-center gap-3">
            <FaClock />
            <p className="m-0">
              Event duration <strong>{event?.duration}</strong>
            </p>
          </span>
          <span className="d-flex align-items-center gap-3">
            <MdOutlineDateRange />
            <p className="m-0">
              Start Date{" "}
              <strong>{formatDateString(event?.startDateTime)}</strong>
            </p>
          </span>
          <span className="d-flex align-items-center gap-3">
            <MdOutlineDateRange />
            <p className="m-0">
              End Date <strong>{formatDateString(event?.endDateTime)}</strong>
            </p>
          </span>
          <span className="d-flex align-items-center gap-3">
            <IoLocation />
            <p className="m-0">{event?.location}</p>
          </span>
          <span className="d-flex align-items-center gap-3">
            <p className="m-0" style={{ maxWidth: 500 }}>
              {event?.detail}
            </p>
          </span>
        </div>

        <div className="vr d-none d-md-block" />
        <hr />
        <div className="w-50 my-5 mx-4">
          <h1 className="fw-semibold fs-5">Interested</h1>
          <div className="d-flex flex-column gap-2">
            {userInterest?.map((user) => (
              <span key={user._id} className="d-flex align-items-center gap-2">
                <img
                  src={user?.profile?.profilePic}
                  alt="user image"
                  className="img-fluid rounded-circle"
                  width={30}
                  height={30}
                />
                <p className="m-0">{user?.profile?.username}</p>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventPage;
