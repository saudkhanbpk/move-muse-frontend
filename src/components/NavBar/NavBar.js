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
  const [profileOpen, setProfileOpen] = useState(false);

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
    
    <Navbar bg="transparent" zIndex={2} expand="lg" expanded={expanded}>
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
                  className="rounded-4 dropdown"
                  style={{
                  display: `${profileOpen ? "block" : "none"}`,
                    
                  }}>
                  <p className="fw-bold text-white">{user.fullName.split(" ")[0]}</p>
                  <p className="py-1 profile-btn"
                  onClick={() => setProfileOpen(!profileOpen)}><Link to="/mydances" className="fw-bold" style={{ textDecoration: "none", color: 'white', listStyleType: 'none' }}>My Dances</Link></p>
                  <p
                    className="profile-btn"
                    onClick={handleLogout}
                    style={{
                      fontWeight: "bold",
                      cursor: "pointer",
                      color: 'white'


                    }}
                  >
                    Log out
                  </p>
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
