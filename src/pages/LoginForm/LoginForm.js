import React, { useContext, useEffect, useState } from "react";
import "./LoginForm.css";
import { json, useNavigate, useSearchParams } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import NotificationService from "../../components/NotificationService/NotificationService";
import AdditionalSignInInfo from "../../components/AdditionalSignInInfo/AdditionalSignInInfo";
import { BaseUrl } from "../../BaseUrl";

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

  const [searchParams, _setSearchParams] = useSearchParams();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Your login logic here
  };

  const handleLoginWithFacebook = () => {
    const fbLoginUrl = `${BaseUrl}/api/v1/auth/facebook`;
    // const fbLoginWindow = window.open(
    //   fbLoginUrl,
    //   "fbLoginWindow",
    //   "width=600,height=700"
    // );
    const fbLoginWindow = window.open(
      fbLoginUrl, "_self"
    );

    // const interval = setInterval(() => {
    //   if (fbLoginWindow.closed) {
    //     clearInterval(interval);
    //   }
    // }, 1000);

  };
  const token = searchParams.get("token")
  const isAdditionalInfoRequired = JSON.parse(searchParams.get("isAdditionalInfoRequired"));

  useEffect(() => {
    if (token) {
      localStorage.setItem("token", token);
      setUserLoggedIn(true);
    }
    if (isAdditionalInfoRequired) {
      setShowAdditionalSignInInfo(true);
    }
  }, [isAdditionalInfoRequired, isAdditionalInfoRequired]);

  return (
    <>
      {showAdditionalSignInInfo && <AdditionalSignInInfo />}
      <div className="Login_backgorund">
        <form onSubmit={handleSubmit} className="login-form">
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
          <button type="button" onClick={handleLoginWithFacebook}>
            Log In with Facebook
          </button>
        </form>
      </div>
    </>
  );
};

export default LoginForm;

