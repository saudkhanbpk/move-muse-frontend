import React, { useState } from "react";
import plusss from "../../img/icons/plusss.png";
import dropdown from "../../img/icons/dropdown.png";
import blueplus from "../../img/icons/blueplus.png";
import arrowright from "../../img/icons/arrowright.png";
import Kusos_received from "../../img/icons/Kusos_received.png";
import excellenttechinuque from "../../img/icons/excellenttechinuque.png";
import personalitypresence from "../../img/icons/personalitypresence.png";
import heleri from "../../img/icons/heleri.png";
import hands from "../../img/icons/hands.png";
import redImage from '../../img/icons/redImage.png';
import { FaHeart } from "react-icons/fa";
import userimg4 from "../../img/icons/userimg4.png";
import blog_heart_selected from "../../img/icons/blog_heart_selected.png";
import people from "../../img/icons/people.png";
import draftarrow from "../../img/icons/dropNew.webp";
import star from "../../img/icons/star.png";
import cardcircle from "../../img/icons/cardcircle.png";
import blurstar from "../../img/icons/blurstar.png";
import Kudos_given from "../../img/icons/Kudos_given.png";
import magic_stream_left from "../../img/icons/magic_stream_left.png";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Dropdown from "../Dropdown/Dropdown";
import KudosSharedCard from "./KudosSharedCard";
const ConfirmAttendance = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const data = new Date();
  const year = data.getFullYear();
  const month = String(data.getMonth() + 1).padStart(2, "0");
  const day = String(data.getDate()).padStart(2, "0");
  const fulldata = `${year}, ${month}, ${day}`;

  const [date, setDate] = useState(data); 

  const onChange = (newDate) => {
    setDate(newDate);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const [confirmAttendanceForm, setConfirmAttendanceForm] = useState({
    learningAndDevelopmentCommunity: "",
    KizInThe6: "",
  });
  const handleDropDownChange = (e) => {
    setConfirmAttendanceForm({
      ...confirmAttendanceForm,
      [e.target.name]: e.target.value,
    });
  };

  const cardsData = [
    {
      title: ["Learning & Development Community"],
      label: "learningAndDevelopmentCommunity",
      image: plusss,
      backgroundColor: "",
      options: ["I was there as ->", "I missed this event"],
    },
    {
      title: ["Kiz in the 6"],

      label: "KizInThe6",
      image: blueplus,
      backgroundColor: "bggg",
      options: [
        "I was there as ->",
        "attendee ",
        "organizer ",
        "volunteer ",
        "artist ",
        "invited guest",
      ],
    },
  ];
  const futureData = [
    {
      title: "Kiz in the 6",
      image: plusss,
      backgroundColor: "bg-primary",
      options: ["I was there as ->", "I missed this event"],
    },

    {
      title: "Learning & Development Community",
      image: blueplus,
      backgroundColor: "bg-danger",
      options: ["I was there as ->"],
    },

    {
      title: "Bachata mi gente",
      image: blueplus,
      backgroundColor: "bg-primary",
      options: ["I was there as ->"],
    },
  ];
  const events = [
    {
      title: "Love Kiz",
      image: plusss,
      backgroundColor: "bg-primary",
      options: ["I was there as ->", "I missed this event"],
    },
    {
      title: "Swing World",
      image: blueplus,
      backgroundColor: "bg-danger",
      options: ["I was there as ->"],
    },
    {
      title: "Salsamania",
      image: blueplus,
      backgroundColor: "bggg",
      options: ["I was there as ->"],
    },
  ];
  const [selectedOptions, setSelectedOptions] = useState(
    Array(cardsData.length).fill(null)
  );
  const [isDropdownOpen, setIsDropdownOpen] = useState(
    Array(cardsData.length).fill(false)
  );

  const handleImageClick = (index) => {
    setIsDropdownOpen((prevState) => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  };

  const handleOptionSelect = (option, index) => {
    setSelectedOptions((prevState) => {
      const newState = [...prevState];
      newState[index] = option;
      return newState;
    });
    setIsDropdownOpen((prevState) => {
      const newState = [...prevState];
      newState[index] = false;
      return newState;
    });
  };
  return (
    <>
      <div style={{ background: "#FFF7D8" }}>
        <div className="container pt-5">
          <div
            className="border-2 border border-black mainconform p-4 mb-2 mx-auto rounded-5 "
            style={{ height: "600px" }}
          >
            <div className="  ">
              <h2 className=" d-flex justify-content-center text-center fw-bold ">
                Confirm attendance
              </h2>
            </div>
            <div className="row mt-5 ">
              {cardsData.map((card, index) => (
                <div key={index} className="col-md-6 px-4 ">
                  <div>
                    <div
                      key={index}
                      className={`rounded-2 p-2 d-flex flex-column justify-content-between ${
                        index === 0 ? "text-white bg-color" : ""
                      }`}
                      style={{
                        height: "180px",
                        width: "60%",
                        marginLeft: "40px",
                        backgroundColor: index === 0 ? "#AA02FF" : "#E2E2E2",
                        color: index === 0 ? "white" : "black",
                      }}
                    >
                      <div className="text-end mb-3 position-relative">
                        <img
                          src={card.image}
                          alt=""
                          className="plusss"
                          onClick={() => handleImageClick(index)}
                          style={{ cursor: "pointer" }}
                        />
                        {isDropdownOpen[index] && (
                          <div
                            className="dropdown position-absolute top-100 start-5 translate-middle-y"
                            style={{ zIndex: 1000 }}
                          >
                            <ul className="list-group ">
                              {card.title.map((option, optionIndex) => (
                                <li
                                  key={optionIndex}
                                  className="list-group-item "
                                  onClick={() =>
                                    handleOptionSelect(option, index)
                                  }
                                >
                                  {option}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                      <div className="d-flex">
                        <p className="d-flex ps-3 fw-bold ">
                          {selectedOptions[index] || card.title}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="selectbox_div d-flex flex-column"
                    style={{
                      width: "max-content",
                      marginLeft: "38px",
                      marginTop: "15px",
                    }}
                  >
                    {confirmAttendanceForm.learningAndDevelopmentCommunity &&
                      index === 0 && (
                        <div className="">
                          {
                            confirmAttendanceForm.learningAndDevelopmentCommunity
                          }
                        </div>
                      )}
                    {confirmAttendanceForm.KizInThe6 && index === 1 && (
                      <div className="">
                        {" "}
                        I was there as {confirmAttendanceForm.KizInThe6}
                      </div>
                    )}
                    <Dropdown
                      className="bg-primary"
                      name={card.label}
                      options={card.options}
                      onChange={handleDropDownChange}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="row mt-5 p-3 ">
            <div className="col-lg-4 py-2">
              <div className="w-100">
                <h3 className="fw-bold">My Future Events</h3>
              </div>
            </div>
            <div className="d-flex gap-4 flex-wrap col-lg-8">
              {events.map((card, index) => (
                <div key={index} className="">
                  <div
                    style={{
                      height: index === 0 || index === 1 ? "200px" : "130px",
                      backgroundColor:
                        index === 0
                          ? "#72559F"
                          : index === 1
                          ? "#E2E2E2"
                          : "#EDE4DA",
                      color: index === 0 ? "white" : index === 1 ? "black" : "",
                    }}
                    className={`p-2 rounded-2 d-flex flex-column justify-content-between custom-card ${
                      index === 0 || index === 1 ? "small" : "large"
                    }`}
                  >
                    <div className="text-end">
                      <img src={card.image} alt="" className="plusss" />
                    </div>
                    <div  className="mt-auto pb-4">
                      <p className="fw-bold">{card.title}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-5  arrowfavouritemain arrowrightcnfrm ">
          <img src={arrowright} alt="" className="arrow-rightfavourite  " />
        </div>
        <div
          className=" comfirmpastmain row p-3 mt-5  mx-auto d-flex justify-content-center"
          style={{ width: "85%" }}
        >
          <div className="col-lg-4 py-2 ">
            <div className="d-flex  w-100">
              <h3 className="fw-bold ">My Confirmed Past Events</h3>
            </div>
          </div>
          <div className="mobilcards col-lg-8 d-flex flex-wrap gap-4 ">
            {futureData.map((card, index) => (
              <div key={index} className="">
                <div
                  style={{
                    height: index < 2 ? "200px" : "220px",
                    backgroundColor:
                      index === 0
                        ? "#E2E2E2"
                        : index === 1
                        ? "#AA02FF"
                        : "#95B1A9", // Background color based on index
                    position: "relative", // Make the position of the container relative
                  }}
                  className={`p-2 rounded-2 d-flex flex-column justify-content-between custom-card ${
                    index === 0 || index === 1 ? "small" : "large"
                  }`}
                >
                  <div
                    className={`text-${index === 0 ? "start" : "center"}`}
                    style={{
                      position: "absolute",
                      top: "10px",
                      right: "20px",
                    }}
                  >
                    {index < 2 ? (
                      <img
                        src={card.image}
                        alt=""
                        className="cardimgadd"
                        style={{ width: "20px" }}
                      />
                    ) : null}
                  </div>
                  <div className="mt-auto pb-4">
                    <p
                      className={`text-${
                        index === 0 ? "black" : "white"
                      } fw-bold border-2 cardtitle`}
                    >
                      {card.title}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="d-flex justify-content-end mt-5 arrow-righttt2mainn  ">
          <img src={arrowright} alt="" className="arrow-righttt2" />
        </div>

        {/* kusos recived section */}
        <div className=" kudosbg  p-md-5  mt-5  ">
          <div className="d-flex align-items-center gap-5 kusostext">
            <div>
              <h4 className="fw-bold ms-5">Kudos received</h4>
              <div className=" w-100 ">
                <div className="d-flex align-items-center  ">
                  <div className="design ms-5"></div>
                  <div className="border-3 border-bottom border-black w-100  "></div>
                </div>
                <div className=" text-end ms-4  ">
                  <img src={dropdown} alt="" className="arrow  blend" />
                </div>
              </div>
            </div>
            <div>
              <img src={Kusos_received} alt="" className="kusosimg mb-5 me-3" />
            </div>
          </div>
          <div className="d-md-flex  gap-5 w-100 align-items-center kusoscards ">
            <div className="parentposition">
              <div className="bg ">
                <img src={excellenttechinuque} alt="" className="imgstyle " />
                <h5 className="fw-bold text-center pt-2">
                  Excellent Technique
                </h5>
              </div>
              <div className="twodiv text-center pt-1 text-danger childposition">
                1
              </div>
            </div>
            <div className="parentposition">
              <div className="bg ">
                <img src={personalitypresence} alt="" className="imgstyle1 " />
                <h5 className="fw-bold text-center pt-2">
                  Personality & Presence
                </h5>
              </div>
              <div className="onediv text-center pt-1 text-danger childposition">
                1
              </div>
            </div>

            <div className="parentposition">
              <div className=" ">
                <img src={heleri} alt="" className="imgstyle1 " />
                <h5 className="fw-bold text-center pb-2">Other Magic </h5>
              </div>
              <div className="onediv text-center pt-1 text-danger childposition">
                1
              </div>
            </div>
            <div className="parentposition">
              <div className="mt-md-4 ">
                <img src={hands} alt="" className="imgstyle3 " />
                <h5 className="fw-bold text-center ">Safe Space & Presence</h5>
              </div>
              <div className="onediv2 text-center pt-1 text-danger childposition2">
                1
              </div>
            </div>
            <div className="parentposition mt-md-3">
              <div className="bg  ">
                <img src={personalitypresence} alt="" className="imgstyle1 " />
                <h5 className="fw-bold text-center pt-1">
                  Personality & Presence
                </h5>
              </div>
              <div className="onediv text-center pt-1 text-danger childposition">
                1
              </div>
            </div>
            <div className="mb-5 ">
              <img src={dropdown} alt="" className="arrow  blend  " />
              <h6 className="fw-bold">PKC 2023</h6>
              <div className="d-flex align-items-center">
                <p>Annoying and clumsy!</p>
                <img src={redImage} alt="" className="flage" />
              </div>
              <div className="bg-white   p-3 rounded-4">
                <p className="fw-bold">
                  When flagging content please Include a message for our admin!
                </p>
                <div className="d-flex justify-content-end">
                  <button className="btn border-1 border border-black rounded-3 ">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="kudosbg p-5">
          <div className="d-flex align-items-center gap-2">
            <h4 className="ps-4 fw-bold">Favorite Festivals</h4>
            <FaHeart className="text-danger fs-3" />
          </div>
          <div className="" style={{ maxWidth: "300px" }}>
            <div className="d-flex align-items-center  mt-1">
              <div className="design"></div>
              <div className="border-3 border-bottom border-black w-75  "></div>
            </div>
            <div className="text-end w-75 ms-4 ">
              <img src={dropdown} alt="" className="arrow blend" />
            </div>
          </div>
          <div className="mt-5 ">
            <div className="d-flex flex-wrap  ">
              {[1, 2, 2, 2, 2, 2].map((item) => {
                return (
                  <div
                    className="d-md-flex gap-4 align-items-center my-2"
                    style={{ width: "50%" }}
                  >
                    <div className="attendance1 col-2">
                      <img
                        src={userimg4}
                        alt=""
                        className=" img-fluid  "
                        style={{ mixBlendMode: "multiply" }}
                      />
                    </div>
                    <div>
                      <h4 className=" fw-bold">User Detais</h4>
                      <p>
                        Lorem ipsum dolor sit amet.Lorem ipsum dolor sit
                        amet.Lorem ipsum dolor sit amet.
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* favourite article section */}
          <div>
            <div className="d-flex  gap-2">
              <div className="d-flex justify-content-end">
                <h4 className="mb-0 d-flex align-items-end ps-5 fw-bold ">
                  Favorite Articles
                </h4>
              </div>
              <div>
                <img src={blog_heart_selected} alt="" className="heartimg" />
              </div>
            </div>
            <div className=" ">
              <div className="d-flex align-items-center  ">
                <div className="design"></div>
                <div
                  className="border-3 border-bottom border-black"
                  style={{ width: "180px" }}
                ></div>
              </div>
              <div className="text-end  ms-4 " style={{ width: "180px" }}>
                <img src={dropdown} alt="" className="arrow blend" />
              </div>
            </div>
            <div className=" row d-flex gap-5 align-items-center ">
              <div className="col-md-3 ">
                <div className="col-md-3 ">
                  <div
                    className=" d-flex justify-content-center align-items-center mt-5"
                    style={{
                      width: "190px",
                      height: "125px",
                      background: "#EECDC6",
                    }}
                  >
                    <div
                      className=" text-center p-2"
                      style={{
                        width: "150px",
                        height: "145px",
                        background: "#FFFAE7",
                      }}
                    >
                      <div
                        className=" "
                        style={{
                          fontFamily: "Caveat, cursive",
                          height: "170px",
                        }}
                      >
                        <h3 className="fs-1 fw-lighter">Topic</h3>
                        <h4 className="fs-1 fw-lighter">Author</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 ">
                <div className="col-md-3 ">
                  <div
                    className=" d-flex justify-content-center align-items-center mt-5"
                    style={{
                      width: "190px",
                      height: "125px",
                      background: "#EECDC6",
                    }}
                  >
                    <div
                      className=" text-center p-2"
                      style={{
                        width: "150px",
                        height: "145px",
                        background: "#FFFAE7",
                      }}
                    >
                      <div
                        className=" "
                        style={{
                          fontFamily: "Caveat, cursive",
                          height: "170px",
                        }}
                      >
                        <h3 className="fs-1 fw-lighter">Topic</h3>
                        <h4 className="fs-1 fw-lighter">Author</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 ">
                <div className="col-md-3 ">
                  <div
                    className=" d-flex justify-content-center align-items-center mt-5"
                    style={{
                      width: "190px",
                      height: "125px",
                      background: "#EECDC6",
                    }}
                  >
                    <div
                      className=" text-center p-2"
                      style={{
                        width: "150px",
                        height: "145px",
                        background: "#FFFAE7",
                      }}
                    >
                      <div
                        className=" "
                        style={{
                          fontFamily: "Caveat, cursive",
                          height: "170px",
                        }}
                      >
                        <h3 className="fs-1 fw-lighter">Topic</h3>
                        <h4 className="fs-1 fw-lighter">Author</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className=" row d-flex gap-5 align-items-center my-2 ">
              <div className="col-md-3 ">
                <div
                  className=" d-flex justify-content-center align-items-center mt-5"
                  style={{
                    width: "190px",
                    height: "125px",
                    background: "#EECDC6",
                  }}
                >
                  <div
                    className=" text-center p-2"
                    style={{
                      width: "150px",
                      height: "145px",
                      background: "#FFFAE7",
                    }}
                  >
                    <div
                      className=" "
                      style={{ fontFamily: "Caveat, cursive", height: "170px" }}
                    >
                      <h3 className="fs-1 fw-lighter">Topic</h3>
                      <h4 className="fs-1 fw-lighter">Author</h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 ">
                <div
                  className=" d-flex justify-content-center align-items-center mt-5"
                  style={{
                    width: "190px",
                    height: "125px",
                    background: "#EECDC6",
                  }}
                >
                  <div
                    className=" text-center p-2"
                    style={{
                      width: "150px",
                      height: "145px",
                      background: "#FFFAE7",
                    }}
                  >
                    <div
                      className=" "
                      style={{ fontFamily: "Caveat, cursive", height: "170px" }}
                    >
                      <h3 className="fs-1 fw-lighter">Topic</h3>
                      <h4 className="fs-1 fw-lighter">Author</h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 ">
                <div
                  className=" d-flex justify-content-center align-items-center mt-5"
                  style={{
                    width: "190px",
                    height: "125px",
                    background: "#EECDC6",
                  }}
                >
                  <div
                    className=" text-center p-2"
                    style={{
                      width: "150px",
                      height: "145px",
                      background: "#FFFAE7",
                    }}
                  >
                    <div
                      className=" "
                      style={{ fontFamily: "Caveat, cursive", height: "170px" }}
                    >
                      <h3 className="fs-1 fw-lighter">Topic</h3>
                      <h4 className="fs-1 fw-lighter">Author</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-end mt-3 ms-4">
            <img src={arrowright} alt="" className="arrow-right" />
          </div>
          {/* review left section */}
          <div className="mt-5 ">
            <div className="d-flex gap-md-4 ms-md-2 ">
              <div className="d-flex justify-content-md-end">
                <h4 className="mb-0 d-flex align-items-end fs-3 ps-4 fw-bold ">
                  Reviews left
                </h4>
              </div>
              <div className="ms-md-5">
                <img src={people} alt="" />
              </div>
            </div>
            <div className="ms-md-4 " style={{ width: "260px" }}>
              <div className="d-flex align-items-center  ">
                <div className="design"></div>
                <div className="border-3 border-bottom border-black w-75  "></div>
              </div>
              <div className="text-end w-75 ms-4 ">
                <img src={dropdown} alt="" className="arrow blend" />
              </div>
            </div>
            <div className="mt-5 row  ">
              <div className="col-md-6">
                <div className="d-md-flex align-items-center ">
                  <div className="d-flex align-items-center ms-4 gap-5">
                    <div>
                      <h4 className="fw-semibold pt-2 ps-2">Vancouver Kiz</h4>
                    </div>
                    <div className="">
                      <img src={draftarrow} alt="" style={{ width: "80px" }} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mt-2">
                <div className=" stars mt-2">
                  <img src={star} alt="" style={{ width: "30px" }} />
                  <img src={star} alt="" style={{ width: "30px" }} />
                  <img src={star} alt="" style={{ width: "30px" }} />
                  <img src={star} alt="" style={{ width: "30px" }} />
                  <img src={star} alt="" style={{ width: "30px" }} />
                </div>
              </div>
              <div className="col-md-8  ms-3  mt-2">
                <div
                  className="rounded-5 p-3"
                  style={{ border: "3px solid #9BB09D", background: "#F2E7CB" }}
                >
                  <div className="d-md-flex align-items-center gap-5 ps-4">
                    <p className="fw-bold ps-2">Venue 5.0</p>
                    <p className="fw-bold ps-2">Ratio 4.5</p>
                    <p className="fw-bold ps-2">Organization 5.0</p>
                    <p className="fw-bold ps-2">Artists 4.2</p>
                    <p className="fw-bold ps-2">Culture 5.0</p>
                  </div>
                  <div className="ps-4 ">
                    <h4
                      className="ps-1 fw-bold "
                      style={{ textDecoration: "underline" }}
                    >
                      Creme de la creme{" "}
                    </h4>
                  </div>
                  <div className="d-flex align-items-center ">
                    <div className="ps-4">
                      <p className="ps-1 fw-semibold">
                        Creme de la creme of African dances and 1 Gala night of
                        celebration of multiculturalism, diversity, the arts
                        including performances and fashion shows by African
                        designers.
                      </p>
                      <div className="d-flex justify-content-end gap-1  ">
                        <img
                          src={cardcircle}
                          alt=""
                          style={{ width: "10px" }}
                        />
                        <img
                          src={cardcircle}
                          alt=""
                          style={{ width: "10px" }}
                        />
                        <img
                          src={cardcircle}
                          alt=""
                          style={{ width: "10px" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-3 row  ">
              <div className="col-md-6">
                <div className="d-flex align-items-center ">
                  <div className="d-flex align-items-center ms-4 gap-5">
                    <div>
                      <h4 className="fw-semibold pt-3 ps-2">
                        Victoria International Kizomba Festival{" "}
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mt-2">
                <div className=" stars mt-2">
                  <img src={star} alt="" style={{ width: "30px" }} />
                  <img src={star} alt="" style={{ width: "30px" }} />
                  <img src={star} alt="" style={{ width: "30px" }} />
                  <img src={star} alt="" style={{ width: "30px" }} />
                  <img src={star} alt="" style={{ width: "30px" }} />
                </div>
              </div>
              <div className="col-md-8 ms-3  mt-2">
                <div
                  className="rounded-5 p-3"
                  style={{ border: "3px solid #9BB09D", background: "#F2E7CB" }}
                >
                  <div className="d-md-flex align-items-center gap-5 ps-4">
                    <p className="fw-bold ps-2">Venue 5.0</p>
                    <p className="fw-bold ps-2">Ratio 4.5</p>
                    <p className="fw-bold ps-2">Organization 5.0</p>
                    <p className="fw-bold ps-2">Artists 4.2</p>
                    <p className="fw-bold ps-2">Culture 5.0</p>
                  </div>
                  <div className="ps-4 ">
                    <h4
                      className="ps-1 fw-bold "
                      style={{ textDecoration: "underline" }}
                    >
                      Creme de la creme{" "}
                    </h4>
                  </div>
                  <div className="d-flex align-items-center ">
                    <div className="ps-4">
                      <p className="ps-1 fw-semibold">
                        Creme de la creme of African dances and 1 Gala night of
                        celebration of multiculturalism, diversity, the arts
                        including performances and fashion shows by African
                        designers.
                      </p>
                      <div className="d-flex justify-content-end gap-1 ">
                        <img
                          src={cardcircle}
                          alt=""
                          style={{ width: "10px" }}
                        />
                        <img
                          src={cardcircle}
                          alt=""
                          style={{ width: "10px" }}
                        />
                        <img
                          src={cardcircle}
                          alt=""
                          style={{ width: "10px" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-3 row  ">
              <div className="col-md-6">
                <div className="d-flex align-items-center ">
                  <div className="d-flex align-items-center ms-4 gap-5">
                    <div>
                      <h4 className="fw-semibold pt-3 ps-2">Kizolove</h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mt-2">
                <div className=" stars mt-2">
                  <img src={star} alt="" style={{ width: "30px" }} />
                  <img src={star} alt="" style={{ width: "30px" }} />
                  <img src={star} alt="" style={{ width: "30px" }} />
                  <img src={star} alt="" style={{ width: "30px" }} />
                  <img src={blurstar} alt="" style={{ width: "30px" }} />
                </div>
              </div>
              <div className="col-md-8 ms-3  mt-2">
                <div
                  className="rounded-5 p-3"
                  style={{ border: "3px solid #9BB09D", background: "#F2E7CB" }}
                >
                  <div className="d-md-flex align-items-center gap-5 ps-4">
                    <p className="fw-bold ps-2">Venue 5.0</p>
                    <p className="fw-bold ps-2">Ratio 4.5</p>
                    <p className="fw-bold ps-2">Organization 5.0</p>
                    <p className="fw-bold ps-2">Artists 4.2</p>
                    <p className="fw-bold ps-2">Culture 5.0</p>
                  </div>
                  <div className="ps-4 ">
                    <h4
                      className="ps-1 fw-bold "
                      style={{ textDecoration: "underline" }}
                    >
                      Creme de la creme{" "}
                    </h4>
                  </div>
                  <div className="ps-4">
                    <p className="ps-1 fw-semibold">
                      Creme de la creme of African dances and 1 Gala night of
                      celebration of multiculturalism, diversity, the arts
                      including performances and fashion shows by African
                      designers.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-3 row  ">
              <div className="col-md-6">
                <div className="d-flex align-items-center ">
                  <div className="d-flex align-items-center ms-4 gap-5">
                    <div>
                      <h4 className="fw-semibold pt-3 ps-2">
                        Montreal is Kizomba
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mt-2">
                <div className=" stars mt-2">
                  <img src={star} alt="" style={{ width: "30px" }} />
                  <img src={star} alt="" style={{ width: "30px" }} />
                  <img src={star} alt="" style={{ width: "30px" }} />
                  <img src={star} alt="" style={{ width: "30px" }} />
                  <img
                    className="text-white"
                    src={blurstar}
                    alt=""
                    style={{ width: "30px" }}
                  />
                </div>
              </div>
              <div className="col-md-8 ms-3  mt-2">
                <div
                  className="rounded-5 p-3"
                  style={{ border: "3px solid #9BB09D", background: "#F2E7CB" }}
                >
                  <div className="d-md-flex align-items-center gap-5 ps-4">
                    <p className="fw-bold ps-2">Venue 5.0</p>
                    <p className="fw-bold ps-2">Ratio 4.5</p>
                    <p className="fw-bold ps-2">Organization 5.0</p>
                    <p className="fw-bold ps-2">Artists 4.2</p>
                    <p className="fw-bold ps-2">Culture 5.0</p>
                  </div>
                  <div className="ps-4 ">
                    <h4
                      className="ps-1 fw-bold "
                      style={{ textDecoration: "underline" }}
                    >
                      Creme de la creme{" "}
                    </h4>
                  </div>
                  <div className="ps-4">
                    <p className="ps-1 fw-semibold">
                      Creme de la creme of African dances and 1 Gala night of
                      celebration of multiculturalism, diversity, the arts
                      including performances and fashion shows by African
                      designers.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className=" d-flex justify-content-end me-5 arrowrightmainrlft">
              <img src={arrowright} alt="" className="arrow-right " />
            </div>
            {/* kudos shared */}
            <div className="">
              <div className="d-flex  ms-md-5 me-md-0 me-5">
                <div className="d-flex justify-content-end mt-3 mt-md-0 ms-3   ">
                  <h4 className="mb-0 d-flex align-items-md-end fs-md-3 ps-2 fw-bold ">
                    Kudos shared
                  </h4>
                </div>
                <div className="">
                  <img src={Kudos_given} alt="" className="kudosimage" />
                </div>
              </div>
              <div className="ms-md-5 " style={{ width: "260px" }}>
                <div className="d-flex align-items-center  ">
                  <div className="design "></div>
                  <div className="border-3 border-bottom border-black w-md-100 w-75"></div>
                </div>
                <div className=" text-end mb-2 arrowmainn">
                  <img src={dropdown} alt="" className="arrow blend   " />
                </div>
              </div>
              {/* kudos shared card */}
              <div className="d-flex flex-wrap">
                <KudosSharedCard />
                <KudosSharedCard />
                <KudosSharedCard />
                <KudosSharedCard />
                <KudosSharedCard />
                <KudosSharedCard />
                <KudosSharedCard />
              </div>

              <div className="mt-5 row">
                <div className=" d-flex justify-content-end me-5 arrowrightmainrlft">
                  <img src={arrowright} alt="" className="arrow-right" />
                </div>
                <div className=" mt-2 ms-me-2 d-md-flex justify-content-md-start  ">
                  <div className="d-md-flex align-items-md-center">
                    <div className="mb-md-5 ">
                      <img
                        src={magic_stream_left}
                        alt=""
                        className="imghand "
                      />
                    </div>

                    <div>
                      <h4 className="fw-bold  w-md-75">
                        Thank you for being part of the Movement. And for making
                        Movement part of you.{" "}
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="" style={{ background: "#F6D46B", height: "80vh" }}>
          <div className="p-5">
            <h2 className="fw-bold">My Event Calendar</h2>
          </div>
          <div className="ps-5 ">
            <Calendar onChange={onChange} value={date} />
          </div>
        </div>

        
      </div>
    </>
  );
};

export default ConfirmAttendance;
