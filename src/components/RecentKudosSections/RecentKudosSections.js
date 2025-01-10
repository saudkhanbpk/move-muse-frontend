import React from "react";
import userimg1 from "../../img/icons/userimg1.png";
import userimg4 from "../../img/icons/userimg4.png";
import userimg3 from "../../img/icons/userimg3.png";
import userimg2 from "../../img/icons/userimg2.png";
import excellenttechinuque from "../../img/icons/excellenttechinuque.png";
import personalitypresence from "../../img/icons/personalitypresence.png";
import heleriCopy from "../../img/icons/heleriCopy.png";
import hands from "../../img/icons/hands.png";
import "./recentkudossection.css";
import startie from "../../img/icons/startie.png";
import heart from "../../img/icons/heart.png";
import { TfiSearch } from "react-icons/tfi";
import redImage from '../../img/icons/redImage.png';
import eliza from "../../img/icons/eliza.png";
import oneimage from "../../img/icons/oneimage.png";
import ContactUs from "../ContactUs/ContactUs";
import RecentKudos from "../RecentKudos/RecentKudos";

const FestivalData = [
  {
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    festival: "Summerfest",
    count: "7",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    festival: "Autumn Harvest",
    count: "7",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1503104834685-7205e8607eb9?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    festival: "Winter Wonderland",
    count: "7",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1516522973472-f009f23bba59?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    festival: "Spring Blossom",
    count: "7",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1586907835000-f692bbd4c9e0?q=80&w=1922&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    festival: "Harvest Moon",
    count: "7",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1627067227573-07bc616f46ee?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    festival: "Starlight Festival",
    count: "7",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1464863979621-258859e62245?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    festival: "Music Fest",
    count: "7",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    festival: "Food Festival",
    count: "7",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    festival: "Art Festival",
    count: "7",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1503104834685-7205e8607eb9?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    festival: "Film Festival",
    count: "7",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1516522973472-f009f23bba59?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    festival: "Cultural Festival",
    count: "7",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1586907835000-f692bbd4c9e0?q=80&w=1922&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    festival: "Fashion Festival",
    count: "7",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1627067227573-07bc616f46ee?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    festival: "Literary Festival",
    count: "7",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1464863979621-258859e62245?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    festival: "Tech Festival",
    count: "7",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1502626126571-8e3835b649b4?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    festival: "Science Festival",
    count: "7",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1476919257145-70d1eaaa9ea1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    festival: "Summer Solstice",
    count: "7",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1495611855912-d865d142eaba?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    festival: "Dragon Boat Festival",
    count: "7",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1560534891-8eada1fc1a11?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    festival: "Midsummer Festival",
    count: "7",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1483431732252-cb976fa9e6bd?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    festival: "Oktoberfest",
    count: "7",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1534866540820-1f3f8f14d1a9?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    festival: "Carnival",
    count: "7",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1534260681155-4d0b5b8f44b0?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    festival: "Diwali",
    count: "7",
  },
];

