import React, { useContext, useEffect, useState } from "react";
import "./LoginForm.css";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import NotificationService from "../../components/NotificationService/NotificationService";
import AdditionalSignInInfo from "../../components/AdditionalSignInInfo/AdditionalSignInInfo";
import { BaseUrl } from "../../BaseUrl";
import axios from "axios";

const LoginForm = () => {
  const {
    setUserLoggedIn,
    setShowAdditionalSignInInfo,
    showAdditionalSignInInfo,
  } = useContext(UserContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [searchParams, _setSearchParams] = useSearchParams();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${BaseUrl}/api/v1/auth/login`, formData);
      if (response.data && response.data.success) {
        localStorage.setItem("token", response.data.token);
        NotificationService.notifySuccess("Login successful!");
        setUserLoggedIn(true);
        navigate("/");
      } else {
        setError(response.data.message || "Login failed");
      }
    } catch (error) {
      if (error.response) {
      
        setError(error.response.data.message || "Internal server error");
      } else if (error.request) {
      
        setError("No response from server");
      } else {
       
        setError("Internal server error");
      }
    }
  };

  const token = searchParams.get("token");
  const isAdditionalInfoRequired = JSON.parse(searchParams.get("isAdditionalInfoRequired"));

  useEffect(() => {
    if (token) {
      localStorage.setItem("token", token);
      setUserLoggedIn(true);
    }
    if (isAdditionalInfoRequired) {
      setShowAdditionalSignInInfo(true);
    }
  }, [token, isAdditionalInfoRequired]);

  return (
    <>
      {showAdditionalSignInInfo && <AdditionalSignInInfo />}
      <div className="Login_backgorund">
        <form onSubmit={handleSubmit} className="login-form">
        {error && <div className="error-message">{error}</div>}
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
       
          <button type="submit">Log In</button>
          <Link to="/signup" >
          <button type="button">I am New</button> </Link>
          <p>
          
            
          </p>
        </form>
      </div>
    </>
  );
};

export default LoginForm;
