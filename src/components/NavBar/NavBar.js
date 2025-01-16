import React, { useContext, useEffect, useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "./NavBar.css";
import logo from "../../img/logo/Black sq.png";
import notify from '../../img/icons/bell.png';
import dancelogo from "../../img/icons/DanceLogIn.png";
import { UserContext } from "../../context/UserContext";
import NotificationService from "../NotificationService/NotificationService";

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

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('userData'));
      console.log('User Data Retrieved from Local Storage:', userData);
    if (userData && userData.profilePicture) {
      setProfilePicture(userData.profilePicture);
    }
    else {
      setProfilePicture(dancelogo);
    }
  }, [user]);

  const handleLogout = () => {
    logout();
    NotificationService.notifySuccess("User logged out.");
    setExpanded(false);
    setUserLoggedIn(false);
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

          <div className="d-flex align-items-center">
            <div>
              <Link to="/notification">
                <img src={notify} alt="Notification" width={40} className="notification-icon" />
              </Link>
            </div>
            {isLoggedIn ? (
              <Nav>
                <Nav.Link
                  as={NavLink}
                  to="/profile"
                  className={({ isActive }) => (isActive ? "active" : "")}
                  onClick={handleNavLinkClick}
                >
                  {user.fullName.split(" ")[0]}
                </Nav.Link>
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
              >
                <img
                  src={ProfilePicture}
                  alt="Profile"
                  className="logo-signup img-fluid rounded-circle"
                  style={{
                    width: "50px",
                    height: "50px",
                    position: "relative",
                    top: "15px",
                  }}
                />
                <p
                  className="logout_text"
                  onClick={handleLogout}
                  style={{
                    fontSize: "12px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    position: "relative",
                    top:'10px', 
                    cursor: "pointer",

                  }}
                >
                  Log out
                </p>
              </div>
            )}
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
