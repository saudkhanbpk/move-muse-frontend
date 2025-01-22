import React, { useContext, useEffect, useRef, useState } from "react";
import Dropdown from "../../components/custom-dropdown/Dropdown";
import { IoMdCamera } from "react-icons/io";
import magic_circle from "../../img/icons/magic_circle.png";
import NotificationService from "../../components/NotificationService/NotificationService";
import { UserContext } from "../../context/UserContext";
import { BaseUrl } from "../../BaseUrl";

const InitialSignInInfo = () => {
  const { profileCredentials, setProfileCredentials, token, fetchUserData } = useContext(UserContext);
  const [userImage, setUserImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [dances, setDances] = useState([
    {
      style: "Bachata",
      years: "5 years",
      follow: "advanced",
      lead: "beginner",
    },
    {
      style: "Kizomba",
      years: "2 years",
      follow: "intermediate",
      lead: "intermediate",
    },
  ]);

  const [gender, setGender] = useState("");
  const [ethnicity, setEthnicity] = useState("");
  const [birthday, setBirthday] = useState("");
  const [style, setStyle] = useState("");
  const [since, setSince] = useState("");
  const [follow, setFollow] = useState("");
  const [lead, setLead] = useState("");

  const genderOptions = ["Male", "Female", "Others"];
  const ethnicityOptions = ["African", "Asian", "Caucasian", "Hispanic", "Other"];
  const birthdayOptions = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const styleOptions = ["Bachata", "Kizomba", "Salsa", "Tango", "Other"];
  const sinceOptions = ["1 year", "2 years", "3 years", "4 years", "5+ years"];
  const followLeadOptions = ["Beginner", "Intermediate", "Advanced"];

  const addDance = () => {
    const newDance = {
      style: style || "New Style",
      years: since || "0 years",
      follow: follow || "beginner",
      lead: lead || "beginner",
    };
    setDances([...dances, newDance]);
    setStyle("");
    setSince("");
    setFollow("");
    setLead("");
  };

  const handleImageChange = (e) => {
    setUserImage(e.target.files[0]);
    setPreviewImage(URL.createObjectURL(e.target.files[0]));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {
      fullName: formData.get("name"),
      username: formData.get("username"),
      city: formData.get("city"),
      danceAlias: formData.get("danceAlias"),
      moveMuse: formData.get("moveMuse"),
      dances: dances,
      gender,
      ethnicity,
      birthday,
    };

    // Upload image if available
    if (userImage) {
      const imageFormData = new FormData();
      imageFormData.append("image", userImage);
      try {
        const imageRes = await fetch(`${BaseUrl}/api/v1/upload-image/upload`, {
          method: "POST",
          body: imageFormData,
          headers: {
            "Authorization": `Bearer ${token}`,
          },
        });
        const imageData = await imageRes.json();
        if (imageRes.ok) {
          data.profilePicture = imageData.url;
        } else {
          NotificationService.notifyError("Image can't be uploaded. Try again later.");
          return;
        }
      } catch (error) {
        NotificationService.notifyError("Image can't be uploaded. Try again later.");
        return;
      }
    }

    // Update user information
    try {
      const res = await fetch(`${BaseUrl}/api/v1/auth/update-profile`, {
        method: "PUT", // or "PATCH" depending on your API
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
      });
      const resData = await res.json();
      if (res.ok) {
        NotificationService.notifySuccess("Profile updated successfully");
        setProfileCredentials({
          ...profileCredentials,
          ...data,
          profilePicture: data.profilePicture,
        });
        // Fetch the updated profile data
        fetchUserData();
      } else {
        NotificationService.notifyError("Profile update failed");
      }
    } catch (error) {
      NotificationService.notifyError("Profile update failed");
    }
  };

  return (
    <div
      className="d-flex flex-column align-items-center justify-content-center p-5 "
      style={{ backgroundColor: "#fff7d8" }}
    >
      <div className="d-flex gap-5">
        {/* <div>
          <img src={circleimg} alt="img" className="w-32 md:w-40  border border-2 border-danger" />
        </div> */}
        {/* <div>
          <img
            src={circleimg}
            alt="img"
            class="img-fluid w-md-75 w-sm-30 w-md-40 "
          />
        </div> */}
      </div>
      <div className="my-5 max-w-screen-sm w-full">
        <div className="d-flex flex-wrap align-items-center justify-content-center py-5 w-md-100">
          <div
            className="flex-grow-1 position-relative uploadmaindiv"
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
                  <span className="small fs-6 p-2">
                    Upload your photo so others can recognize you and
                    share some kudo love!
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
        </div>
        <div className="card bg-transparent shadow p-5 rounded-4 border-3 border-black">
          <div className="container mt-5">
            <div className="card shadow border-0">
              <div className="card-body p-4">
                <form onSubmit={handleSubmit}>
                  <div className="row mb-3">
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
                        name="name"
                        className="form-control"
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
                        placeholder="Enter your movement inspiration"
                      />
                    </div>
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>

          <h5 className="text-center my-4 fw-bold" style={{ color: "#480249" }}>
            A little about me
          </h5>
          <div className="row text-center mb-4">
            <div className="col-md-4 sm:col-md-4">
              <Dropdown
                id="gender"
                label="Gender"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                options={genderOptions}
              />
            </div>
            <div className="col-md-4 sm:col-md-4 mt-3 mt-md-0">
              <Dropdown
                id="ethnicity"
                label="Ethnicity"
                value={ethnicity}
                onChange={(e) => setEthnicity(e.target.value)}
                options={ethnicityOptions}
              />
            </div>
            <div className="col-md-4 sm:col-md-4 mt-3 mt-md-0">
              <Dropdown
                id="birthday"
                label="Birthday"
                value={birthday}
                onChange={(e) => setBirthday(e.target.value)}
                options={birthdayOptions}
              />
            </div>
          </div>

          <div className="my-4">
            <div className="text-center">
              <h5 className="fw-bold text-center" style={{ color: "#480249" }}>
                My Dances
              </h5>
            </div>
            <div className="d-flex flex-wrap gap-5 justify-center ms-md-5 ms-0">
              <div className="w-full md:w-1/2 text-center">
                <div className="d-flex gap-3 w-full">
                  <div className="mb-3 w-full">
                    <Dropdown
                      id="style"
                      label="Style"
                      value={style}
                      onChange={(e) => setStyle(e.target.value)}
                      options={styleOptions}
                    />
                  </div>
                  <div className="mb-3 w-full">
                    <Dropdown
                      id="since"
                      label="Since"
                      value={since}
                      onChange={(e) => setSince(e.target.value)}
                      options={sinceOptions}
                    />
                  </div>
                </div>
                <div className="d-flex gap-3">
                  <div className="mb-3 w-full">
                    <Dropdown
                      id="follow"
                      label="Follow"
                      value={follow}
                      onChange={(e) => setFollow(e.target.value)}
                      options={followLeadOptions}
                    />
                  </div>
                  <div className="mb-3 w-full">
                    <Dropdown
                      id="lead"
                      label="Lead"
                      value={lead}
                      onChange={(e) => setLead(e.target.value)}
                      options={followLeadOptions}
                    />
                  </div>
                </div>
              </div>
              <div className="text-center mb-3 d-flex justify-content-center align-items-center">
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
          <div className="mt-3">
            {dances.map((dance, index) => (
              <p key={index} className="fw-bold" style={{ color: "#480249" }}>
                {index + 1}. {dance.style}; {dance.years}; Follow -{" "}
                {dance.follow}; Lead - {dance.lead}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InitialSignInInfo;
