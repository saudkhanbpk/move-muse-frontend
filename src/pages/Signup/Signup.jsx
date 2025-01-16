import React, { useState } from "react";
import "./Signup.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { BaseUrl } from "../../BaseUrl";
import NotificationService from "../../components/NotificationService/NotificationService";

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

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
        navigate("/login"); 
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

  return (
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
        <p>
          Already have an account? <Link to="/login" className="text-blue">Log In</Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;
