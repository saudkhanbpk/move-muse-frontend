import React from "react";
import arrowright from "../../img/icons/arrowright.png";
import arrowcorrect from "../../img/icons/arrowcorrect.png";
import arrowblur from "../../img/icons/arrowblur.png";
import bell from "../../img/icons/bell.png";
import InitialSignInInfo from "./InitialSignInInfo";
import ConfirmAttendee from "./ConfirmAttendee";

function Notification() {
  return (
    <>
      <div
        className="  d-flex flex-column align-items-center justify-content-center p-5 "
        style={{ backgroundColor: "#fff7d8" }}
      >
        <div className="d-flex gap-2">
          <img src={bell} alt="bell" width={30} height={30} />
          <h3 className="fw-bold font-ekushey-kolom">Notifications</h3>
          <img src={bell} alt="bell" width={30} height={30} />
        </div>
        <div className="mt-3 d-flex gap-3">
          <div className=" rounded-5 p-3 border border-3 border-gray">
            <h3>Your reviw was flagged</h3>
            <p>
              Creme de la creme of African dances and 1 Gala night of
              celebration of multiculturalism, diversity, the arts including
              performances and fashion shows by African designers. More of
              celebration of multiculturalism, diversity, the arts including
              performances and fashion shows by African designers.
            </p>
          </div>
          <div className="d-flex justify-content-center align-items-center">
            <img src={arrowcorrect} alt="arrow" width={35} />
          </div>
        </div>
        <div className="mt-3 d-flex gap-3">
          <div className=" rounded-5 p-3 border border-3 border-gray">
            <h3>The review you flagged was removed </h3>
            <p>
              Creme de la creme of African dances and 1 Gala night of
              celebration of multiculturalism, diversity, the arts including
              performances and fashion shows by African designers. More of
              celebration of multiculturalism, diversity, the arts including
              performances and fashion shows by African designers.
            </p>
          </div>
          <div className="d-flex justify-content-center align-items-center">
            <img src={arrowblur} alt="arrow" width={35} />
          </div>
        </div>
        <div className="mt-3 d-flex gap-3 ">
          <div className=" rounded-5 p-3 border border-3 border-gray">
            <h3>Your Other Magic Kudo was flagged</h3>
            <p>
              Creme de la creme of African dances and 1 Gala night of
              celebration of multiculturalism, diversity, the arts including
              performances and fashion shows by African designers. More of
              celebration of multiculturalism, diversity, the arts including
              performances and fashion shows by African designers.
            </p>
          </div>
          <div className="d-flex justify-content-center align-items-center">
            <img src={arrowcorrect} alt="arrow" width={35} />
          </div>
        </div>
        <div className="self-end d-flex mt-5  justify-content-end w-100">
          <img src={arrowright} alt="arrow" width={50} />
        </div>
      </div>
      <InitialSignInInfo />
      <ConfirmAttendee />
    </>
  );
}

export default Notification;
