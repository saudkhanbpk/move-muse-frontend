import React, { useContext, useEffect, useState } from "react";
import "./Profile.css";
import edit from "../../img/icons/edit.png";
import dance from "../../img/icons/dance.png";
import year from "../../img/icons/year.png";
import lead from "../../img/icons/lead.png";
import follow from "../../img/icons/follow.png";
import sidelogo from "../../img/icons/magic_stream_upwards.png";
import eliza from "../../img/icons/eliza.png";


import ProfileForm from "../../components/ProfileForm/ProfileForm";
import { IoMdCamera } from "react-icons/io";
import NotificationService from "../../components/NotificationService/NotificationService";
import { UserContext } from "../../context/UserContext";
import InitialSignInInfo from "../NotificationPage/InitialSignInInfo";
import MyFPevents from "../NotificationPage/MyDances/MyFPevents";
import { BaseUrl } from "../../BaseUrl";

const Profile = () => {
  const { profileCredentials, setProfileCredentials, token } = useContext(UserContext);
  const [userData, setUserData] = useState(null);
  const [dances, setDances] = useState([]);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(`${BaseUrl}/api/v1/auth/get-profile`, {
          method: "GET",
          headers: {
            "Authorization": `Bearer ${token}`,
          },
        });
        const data = await response.json();
        if (response.ok) {
          setUserData(data.user);
          setProfileCredentials(data.user);
          setDances(data.user.dances || []);
        } else {
          NotificationService.notifyError("Failed to fetch user data");
        }
      } catch (error) {
        NotificationService.notifyError("Failed to fetch user data");
      }
    };

    fetchUserData();
  }, [token]);

  if (!userData) {
    return <div>Loading...</div>;
  }

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
                <img src={profileCredentials.profilePicture || eliza} alt="eliza" className="imgmain" />
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
                  <div className="d-flex justify-content-around align-items-center gap-1 advancemainimg">
                    {dances.map((dance, index) => (
                      <div key={index} className="">
                        {/* <img src={dance.icon} alt={dance.style} className="img-fluid logserivce" /> */}
                        <span>{dance.style}</span>
                      </div>
                    ))}
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
                    {dances.map((dance, index) => (
                      <div key={index} className="fw-bold w-25 text-start px-2">{dance.years}</div>
                    ))}
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
                    {dances.map((dance, index) => (
                      <div key={index} className="fw-bold textsize w-25">{dance.follow}</div>
                    ))}
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
                    {dances.map((dance, index) => (
                      <div key={index} className="fw-bold textsize w-25">{dance.lead}</div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="profile-container">
              <div className="profile-details">
                <div className="detail-item">
                  <h4 className="text">UserName:</h4>
                  <h4>{profileCredentials.username}</h4>
                </div>
                <div className="detail-item">
                  <h4>Email:</h4>
                  <h4>{profileCredentials.email}</h4>
                </div>
                <div className="detail-item">
                  <h4>Name:</h4>
                  <h4>{profileCredentials.fullName}</h4>
                </div>
                <div className="detail-item">
                  <h4>Dance alias:</h4>
                  <h4>{profileCredentials.danceAlias}</h4>
                </div>
                <div className="detail-item">
                  <h4>City:</h4>
                  <h4>{profileCredentials.city}</h4>
                </div>
                <div className="detail-item">
                  <h4>I Move&Muse:</h4>
                  <h4>{profileCredentials.moveMuse}</h4>
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
