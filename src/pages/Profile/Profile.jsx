import React, { useContext, useEffect, useRef, useState } from "react";
import "./Profile.css";
import edit from "../../img/icons/edit.png";
import dance from "../../img/icons/dance.png";
import year from "../../img/icons/year.png";
import lead from "../../img/icons/lead.png";
import follow from "../../img/icons/follow.png";
import bachata from "../../img/icons/bachata.png";
import kozamba from "../../img/icons/kizomba.png";
import brazilian from "../../img/icons/brazilian.png";
import sidelogo from "../../img/icons/magic_stream_upwards.png";
import bell from "../../img/icons/bell.png";
import arrowcorrect from "../../img/icons/arrowcorrect.png";
import arrowblur from "../../img/icons/arrowblur.png";
import arrowright from "../../img/icons/arrowright.png";


import ProfileForm from "../../components/ProfileForm/ProfileForm";
import ApiService from "../../services/ApiService";
import { IoMdCamera } from "react-icons/io";
import NotificationService from "../../components/NotificationService/NotificationService";
import { UserContext } from "../../context/UserContext";
import eliza from "../../img/icons/eliza.png";
import InitialSignInInfo from "../NotificationPage/InitialSignInInfo";
import MyFPevents from "../NotificationPage/MyDances/MyFPevents";
const Profile = () => {
  return (
    <>
    <div className="profile_maindiv">
      <main className=" " style={{ overflowX: "hidden" }}>
        <div className="p-4 col-md-11  row  mx-auto">
          <div className="col-md-6  profileUser d-flex align-items-center ">
            <img
              src={edit}
              alt=""
              width={30}
              height={30}
              className="position-absolute top-0 editImg"
            />
            <div>
              {" "}
              <img src={eliza} alt="eliza" className="imgmain" />
            </div>
          </div>
          <div className="col-md-6 profile_Info p-0 ">
            <h3>My Dance Profile</h3>
            <div className=" profile_tablediv ">
              <div className="d-md-flex  justify-content-between align-items-center gap-2 advancemainimg ">
                <img
                  src={dance}
                  alt=""
                  className="img-fluid "
                  style={{ mixBlendMode: "multiply" }}
                />
                <div className="d-flex justify-content-between gap-5 mt-2  advancemaintext ">
                  <img src={bachata} alt="" className="img-fluid logserivce " />
                  <img src={kozamba} alt="" className="img-fluid logserivce" />
                  <img
                    src={brazilian}
                    alt=""
                    className="img-fluid logserivce "
                  />
                </div>
              </div>
              <div className="d-md-flex  d-lg-flex justify-content-between align-items-center gap-4 advancemainimg mt-2">
                <img
                  src={year}
                  alt=""
                  className="img-fluid "
                  style={{ mixBlendMode: "multiply" }}
                />
                <div className="d-flex justify-content-between mt-2  advancemaintext">
                  <div className="  ps-3 fw-bold w-25 ">5</div>
                  <div className=" text-center fw-bold w-25 ">7</div>
                  <div className=" text-center fw-bold w-25  ">5</div>
                </div>
              </div>
              <div className="d-md-flex d-lg-flex justify-content-between align-items-center gap-4 advancemainimg mt-3">
                <img
                  src={follow}
                  alt=""
                  className="img-fluid "
                  style={{ mixBlendMode: "multiply" }}
                />

                <div className="d-flex justify-content-between mt-2 p-2 w-100  advancemaintext advancemaintextlg">
                  <div className=" fw-bold textsize w-25 ">Advance</div>
                  <div className=" fw-bold textsize w-25">Advance</div>
                  <div className="  fw-bold textsize w-25">Advance</div>
                </div>
              </div>
              <div className="d-md-flex justify-content-between align-items-center gap-4 advancemainimg mt-3">
                <img
                  src={lead}
                  alt=""
                  className="img-fluid "
                  style={{ mixBlendMode: "multiply" }}
                />
                <div className="d-flex justify-content-between mt-2 p-2 w-100  advancemaintext advancemaintextlg">
                  <div className=" fw-bold textsize w-25">Intermediate</div>
                  <div className="fw-bold textsize w-25">Intermediate</div>
                  <div className=" fw-bold textsize ">Intermediate</div>
                </div>
              </div>
            </div>
          </div>
          <div className="profile-container">
            <div className="profile-details">
              <div className="detail-item">
                <h4 className="text">UserName:</h4>
                <h4>HugsOfFire</h4>
              </div>
              <div className="detail-item">
                <h4>Email:</h4>
                <h4>voila@gmail.com</h4>
              </div>
              <div className="detail-item">
                <h4>Name:</h4>
                <h4>Eliza</h4>
              </div>
              <div className="detail-item">
                <h4>Dance alias:</h4>
                <h4>Hugs Of Fire</h4>
              </div>
              <div className="detail-item">
                <h4>City:</h4>
                <h4>MTL</h4>
              </div>
              <div className="detail-item">
                <h4>I Move&Muse:</h4>
                <h4>With all my being</h4>
              </div>
            </div>
            <div className="profile-image">
              <img src={sidelogo} alt="Profile" />
            </div>
          </div>
        </div>
      </main>
      </div>

      {/* <div className="maintwo pt-5 h-50 d-flex justify-content-center align-items-center">
        <div className="  d-flex align-items-center gap-3  justify-content-center">
          <img src={bell} alt="" className="img-fluid icon-bell" />
          <div className="notificationmain">
            <h3 className="  fw-bold d-flex justify-content-center  ">
              Notifications
            </h3>
          </div>
          <img src={bell} alt="" className="img-fluid icon-bell" />
        </div>
        <div className="labelinfo align-items-center gap-2 justify-content-center">
          <div className="d-flex align-items-center gap-3  ">
            <div className="  border border-1 border- black p-3 mt-3 rounded-5 ">
              <h3>Your reviw was flagged </h3>
              <p className="">
                Creme de la creme of African dances and 1 Gala night of
                celebration of multiculturalism, diversity, the arts including
                performances and fashion shows by African designers. More of
                celebration of multiculturalism, diversity, the arts including
                performances and fashion shows by African designers.
              </p>
            </div>
            <div className="icon-arrow">
              <img src={arrowcorrect} alt="" className="icon-arrow" />
            </div>
          </div>

          <div className="d-flex align-items-center gap-3  mt-3">
            <div className="  border border-1 border- black p-3 mt-3 rounded-5 ">
              <h3>The review you flagged was removed </h3>
              <p className="">
                Creme de la creme of African dances and 1 Gala night of
                celebration of multiculturalism, diversity, the arts including
                performances and fashion shows by African designers. More of
                celebration of multiculturalism, diversity, the arts including
                performances and fashion shows by African designers.
              </p>
            </div>
            <div>
              <img src={arrowblur} alt="" className="icon-arrow" />
            </div>
          </div>
          <div className="d-flex align-items-center gap-3 mt-3">
            <div className="border border-1 border- black p-3 mt-3 rounded-5 ">
              <h3>Your Other Magic Kudo was flagged </h3>
              <p className="">
                Creme de la creme of African dances and 1 Gala night of
                celebration of multiculturalism, diversity, the arts including
                performances and fashion shows by African designers. More of
                celebration of multiculturalism, diversity, the arts including
                performances and fashion shows by African designers.
              </p>
            </div>
            <div className="iconarowmainkudoflaged">
              <img src={arrowcorrect} alt="" className="icon-arrow" />
            </div>
          </div>
        </div>
        <div className="arrowfavouritemain">
          <img src={arrowright} alt="" className="arrow-rightfavourite" />
        </div>

        
      </div> */}

      <InitialSignInInfo />
      <ProfileForm />
      <MyFPevents />
      
    </>
  );
};

export default Profile;
