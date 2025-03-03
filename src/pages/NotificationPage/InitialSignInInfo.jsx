import React, { useState, useContext } from "react";
import { Modal } from "react-bootstrap";
import Dropdown from "../../components/custom-dropdown/Dropdown";
import { IoMdCamera } from "react-icons/io";
import magic_circle from "../../img/icons/magic_circle.png";
import NotificationService from "../../components/NotificationService/NotificationService";
import { UserContext } from "../../context/UserContext";
import { BaseUrl } from "../../BaseUrl";
import "./initialSignin.css";

const InitialSignInInfo = ({ setSuccess }) => {
  const {
    profileCredentials,
    setProfileCredentials,
    token,
    fetchUserData,
    setOpen,
    setProfilePicture,
    changeIsFirstTimeLogin,
  } = useContext(UserContext);
  const [userImage, setUserImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(
    profileCredentials?.profilePicture || null
  );
  const [dances, setDances] = useState(profileCredentials?.dances || []);
  const [gender, setGender] = useState(profileCredentials?.gender || "");
  const [ethnicity, setEthnicity] = useState(
    profileCredentials?.ethnicity || ""
  );
  const [birthday, setBirthday] = useState(profileCredentials?.birthday || "");
  const [style, setStyle] = useState("");
  const [since, setSince] = useState("");
  const [follow, setFollow] = useState("");
  const [lead, setLead] = useState("");
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Local state to hold form data
  const [formData, setFormData] = useState({
    fullName: profileCredentials?.fullName || "",
    username: profileCredentials?.username || "",
    city: profileCredentials?.city || "",
    danceAlias: profileCredentials?.danceAlias || "",
    moveMuse: profileCredentials?.moveMuse || "",
  });

  const genderOptions = ["Male", "Female", "Others"];
  const ethnicityOptions = [
    "African",
    "Asian",
    "Caucasian",
    "Hispanic",
    "Other",
  ];
  const birthdayOptions = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const styleOptions = [
    "Bachata",
    "Kizomba",
    "Salsa",
    "Tango",
    "Fono",
    "Swing",
    "Konpa",
    "Brazalian zouk",
    " Lindy Hop",
    "Other",
  ];
  const sinceOptions = [
    "3 months",
    "6 months",
    "9 months",
    "1 year",
    "2 years",
    "3+ years",
    "4 years",
    "5+ years",
  ];
  const followLeadOptions = [
    "Beginner",
    "Intermediate",
    "Advanced",
    "Not interested",
  ];

  const addDance = () => {
    if (dances?.length >= 10) {
      NotificationService.notifyError("You can add a maximum of ten dances.");
      return;
    }

    if (!style || !since || !follow || !lead) {
      NotificationService.notifyError("Style, Since, Follow, and Lead are required.");
      return;
    }

    if (follow === "Not interested" && lead === "Not interested") {
      NotificationService.notifyError(
        "At least one of Follow or Lead is required."
      );
      return;
    }

    const newDance = {
      style: style || "New Style",
      years: since || "0 years",
      follow,
      lead,
    };

    setDances([...dances, newDance]);
    setStyle("");
    setSince("");
    setFollow("");
    setLead("");
  };

  const removeDance = (index) => {
    const updatedDances = dances.filter((_, i) => i !== index);
    setDances(updatedDances);
    NotificationService.notifySuccess("Dance removed successfully");
  };

  const handleImageChange = (e) => {
    setUserImage(e.target.files[0]);
    setPreviewImage(URL.createObjectURL(e.target.files[0]));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      ...formData,
      dances: dances,
      gender,
      ethnicity,
      birthday,
    };

    if (!formData.fullName || !formData.city || !formData.danceAlias) {
      NotificationService.notifyError(
        "Name, City, and Dance Alias are required."
      );
      return;
    }

    if (userImage) {
      const imageFormData = new FormData();
      imageFormData.append("image", userImage);
      try {
        const imageRes = await fetch(`${BaseUrl}/api/v1/upload-image/upload`, {
          method: "POST",
          body: imageFormData,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const imageData = await imageRes.json();
        if (imageRes.ok) {
          data.profilePicture = imageData.url;
          setProfilePicture(data.profilePicture);
          NotificationService.notifySuccess("Image uploaded successfully");
          changeIsFirstTimeLogin();
        } else {
          NotificationService.notifyError(
            "Image can't be uploaded. Try again later."
          );
          return;
        }
      } catch (error) {
        console.log(error);
        NotificationService.notifyError(
          "Image can't be uploaded. Try again later."
        );
        return;
      }
    }

    try {
      const res = await fetch(`${BaseUrl}/api/v1/auth/update-profile`, {
        method: "PUT", // or "PATCH" depending on your API
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const resData = await res.json();
      if (res.ok) {
        NotificationService.notifySuccess("Profile updated successfully");
        setSuccess(true);
        setProfileCredentials({
          ...profileCredentials,
          ...data,
          profilePicture: data.profilePicture,
        });
        changeIsFirstTimeLogin();
        fetchUserData();
        setOpen(false);
      } else {
        NotificationService.notifyError("Profile update failed");
      }
    } catch (error) {
      console.log(error);
      NotificationService.notifyError("Profile update failed");
    }
  };

  return (
    <Modal show={true} onHide={() => setOpen(false)} centered>
      <Modal.Header closeButton></Modal.Header>
      <h4 style={{ textAlign: "center", marginTop: "10px" }}>Update Profile</h4>
      <Modal.Body>
        <div className="d-flex flex-wrap align-items-center justify-content-center w-full py-2 w-md-100">
          <div className="flex-grow-1 position-relative uploadmaindiv">
            <div
              style={{
                backgroundImage: `url(${magic_circle})`,
                maxWidth: "500px",
                maxHeight: "500px",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundColor: "#fff", // Ensure a solid background color
              }}
              className="d-flex align-items-center justify-content-center m-auto"
            >
              <div
                className="position-relative rounded-circle d-flex flex-column align-items-center justify-content-center imgUploadBg hover-effect"
                style={{
                  height: 200,
                  width: 200,
                  cursor: "pointer",
                  backgroundColor: "#fff", // Ensure a solid background color
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
                  <span
                    className="fs-6 p-2"
                    style={{
                      textAlign: "center",
                      padding: "10px",
                    }}
                  >
                    Upload your photo so others can recognize you and share some
                    kudo love!
                  </span>
                )}
                <label
                  htmlFor="imageUpload"
                  className="z-3 position-absolute bottom-0 camera-icon"
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
        </div>
        <div
          className="card bg-transparent shadow p-2 rounded-4 border-3 border-black"
          style={{ border: "2px solid red", width: "100%" }}
        >
          <div className="container mt-4">
            <div className="card shadow border-0">
              <div className="card-body p-4">
                <form onSubmit={handleSubmit}>
                  <div className="row mb-3 ">
                    <label
                      htmlFor="name"
                      className="col-md-4 col-form-label fw-bold"
                    >
                      Name:
                    </label>
                    <div className="col-md-8">
                      <input
                        type="text"
                        id="name"
                        name="fullName"
                        className="form-control"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="Enter your name"
                      />
                    </div>
                  </div>

                  <div className="row mb-3">
                    <label
                      htmlFor="username"
                      className="col-md-4 col-form-label fw-bold"
                    >
                      Username:
                    </label>
                    <div className="col-md-8">
                      <input
                        type="text"
                        id="username"
                        name="username"
                        className="form-control"
                        value={formData.username}
                        onChange={handleChange}
                        placeholder="Enter your username"
                      />
                    </div>
                  </div>
                  <div className="row mb-3">
                    <label
                      htmlFor="city"
                      className="col-md-4 col-form-label fw-bold"
                    >
                      City:
                    </label>
                    <div className="col-md-8">
                      <input
                        type="text"
                        id="city"
                        name="city"
                        className="form-control"
                        value={formData.city}
                        onChange={handleChange}
                        placeholder="Enter your city"
                      />
                    </div>
                  </div>

                  <div className="row mb-3">
                    <label
                      htmlFor="danceAlias"
                      className="col-md-4 col-form-label fw-bold"
                    >
                      Dance Alias:
                    </label>
                    <div className="col-md-8">
                      <input
                        type="text"
                        id="danceAlias"
                        name="danceAlias"
                        className="form-control"
                        value={formData.danceAlias}
                        onChange={handleChange}
                        placeholder="Enter your dance alias"
                      />
                    </div>
                  </div>

                  <div className="row mb-3">
                    <label
                      htmlFor="moveMuse"
                      className="col-md-4 col-form-label fw-bold"
                    >
                      I Move & Muse:
                    </label>
                    <div className="col-md-8">
                      <input
                        type="text"
                        id="moveMuse"
                        name="moveMuse"
                        className="form-control"
                        value={formData.moveMuse}
                        onChange={handleChange}
                        placeholder="Enter your movement inspiration"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <h5 className="text-center my-4 fw-bold" style={{ color: "#480249" }}>
            A little about me
          </h5>
          <div className="row d-flex flex-column align-items-center text-center mb-4">
            <div className="col-md-8 sm:col-md-4 mt-3 ">
              <Dropdown
                id="gender"
                label={gender || "Gender"}
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                options={genderOptions}
              />
            </div>
            <div className="col-md-8 sm:col-md-4 mt-3">
              <Dropdown
                id="ethnicity"
                label={ethnicity || "Ethnicity"}
                value={ethnicity}
                onChange={(e) => setEthnicity(e.target.value)}
                options={ethnicityOptions}
              />
            </div>
            <div className="col-md-8 sm:col-md-4 mt-3 ">
              <Dropdown
                id="birthday"
                label={birthday || "Birthday"}
                value={birthday}
                onChange={(e) => setBirthday(e.target.value)}
                options={birthdayOptions}
              />
            </div>
          </div>

          <div className="my-3">
            <div className="text-center">
              <h5 className="fw-bold text-center" style={{ color: "#480249" }}>
                My Dances
              </h5>
            </div>
            <div className="d-flex flex-wrap gap-5 justify-center ms-md-5 ms-0">
              <div className="w-full w-md-1/2 text-md-center">
                <div className="d-md-flex gap-md-3 w-full">
                  <div className=" w-full">
                    <Dropdown
                      id="style"
                      label={style || "Style"}
                      value={style}
                      onChange={(e) => setStyle(e.target.value)}
                      options={styleOptions}
                    />
                  </div>
                  <div className="mb-3 w-full" style={{ zIndex: 1000 }}>
                    <Dropdown
                      id="since"
                      label={since || "Since"}
                      value={since}
                      onChange={(e) => setSince(e.target.value)}
                      options={sinceOptions}
                    />
                  </div>
                </div>
                <div className="d-md-flex gap-md-3">
                  <div className="mb-3 w-full">
                    <Dropdown
                      id="follow"
                      label={follow || "Follow"}
                      value={follow}
                      onChange={(e) => setFollow(e.target.value)}
                      options={followLeadOptions}
                    />
                  </div>
                  <div className="mb-3 w-full">
                    <Dropdown
                      id="lead"
                      label={lead || "Lead"}
                      value={lead}
                      onChange={(e) => setLead(e.target.value)}
                      options={followLeadOptions}
                    />
                  </div>
                </div>
              </div>
              <div className="mx-auto d-flex ">
                <button
                  className="btn btn-circle"
                  style={{ border: "3px solid #480249" }}
                  onClick={addDance}
                >
                  +
                </button>
              </div>
            </div>
          </div>
          <div className=" ">
            {dances.map((dance, index) => (
              <div
                key={index}
                className="d-flex justify-content-between align-items-center "
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <p
                  className="fw-bold  "
                  style={{ fontSize: "13px", color: "#480249" }}
                >
                  {index + 1}. {dance.style}; {dance.years}; Follow -{" "}
                  {dance.follow}; Lead - {dance.lead}
                </p>
                {hoveredIndex === index && (
                  <button
                    className="btn btn-danger"
                    onClick={() => removeDance(index)}
                  >
                    <span className="fs-6">x</span>
                  </button>
                )}
              </div>
            ))}
          </div>
          <div className="d-flex justify-content-end mt-4">
            <button
              type="button"
              className="btn btn-secondary mx-2"
              onClick={() => setOpen(false)}
            >
              Cancel
            </button>

            <button
              type="submit"
              className="btn btn-primary"
              onClick={handleSubmit}
            >
              Save
            </button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default InitialSignInInfo;
