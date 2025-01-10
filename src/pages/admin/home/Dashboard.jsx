import React from "react";
import "./dashboard.css";
import signal from "../../../img/icons/signal.png";
import circledashboard from "../../../img/icons/circledashboard.png";
import colorecircle from "../../../img/icons/colorecircle.png";
import timer from "../../../img/icons/timer.png";
import magic_stream_upwards from "../../../img/icons/magic_stream_upwards.png";
const Dashboard = () => {
  return (
    <>
      <div className="dashboardmain p-5">
        <div className="h2andborder  " style={{width: '200px',}} >
          <h2 className="fw-semibold text-center ps-5" > Dashboard</h2>
          <div className="borderbottom  " style={{ borderBottom: "2px solid black" , width: '250px',}}></div>
        </div>
        <div className=" d-md-flex gap-5 justify-content-between textand4images">
          <div className="  ">
            <div className="">
              <div className="mt-4 ">
                <h4 className="fw-bold">Key Growth Indicators:</h4>
              </div>
              <div className="mt-4">
                <h4 className="fw-bold">Users</h4>
              </div>
              <div>
                <ul className="fw-bold fs-5">
                  <li>Number of Users/ New Users Trend from Month to Month </li>
                  <li>
                    Number of Cities/ Countries (Users) Distribution by Gender
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <div className="mt-4 ">
                <h4 className="fw-bold ">Festivals</h4>
              </div>
              <div>
                <ul className="fw-bold fs-5">
                  <li>Number of Festivals/ New Festivals added every month </li>
                  <li>Confirmed attendance % vs FB Attendees number</li>
                  <li>Number of Cities/ Countries (Festivals)</li>
                  <li>Distribution by Dance Type</li>
                </ul>
              </div>
            </div>
            <div>
              <div className="mt-4 ">
                <h4 className="fw-bold ">Kudos</h4>
              </div>
              <div>
                <ul className="fw-bold fs-5">
                  <li>Number of Kudos/ New Kudos added every Month</li>
                </ul>
              </div>
            </div>

            <div>
              <div className="mt-4 ">
                <h4 className="fw-bold ">Blog</h4>
              </div>
              <div>
                <ul className="fw-bold fs-5">
                  <li>Number of Articles added every month</li>
                </ul>
              </div>
            </div>
          
          </div>
          <div className="d-md-flex flex-column pt-5 d-flex gap-5 firsttowimage">
            <div className="d-flex gap-5 pt-5 ">
              <div className="">
                <img src={signal} alt="" />
              </div>
              <div>
                <img src={circledashboard} alt="" />
              </div>
            </div>
            <div className="d-flex gap-5">
              <div>
                <img src={colorecircle} alt="" />
              </div>
              <div>
                <img src={timer} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="">
              
              <div>
                <div className="d-md-flex justify-content-between useragrementsection">
                <div className="">
                <div className=" mt-5">
                <div>
                  <h2 className="fw-bold text-center">User Management </h2>
                </div>
                <div style={{ borderBottom: "2px solid black" }}></div>
              </div>
                <ul className="mt-5">
                  <li className="fw-bold">
                    Tools to create, edit, delete user accounts.
                  </li>
                  <li className="mt-3 fw-bold">
                    Tools to search for users, view user profiles, create other
                    admins
                  </li>
                </ul>
              </div>
              <div className=" mainimgmagic d-flex justify-content-center">
                <img src={magic_stream_upwards} alt="" className='imgmagic' />
              </div>
                </div>
              </div>
             
            </div>
      </div>
    </>
  );
};

export default Dashboard;
