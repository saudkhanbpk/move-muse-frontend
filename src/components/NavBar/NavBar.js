import React, { useContext, useEffect, useState, useRef } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "./NavBar.css";
import logo from "../../img/logo/Black sq.png";
import notify from '../../img/icons/bell.png';
import dancelogo from "../../img/icons/DanceLogIn.png";
import { UserContext } from "../../context/UserContext";
import NotificationService from "../NotificationService/NotificationService";
import { ImProfile } from "react-icons/im";
import { MdLogout } from "react-icons/md";

const navLinks = [
  { to: "/", text: "Home", key: "home" },
  { to: "/festivals", text: "Festivals", key: "festivals" },
  { to: "/reviews", text: "Reviews", key: "reviews" },
  { to: "/about", text: "About", key: "about" },
  { to: "/blogs", text: "Blog", key: "M&N" },
];

const NavBar = () => {
  const { user, logout, setUserLoggedIn, setProfilePicture, ProfilePicture } = useContext(UserContext);
  const navigate = useNavigate();
  const [expanded, setExpanded] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('userData'));
    console.log('User Data Retrieved from Local Storage:', userData);
    if (userData && userData.profilePicture) {
      setProfilePicture(userData.profilePicture);
    } else {
      setProfilePicture(dancelogo);
    }
  }, [user]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setProfileOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  const handleLogout = () => {
    logout();
    NotificationService.notifySuccess("User logged out.");
    setExpanded(false);
    setUserLoggedIn(false);
    setProfileOpen(!profileOpen);
    localStorage.removeItem("token");
    localStorage.removeItem("userData");
    navigate("/");
  };

  const handleNavLinkClick = () => {
    setExpanded(false);
  };

  const isLoggedIn = !!user;

  return (
    <Navbar bg="transparent" expand="lg" expanded={expanded}>
      <Container fluid>
        <Navbar.Brand href="/">
          <img src={logo} alt="Logo" className="main-logo" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setExpanded((prevExpanded) => !prevExpanded)}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto align-items-start">
            {navLinks.map(({ to, text, key }) => (
              <Nav.Link
                as={NavLink}
                to={to}
                key={key}
                className={({ isActive }) => (isActive ? "active" : "")}
                onClick={handleNavLinkClick}
              >
                {text}
              </Nav.Link>
            ))}
          </Nav>

          <div className="d-flex align-items-center gap-1">
            <div>
              <Link to="/notification">
                <img src={notify} alt="Notification" width={40} className="notification-icon" />
              </Link>
            </div>
            {isLoggedIn ? (
              <Nav>
                {/* <Nav.Link
                  as={NavLink}
                  to="/profile"
                  className={({ isActive }) => (isActive ? "active" : "")}
                  onClick={handleNavLinkClick}
                >
                  {user.fullName.split(" ")[0]}
                </Nav.Link> */}
              </Nav>
            ) : (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <img
                  onClick={() => {
                    navigate("/login");
                    setExpanded(false);
                  }}
                  src={dancelogo}
                  alt="Profile"
                  className="logo-signup img-fluid"
                  style={{
                    width: "80px",
                    position: "relative",
                    top: "20px",
                    left: "-10px",
                  }}
                />
                <Nav.Link
                  as={NavLink}
                  to="/login"
                  className={({ isActive }) => (isActive ? "active" : "")}
                  style={{
                    fontSize: "12px",
                  }}
                  onClick={handleNavLinkClick}
                >
                  Sign in
                </Nav.Link>
              </div>
            )}
            {isLoggedIn && (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                ref={dropdownRef}
              >
                <img
                  src={ProfilePicture}
                  alt="Profile"
                  referrerPolicy="no-referrer"
                  onClick={() => setProfileOpen(!profileOpen)}
                  className="logo-signup img-fluid rounded-circle"
                  title="Click to view more"
                  style={{
                    width: "50px",
                    height: "50px",
                    cursor: "pointer",
                  }}
                />
                <div
                  className={`rounded-3 dropdown ${profileOpen ? "d-flex flex-column" : ""}`}
                  style={{
                    display: `${profileOpen ? "block" : "none"}`,
                  }}
                >
                  <div className="fw-bold text-white">
                  <img
                  src={ProfilePicture}
                  alt="Profile"
                  referrerPolicy="no-referrer"
               
                  className="logo-signup img-fluid rounded-3 "
                 
                  style={{
                    width: "50px",
                    height: "50px",
                    cursor: "pointer",
                    marginRight:'10px'
                  }}
                />
                    {user.fullName.split(" ")[0].toUpperCase()}</div>
                  <Link to="/profile" onClick={() => setProfileOpen(false)} className="fw-bold p-2 mt-2 profile-btn" style={{ textDecoration: "none", color: 'white', listStyleType: 'none' }}><ImProfile/> My Profile</Link>
                  <Link
                    className=" p-2 mt-1 fw-bold  profile-btn"
                    onClick={handleLogout}
                    style={{
                      cursor: "pointer",
                      color: 'white',
                      textDecoration: "none"
                    }}
                  >
                   <MdLogout /> Logout
                  </Link>
                </div>
              </div>
            )}
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
