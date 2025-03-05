import React, { useContext, useEffect, useState } from "react";
import "./profileown.css";
import edit from "../../img/icons/edit.png";
import dance from "../../img/icons/dance.png";
import year from "../../img/icons/year.png";
import lead from "../../img/icons/lead.png";
import follow from "../../img/icons/follow.png";
import NotificationService from "../../components/NotificationService/NotificationService";
import { UserContext } from "../../context/UserContext";
import InitialSignInInfo from "../NotificationPage/InitialSignInInfo";
import { BaseUrl } from "../../BaseUrl";
import CardsForFutureEvents from "../../components/CardsForEvents/CardsForFutureEvents";
import CardsForPastsEvents from "../../components/CardsForEvents/CardsForPastsEvents";
import MAndNPage from "../M&NPage/M&NPage";

const Profile = () => {
  const { profileCredentials, setProfileCredentials, token, setOpen, open } =
    useContext(UserContext);
  const [userData, setUserData] = useState(null);
  const [dances, setDances] = useState([]);
  const [success, setSuccess] = useState(
    JSON.parse(localStorage.getItem("success")) || false
  );

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(`${BaseUrl}/api/v1/auth/get-profile`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
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

  useEffect(() => {
    localStorage.setItem("success", JSON.stringify(success));
  }, [success]);

  if (!userData) {
    return <div>Internal Server Error...</div>;
  }

  return (
    <>
      <div className="profile_maindiv">
        <main className=" " style={{ overflowX: "hidden" }}>
          <div className="p-4 col-md-11 row mx-auto mainofprofile">
            <div className="col-md-6 profileUser d-flex align-items-center ">
              <img
                src={edit}
                alt=""
                width={30}
                height={30}
                title="Edit Profile"
                onClick={() => setOpen(!open)}
                className="position-absolute top-25 editImg cursor-pointer immgg"
              />
              <div className="image-container">
                <img
                  src={profileCredentials.profilePicture}
                  className="profileimg "
                  style={{
                    borderRadius: "100%",
                    width: "100px",
                    height: "100px",
                  }}
                />
              </div>
            </div>
            <div className="col-md-6 profile_Info p-0 ">
              <h3>My Dance Profile</h3>
              <div className="profile_tablediv">
                <div className="d-md-flex justify-content-between align-items-center gap-2 advancemainimg ">
                  <img
                    src={dance}
                    alt=""
                    className="img-fluid"
                    style={{ mixBlendMode: "multiply" }}
                  />
                  <div className="d-flex  ms-3 justify-content-around align-items-center gap-md-4 gap-sm-0 advancemainimg w-100">
                    {profileCredentials?.dances?.map((dance, index) => (
                      <div key={index} className="text-center w-100">
                        <span className="maintext fs-5  ">{dance.style}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="d-md-flex justify-content-between align-items-center gap-4 advancemainimg mt-2">
                  <img
                    src={year}
                    alt=""
                    className="img-fluid"
                    style={{ mixBlendMode: "multiply" }}
                  />
                  <div className="d-flex justify-content-between mt-2 advancemaintext w-100">
                    {profileCredentials?.dances?.map((dance, index) => (
                      <div key={index} className="text-center maintext w-100">
                        {dance.years}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="d-md-flex justify-content-between align-items-center gap-4 advancemainimg mt-3">
                  <img
                    src={follow}
                    alt=""
                    className="img-fluid"
                    style={{ mixBlendMode: "multiply" }}
                  />
                  <div className="d-flex justify-content-between mt-2  w-100 advancemaintext advancemaintextlg">
                    {profileCredentials?.dances?.map((dance, index) => (
                      <div
                        style={{ width: "fit-content" }}
                        key={index}
                        className="text-center w-100 maintext"
                      >
                        {dance.follow}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="d-md-flex justify-content-between align-items-center gap-4 advancemainimg mt-3">
                  <img
                    src={lead}
                    alt=""
                    className="img-fluid"
                    style={{ mixBlendMode: "multiply" }}
                  />
                  <div className="d-flex justify-content-between mt-2  w-100 advancemaintext advancemaintextlg">
                    {profileCredentials?.dances?.map((dance, index) => (
                      <div
                        style={{ width: "fit-content" }}
                        key={index}
                        className="text-center w-100 maintext"
                      >
                        {dance.lead}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {success ? (
              <div className="profile-container ">
                <div className="profile-details">
                  <div className="detail-item">
                    <h4>Name:</h4>
                    <h4 className="formlabels">
                      {profileCredentials?.fullName}
                    </h4>
                  </div>
                  <div className="detail-item">
                    <h4 className="text">Username:</h4>
                    <h4 className="formlabels">
                      {profileCredentials?.username}
                    </h4>
                  </div>
                  <div className="detail-item">
                    <h4>email:</h4>
                    <h4 className="formlabels">{profileCredentials?.email}</h4>
                  </div>
                  <div className="detail-item">
                    <h4>City:</h4>
                    <h4 className="formlabels">{profileCredentials?.city}</h4>
                  </div>
                  <div className="detail-item">
                    <h4>Dance alias:</h4>
                    <h4 className="formlabels">
                      {profileCredentials?.danceAlias}
                    </h4>
                  </div>
                  <div className="detail-item">
                    <h4>I Move&Muse:</h4>
                    <h4 className="formlabels">
                      {profileCredentials?.moveMuse}
                    </h4>
                  </div>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        </main>
      </div>

      {open && <InitialSignInInfo setSuccess={setSuccess} />}

      <div className="ms-4 mt-5">
        <h1 className="ps-4"> My Future Events</h1>
        <CardsForFutureEvents />
      </div>
      <div className="ms-4" >
        <h1 className="ps-4"> My Past Events</h1>
        <CardsForPastsEvents />
      </div>
      {/* <div>
        <MAndNPage />
      </div> */}
    </>
  );
};

export default Profile;
