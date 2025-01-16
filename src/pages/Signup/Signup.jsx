import React, { useState, useContext } from "react";
import "./Signup.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { BaseUrl } from "../../BaseUrl";
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { UserContext } from '../../context/UserContext';
import NotificationService from "../../components/NotificationService/NotificationService";

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const { setUserLoggedIn, setUser, setProfilePicture } = useContext(UserContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${BaseUrl}/api/v1/auth/signup`, formData);
      console.log("API Response:", response);
      if (response.data && response.data.success) {
        NotificationService.notifySuccess("User registered successfully!");
        navigate("/login"); // Redirect to login page after successful signup
      } else {
        setError(response.data.message || "Registration failed");
      }
    } catch (error) {
      console.error("Error during signup:", error);
      if (error.response) {
        // Server responded with a status other than 2xx
        setError(error.response.data.message || "Internal server error");
      } else if (error.request) {
        // No response was received
        setError("No response from server");
      } else {
        // Something else happened
        setError("Internal server error");
      }
    }
  };

  const handleGoogleLogin = (response) => {
    console.log('Google Login Response:', response);
    const { credential } = response;
    axios.post(`${BaseUrl}/api/v1/auth/google`, { idToken: credential })
      .then(res => {
        console.log('Token Exchange Response:', res);
        localStorage.setItem('token', res.data.token); // Save JWT token
        setUserLoggedIn(true);
        setUser(res.data.user); // Assuming the response includes user info
        setProfilePicture(res.data.user.pic); // Set profile picture URL
        navigate('/');
      })
      .catch(error => {
        console.error('Error logging in with Google', error);
        if (error.response) {
          // Server responded with a status other than 2xx
          setError(error.response.data.message || "Google login failed. Please try again.");
        } else if (error.request) {
          // No response was received
          setError("No response from server. Please try again.");
        } else {
          // Something else happened
          setError("Google login failed. Please try again.");
        }
      });
  };

  return (
    <GoogleOAuthProvider clientId="920147853019-3uem2mtgfhomf6fulvnivd314q8fav01.apps.googleusercontent.com">
      <div className="Login_backgorund">
        <form onSubmit={handleSubmit} className="login-form">
          {error && <div className="error-message">{error}</div>}
          <input
            id="fullName"
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            id="password"
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <button type="submit">Sign Up</button>
          <button>
            <GoogleLogin
              onSuccess={handleGoogleLogin}
              onError={() => {
                console.log('Login Failed');
                setError("Google login failed. Please try again.");
              }}
              useOneTap
            />
          </button>
          <p>
            Already have an account? <Link to="/login" className="text-blue">Log In</Link>
          </p>
        </form>
      </div>
    </GoogleOAuthProvider>
  );
};

export default Signup;
