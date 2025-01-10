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
import magic_circle from "../../img/icons/magic_circle.png";
import ProfileForm from "../../components/ProfileForm/ProfileForm";
import ApiService from "../../services/ApiService";
import { IoMdCamera } from "react-icons/io";
import NotificationService from "../../components/NotificationService/NotificationService";
import { UserContext } from "../../context/UserContext";

const Profile = () => {
  const { profileCredentials, setProfileCredentials } = useContext(UserContext);

  const [userImage, setUserImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const fallbackImage =
    "https://res.cloudinary.com/dobkvroor/image/upload/v1716439396/muitgl2brnavvwqhrplw.svg";
  const fileRef = useRef(() => {});

  fileRef.current = async () => {
    const formData = new FormData();
    formData.append("image", userImage);
    try {
      const res = await ApiService.post("upload-image/upload", formData, {
        withCredentials: true,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setProfileCredentials({
        ...profileCredentials,
        profilePic: res.data.url,
      });
      if (res.status === 200) {
        NotificationService.notifySuccess("Image upload successfully");
      }
    } catch (error) {
      NotificationService.notifyError("Image can't uploaded try again later ");
    }
  };

  useEffect(() => {
    if (userImage) {
      fileRef.current();
    }
  }, [userImage, fileRef]);

  const handleImageChange = (e) => {
    setUserImage(e.target.files[0]);
    setPreviewImage(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <>
      <main className="profile_maindiv " style={{ overflowX: "hidden" }}>
        <div className="p-4 col-md-11 row  mx-auto">
          <div className="col-md-6  profileUser d-flex align-items-center ">
            <img
              src={edit}
              alt=""
              width={30}
              height={30}
              className="position-absolute top-0 editImg"
            />
            <img
              src={profileCredentials?.profilePic || fallbackImage}
              width={250}
              height={250}
              alt=""
              className="rounded-circle object-fit-cover align-self-center m-auto"
            />
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
          <div className="my-4 row ">
            <div className="col-md-4 row p-3">
              <div className="mobresp fw-bold col-6 ">
                <p className="fw-bold">username</p>
              </div>
              <div className="mobresp col-6  ">
                <p className="">{profileCredentials?.username}</p>
              </div>
              <div className="mobresp col-6  ">
                <p className="fw-bold">Email</p>
              </div>
              <div className="mobresp col-6">
                <span className="mobresp mb-0 d-block font-size-13 ">
                  {profileCredentials?.email}
                </span>
              </div>
              <div className="mobresp col-6">
                <p className="fw-bold">Name</p>
              </div>
              <div className="mobresp col-6">
                <p className="">{profileCredentials?.userId?.fullName}</p>
              </div>
              <div className="mobresp col-6 ">
                <p className="fw-bold">Dance alias: </p>
              </div>
              <div className="mobresp col-6">
                <p className="">{profileCredentials?.danceAlias}</p>
              </div>
              <div className="mobresp col-6  ">
                <p className="fw-bold">City: </p>
              </div>
              <div className="mobresp col-6">
                <p className="">{profileCredentials?.danceAlias}</p>
              </div>
              <div className="mobresp col-6  ">
                <p className="fw-bold">I Move & Muse: </p>
              </div>
              <div className="mobresp col-6">
                <p className="">{profileCredentials?.moveMuse}</p>
              </div>
            </div>
            <div className="col-md-6  d-flex justify-content-end">
              <img
                src={sidelogo}
                className="img-fluid"
                style={{ width: "280px" }}
                alt=""
              />
            </div>
          </div>
        </div>
      </main>

      <div className="maintwo pt-5 h-50 d-flex justify-content-center align-items-center">
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

        <div className="d-flex flex-wrap align-items-center justify-content-center py-5 w-100">
          <div
            className="flex-grow-1 position-relative"
            style={{ maxWidth: "70%" }}
          >
            <div
              style={{
                backgroundImage: `url(${magic_circle})`,
                maxWidth: "500px",
                maxHeight: "500px",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              className="d-flex align-items-center justify-content-center m-auto"
            >
              <div
                className="position-relative rounded-circle d-flex flex-column align-items-center justify-content-center imgUploadBg m-5 "
                style={{
                  height: 200,
                  width: 200,
                }}
              >
                {previewImage ? (
                  <img
                    src={previewImage}
                    alt="userImage"
                    width={200}
                    height={200}
                    className="rounded-circle"
                  />
                ) : (
                  <span className="small p-2">
                    Upload your photo so others can recognize you and share some
                    kudo love!
                  </span>
                )}
                <label
                  htmlFor="imageUpload"
                  className="z-3 position-absolute bottom-0"
                >
                  <IoMdCamera size={40} />
                </label>
                <input
                  type="file"
                  name="userImage"
                  id="imageUpload"
                  className="d-none"
                  onChange={handleImageChange}
                />
              </div>
            </div>
          </div>
          <div
            style={{ width: 200, height: 200, backgroundColor: "#99C4B8" }}
            className="rounded-circle d-flex align-items-center justify-content-center text-light"
          >
            <p className="fw-bold"> Initial sign in info</p>
          </div>
        </div>
      </div>
      <ProfileForm />
    </>
  );
};

export default Profile;
