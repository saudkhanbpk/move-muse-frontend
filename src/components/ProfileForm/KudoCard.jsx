import React from "react";
import RecentKudosCard from "../RecentKudos/RecentKudosCard";
import GivesKudoCards from "./GivesKudoCards";
import underLine from "../../img/icons/underLine.svg";
export const KudoCard = ({poeple}) => {
  return (
    <div className="mt-5">
      <div
        style={{
          color: "#013f3f",
          position: "relative",
          display: "inline-block",
        }}
      >
        <h1 style={{ marginBottom: "0.5rem" }}>Give Kudos</h1>
        <img
          src={underLine}
          alt="Underline"
          style={{
            position: "absolute",
            bottom: "-10px", // Adjust as needed
            left: "0",
            width: "100%",
          }}
        />
      </div>
      <div>
        <div className="d-flex align-items-center mt-5  justify-content-between gap-5 ">
          <strong>People responded to the FB event</strong>
          <div
            className="d-flex align-items-center justify-content-center text-black"
            style={{
              background: "white",
              width: "50px",
              height: "50px",
              borderTopLeftRadius: "0",
              borderTopRightRadius: "60px",
              borderBottomLeftRadius: "0",
              borderBottomRightRadius: "60px",
            }}
          >
            <p className="text-center m-0">
              <strong>{poeple}</strong>
            </p>
          </div>
        </div>
        <div className="d-flex align-items-center  justify-content-between gap-5 mt-5">
          <strong>Move & Muse attendees confirmed</strong>
          <div
            className="d-flex align-items-center justify-content-center text-black"
            style={{
              background: "white",
              width: "50px",
              height: "50px",
              borderTopLeftRadius: "0",
              borderTopRightRadius: "60px",
              borderBottomLeftRadius: "0",
              borderBottomRightRadius: "60px",
            }}
          >
            <p className="text-center m-0">
              <strong>25</strong>
            </p>
          </div>
        </div>
        <div className="row row-cols-4 justify-content-start position-relative mt-5">
          {[1, 2, 3, 4, 5, 6, 7, 8,].map((user, index) => (
            <GivesKudoCards user={user} index={index} key={index} />
          ))}
          <div className="col d-flex align-items-center justify-content-center mt-3">
            <span className="count__peoplee border border-5 border-dark px-3 py-2">
              <p className="m-0">+56 People</p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