const RecentKudosSection = () => {
  const userstwo = [
    { id: 1, name: "Ella", img: userimg1 },
    { id: 2, name: "Loka", img: userimg4 },
    { id: 3, name: "Junior", img: userimg3 },
    { id: 4, name: "Fuego", img: userimg2 },
    { id: 5, name: "Dan", img: userimg2 },
    { id: 6, name: "Bll", img: userimg3 },
    { id: 7, name: "Rich", img: userimg1 },
    { id: 8, name: "B.B", img: userimg2 },
    { id: 4, name: "Fuego", img: userimg3 },
    { id: 7, name: "Rich", img: userimg1 },
    { id: 2, name: "Loka", img: userimg4 },
    { id: 2, name: "Loka", img: userimg4 },
    { id: 5, name: "Dan", img: userimg2 },
    { id: 3, name: "Junior", img: userimg3 },
    { id: 1, name: "Ella", img: userimg1 },
    { id: 2, name: "Loka", img: userimg4 },
    { id: 3, name: "Junior", img: userimg3 },
    { id: 4, name: "Fuego", img: userimg2 },
    { id: 5, name: "Dan", img: userimg2 },
    { id: 6, name: "Bll", img: userimg3 },
    { id: 7, name: "Rich", img: userimg1 },
    { id: 8, name: "B.B", img: userimg2 },
    { id: 4, name: "Fuego", img: userimg3 },
    { id: 7, name: "Rich", img: userimg1 },
    { id: 2, name: "Loka", img: userimg4 },
    { id: 2, name: "Loka", img: userimg4 },
    { id: 5, name: "Dan", img: userimg2 },
    { id: 3, name: "Junior", img: userimg3 },
    { id: 2, name: "Loka", img: userimg4 },
    { id: 5, name: "Dan", img: userimg2 },
  ];
  const items = [
    {
      src: excellenttechinuque,
      text: "Excellent Technique",
    },
    {
      src: personalitypresence,
      text: "Personality & Presence",
    },
    {
      src: hands,
      text: "Safe Space & Connection",
    },
    {
      src: personalitypresence,
      text: "Personality & Presence",
    },
    {
      src: personalitypresence,
      text: "Personality & Presence",
    },
  ];
  const cardData = [
    {
      imgSrc: excellenttechinuque,
      title: "Excellent Technique",
      className: "imgstyle",
      score: 1,
      scoreClass: "twodiv",
    },
    {
      imgSrc: personalitypresence,
      title: "Personality & Presence",
      className: "imgstyle1",
      score: 1,
      scoreClass: "onediv",
    },
    {
      imgSrc: hands,
      title: "Other Magic",
      className: "imgstyle1",
      score: 1,
      scoreClass: "onediv",
    },
    {
      imgSrc: excellenttechinuque,
      title: "Safe Space & Presence",
      className: "imgstyle3",
      score: 1,
      scoreClass: "onediv2",
    },
    {
      imgSrc: personalitypresence,
      title: "Personality & Presence",
      className: "imgstyle1",
      score: 1,
      scoreClass: "onediv",
    },
  ];

  return (
    <>
      <div className="recentkudossectionmain p-4 ">
        <section >
          <RecentKudos users={FestivalData} />
        </section>
        <section2>
          <div className="section_two_main d-flex justify-content-between align-items-center">
            <div className="section_two_main_two d-flex  align-items-center mt-md-4 ">
              <div className="" style={{ width: "340px" }}>
                <h3 className="ps-5 mt-md-4 fw-bold z-3">
                  Victoria International Kizomba Festival{" "}
                </h3>
              </div>
              <div className="section_two_start_image_div">
                <img
                  src={startie}
                  alt=""
                  className=" z-5 section_two_start_image"
                />
              </div>
            </div>
            <div className="">
              <img src={heart} alt="" className="section2_heart_img" />
            </div>
          </div>
        </section2>
        <section3>
          <div className="row ">
            <div className="col-md-4">
              <div className="ms-md-5 mt-md-5  ">
                <h4 className="fw-bold section3_h4">Attendees</h4>
              </div>
            </div>
          </div>
        </section3>
        <section4>
          <div className="d-flex justify-content-end section4_inputmain_div">
            <div className="d-flex position-relative justify-content-end section4_maintwo">
              <div className="input_div">
                <input
                  type="text"
                  placeholder="Enter name here"
                  className="p-3 ps-5 rounded-5 input "
                />
              </div>
              <div className="position-absolute  icon_search_div">
                <TfiSearch />
              </div>
            </div>
          </div>
          {/* <div className='main'>
                    <div className='mb-5 ' style={{ float: 'right', }} >
                        <div className="form-group  position-relative" style={{ right: 70 }} >
                            <div className='d-flex'>

                                <input
                                    type="text"
                                    className="form-control z-1 px-5 position-relative border border-1 border-black"
                                    placeholder="Enter name here"

                                    style={{ width: '300px', }} />
                                <div>
                                    <TfiSearch className='position-relative' style={{ right: '40px', top: '4px', zIndex: '30', fontSize: '30px', }} />
                                </div>
                            </div>
                            <span className="border border-1 border-black bg-light rounded-3 dropdownSpan " style={{ width: '300px', }}></span>
                        </div>
                    </div>
                    </div> */}
        </section4>
        <section5 className="section5 ">
          <div className="ms-md-5 d-flex flex-wrap mt-5 gap-5 section_five_cards_main">
            {userstwo.map((userr) => (
              <div
                key={userr.id}
                className="d-flex flex-column align-items-center"
              >
                <div>
                  <img
                    src={userr.img}
                    alt={userr.name}
                    className=""
                    style={{ mixBlendMode: "multiply", width: "120px" }}
                  />
                </div>
                <div>
                  <p className="text-center">{userr.name}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="ms-md-5 d-flex mt-5 section_five_last_card">
            <div className="d-flex flex-column align-items-center">
              <div>
                <img
                  src={userimg2}
                  alt="B.B"
                  className=""
                  style={{ mixBlendMode: "multiply", width: "120px" }}
                />
              </div>
              <div>
                <p className="">B.B</p>
              </div>
            </div>
          </div>
        </section5>
        <section6>
          <div className="" style={{ width: "96%", paddingRight: "53px" }}>
            <div className="d-md-flex gap-5 kusoscards justify-content-end section_six_cards">
              {cardData.map((card, index) => (
                <div className="parentposition" key={index}>
                  <div className="bg">
                    <img
                      src={card.imgSrc}
                      alt=""
                      className={card.className}
                      style={{ width: "120px" }}
                    />
                    <h5 className="fw-bold text-center pt-2">{card.title}</h5>
                  </div>
                  <div
                    className={`text-center pt-1 text-danger childposition ${card.scoreClass}`}
                  >
                    {card.score}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section6>
        <section7>
          <div className="mt-5 position-relative ">
            <div className="mt-5 rounded-5 p-2 section_7_main p-md-5">
              <div className="d-flex gap-5 w-100 big_card_section7">
                <div className="w-md-100 ">
                  <div className="d-flex">
                    <div>
                      <img
                        src={redImage}
                        alt=""
                        className="section_7_flage_image"
                      />
                    </div>
                    <div className=" ">
                      <img src={eliza} alt="" className="img-fluid" />
                    </div>
                  </div>
                  <div className="w-md-100 d-flex flex-column align-items-center ">
                    <div className=" col-md-4 gap-4 ms-0 ms-md-5 d-flex justify-content-between w-75   ">
                      <div className="w-50">
                        <h5 className="fw-bold ps-md-0 ps-4 ">Name:</h5>
                      </div>
                      <div className=" text-start w-50 ">
                        <h5 className="text-start">Eliza</h5>
                      </div>
                    </div>
                    <div className=" col-md-4 ms-5 mt-2 d-flex  justify-content-between w-75">
                      <div className="w-50 ">
                        <h5 className="fw-bold ">Dance alias: </h5>
                      </div>
                      <div className=" w-50  me-md-0 me-3">
                        <h5 className="">Veta</h5>
                      </div>
                    </div>
                    <div className=" col-md-4 ms-5 mt-2 d-flex justify-content-between w-75">
                      <div className="w-50 ">
                        <h5 className="fw-bold">City: </h5>
                      </div>
                      <div className=" w-50 me-md-0 me-3 ">
                        <h5 className="">MTL</h5>
                      </div>
                    </div>
                    <div className=" col-md-6 ms-5 mt-2 d-flex justify-content-between w-75">
                      <div className="w-50 ">
                        <h5 className="fw-bold">I Move & Muse:</h5>
                      </div>
                      <div className="w-50  ">
                        <h5 className="">With all my being</h5>
                      </div>
                    </div>
                    <div className=" col-md-4 ms-5 mt-2 d-flex justify-content-between w-75">
                      <div className="w-50 ">
                        <h5 className="fw-bold">Festivals attended: </h5>
                      </div>
                      <div className=" w-50 text-center ">
                        <h5 className="">3</h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="">
                  <div className="d-flex flex-column align-items-center mt-4 justify-content-center   ">
                    {items.map((item, index) => (
                      <div key={index}>
                        <div className="d-flex position-relative ">
                          <div className="d-flex align-items-center flex-column">
                            <img
                              src={item.src}
                              alt=""
                              style={{
                                background: "#96D0DD",
                                borderRadius: "50%",
                              }}
                            />
                            <p className="fw-bold mt-2 w-75 text-center">
                              {item.text}
                            </p>
                          </div>
                          <div
                            className="position-absolute"
                            style={{ left: "80px" }}
                          >
                            <img
                              src={oneimage}
                              alt=""
                              style={{ width: "30px" }}
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-5  position-absolute submit-card">
              <div className="bg-white  p-2">
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
        </section7>
      </div>
      <ContactUs />
    </>
  );
};

export default RecentKudosSection;
