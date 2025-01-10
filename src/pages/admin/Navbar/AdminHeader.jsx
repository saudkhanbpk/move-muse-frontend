import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import logo from "../../../img/logo/Black sq.png";
import danceImg from "../../../img/icons/DanceLogIn.png";

const navLinks = [
 {
  to:"/admin/dashboard"
  ,label:"dashboard"
 },
  {
    to: "/admin/festivals",
    label: "Festivals",
  },
  
  {
    to: "/admin/reviews",
    label: "Reviews",
  },
  {
    to: "/admin/kudos",
    label: "Kudos",
  },
  {
    to: "/admin/users",
    label: "Users",
  },
  {
    to: "/admin/blog",
    label: "Blog",
  },
];

export default function AdminHeader() {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-light bg-light"
        style={{ backgroundColor: "#FFF7D8" }}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/admin">
            <img src={logo} width={150} />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mb-2 mb-lg-0 align-items-xl-center">
              {navLinks.map((link) => (
                <li className="nav-item text-capitalize" key={link.to}>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "nav-link active" : "nav-link"
                    }
                    to={link.to}
                    aria-current="page"
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
              <span
                className="position-relative d-block"
                style={{ paddingRight: 75, width: "165px" }}
              >
                <li className="nav-item nav-link">SignOut</li>
                <img
                  src={danceImg}
                  width={100}
                  className="position-absolute end-0"
                  style={{}}
                />
              </span>
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
}
