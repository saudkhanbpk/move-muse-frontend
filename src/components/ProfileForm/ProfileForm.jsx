import React, { useContext, useState } from "react";
import Dropdown from "../Dropdown/Dropdown";
import { FaPlus } from "react-icons/fa";
import CinfirmAttendance from "./CinfirmAttendance";
import CreateEvent from "./CreateEvent";
import ApiService from "../../services/ApiService";
import { UserContext } from "../../context/UserContext";

const ProfileForm = () => {
  const { profileCredentials, setProfileCredentials } = useContext(UserContext);
  const style = ["Style", "Bachata", "Kizomba", "Brazilian Zouk"];
  const since = ["Since", "5 Years", "2 Years", "3 Years"];
  const follow = ["Follow", "Advance", "Intermediate"];
  const lead = ["Lead", "Beginner", "Intermediate"];

  const [dropDownValues, setDropDownValues] = useState({
    style: "",
    since: "",
    follow: "",
    lead: "",
  });

  const [dropDownError, setDropDownError] = useState("");

  const [storedData, setStoredData] = useState([]);
  const [formValues, setFormValues] = useState({
    username: "",
    email: "",
    danceAlias: "",
    city: "",
    moveMuse: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleChangeDropdown = (e) => {
    setDropDownValues({
      ...dropDownValues,
      [e.target.name]: e.target.value,
    });
  };

  const handlePlusClick = () => {
    const { style, since, follow, lead } = dropDownValues;
    if (!(style && since && follow && lead)) {
      setDropDownError("Please select all the fields");
      return;
    }
    setStoredData((prevItems) => [...prevItems, dropDownValues]);
    setDropDownValues({
      style: "",
      since: "",
      follow: "",
      lead: "",
    });
    setDropDownError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await ApiService.post(
        "/update-profile",
        {
          ...formValues,
          dance: [...storedData],
        },
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      
      setFormValues({
        username: "",
        email: "",
        danceAlias: "",
        city: "",
        moveMuse: "",
      });

      setStoredData([]);
    } catch (error) {}
  };

  return (
    <>
      <div className="container maincform d-flex  justify-content-center">
        {/* <form
          className="form_Profile flex-fill rounded-5 p-4 "
          onSubmit={handleSubmit}
        >
          <div className="d-flex align-items-md-end flex-column flex-sm-row gap-2 mb-2 ">
            <label
              htmlFor="username"
              className="labelDatausername fw-bold text-nowrap"
            >
              Username
            </label>
            <input
              type="text"
              className="inputmbl input-like"
              name="username"
              value={formValues.username}
              onChange={handleInputChange}
              placeholder="John Doe"
            />
          </div>
          <div className="d-flex align-items-md-end flex-column flex-sm-row gap-2 mb-2">
            <label htmlFor="email" className="labelData fw-bold text-nowrap">
              Email
            </label>
            <input
              type="text"
              className="inputmbl input-like"
              name="email"
              value={formValues.email}
              onChange={handleInputChange}
              placeholder="johndoe@example.com"
            />
          </div>
          <div className="d-flex align-items-md-end flex-column flex-sm-row gap-2 mb-2">
            <label
              htmlFor="danceAlias"
              className="labelData fw-bold text-nowrap"
            >
              Dance Alias:
            </label>
            <input
              type="text"
              className="inputmbl input-like"
              name="danceAlias"
              value={formValues.danceAlias}
              onChange={handleInputChange}
              placeholder="Dance Alias"
            />
          </div>
          <div className="d-flex align-items-md-end flex-column flex-sm-row gap-2 mb-2">
            <label htmlFor="city" className="labelData fw-bold text-nowrap">
              City:
            </label>
            <input
              type="text"
              className="inputmbl input-like"
              name="city"
              value={formValues.city}
              onChange={handleInputChange}
              placeholder="New York"
            />
          </div>
          <div className="d-flex align-items-md-end flex-column flex-sm-row gap-2 mb-2">
            <label
              htmlFor="moveMuse"
              className="labelData fw-bold text-nowrap  "
            >
              I Move & Muse:
            </label>
            <input
              type="text"
              className="input-like inputmbl"
              name="moveMuse"
              value={formValues.moveMuse}
              onChange={handleInputChange}
              placeholder="move"
            />
          </div>

          <div className="dropdown-container">
            <div className="text-center pt-3" style={{ width: "50%" }}>
              <h5 className="fw-bold" style={{ color: "darkpurple" }}>
                My Dances
              </h5>
            </div>
            <div className="selectbox_div select-w">
              <Dropdown
                className="bg-primary"
                name="style"
                options={style}
                onChange={handleChangeDropdown}
                value={dropDownValues.style}
              />
              <Dropdown
                className="bg-primary"
                name="since"
                options={since}
                onChange={handleChangeDropdown}
                value={dropDownValues.since}
              />
            </div>
            <div className=" mainplusdiv d-flex justify-content-end">
              <FaPlus
                className="plus_icon p-2 fs-1 rounded"
                onClick={handlePlusClick}
              />
            </div>
            <div className="selectbox_div select-w">
              <Dropdown
                className="bg-primary"
                name="follow"
                options={follow}
                onChange={handleChangeDropdown}
                value={dropDownValues.follow}
              />
              <Dropdown
                className="bg-primary"
                name="lead"
                options={lead}
                onChange={handleChangeDropdown}
                value={dropDownValues.lead}
              />
            </div>
          </div>

          {dropDownError && (
            <div className="text-danger pt-3">{dropDownError}</div>
          )}

          <div className="fw-bold p-0 mt-5">
            {storedData.map((data, index) => (
              <p key={index}>
                {index + 1}. {data.style}; {data.since}; {data.follow};{" "}
                {data.lead}
              </p>
            ))}
          </div>
          <div className="d-md-flex justify-content-center w-md-50 submitformmain mb-5">
            <button type="submit" className="submitform fs-5 px-3 fw-bold p-2">
              Submit
            </button>
          </div>
        </form> */}
        
      </div>
      {/* <CreateEvent /> */}
      <CinfirmAttendance />
    </>
  );
};

export default ProfileForm;
