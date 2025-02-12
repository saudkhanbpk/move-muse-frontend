import React, { useState, useContext } from "react";
import "./Signup.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { BaseUrl } from "../../BaseUrl";
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { UserContext } from '../../context/UserContext';
import NotificationService from "../../components/NotificationService/NotificationService";
import { toast } from "react-toastify";
import { Spinner } from "react-bootstrap"; 

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { setUserLoggedIn, setUser, setProfilePicture } = useContext(UserContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); 
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
        setError(error.response.data.message || "Internal server error");
      } else if (error.request) {
        setError("No response from server");
      } else {
        setError("Internal server error");
      }
    } finally {
      setLoading(false); 
    }
  };

  const handleGoogleLogin = (response) => {
    const { credential } = response;
    setLoading(true); 
    axios.post(`${BaseUrl}/api/v1/auth/google`, { idToken: credential })
      .then(res => {
        console.log('Token Exchange Response:', res);
        localStorage.setItem('token', res.data.token); 
        localStorage.setItem('userData', JSON.stringify(res.data.user)); 
        setUserLoggedIn(true);
        setUser(res.data.user); 
        setProfilePicture(res.data.user.profilePicture); 
        toast.success('Login successful!');
        navigate('/');
      })
      .catch(error => {
        console.error('Error logging in with Google', error);
        if (error.response) {
      
          setError(error.response.data.message || "Google login failed. Please try again.");
        } else if (error.request) {
         
          setError("No response from server. Please try again.");
        } else {
         
          setError("Google login failed. Please try again.");
        }
      })
      .finally(() => {
        setLoading(false); 
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

          <button  type="submit" disabled={loading}>
            {loading ? <Spinner animation="border" size="sm" /> : "Sign Up"}
          </button>
          
            <GoogleLogin 
              onSuccess={handleGoogleLogin}
              onError={() => {
                console.log('Login Failed');
                setError("Google login failed. Please try again.");
              }}
            />
        
          <p>
            Already have an account? <Link to="/login" className="text-blue mt-2">Log In</Link>
          </p>
        </form>
      </div>
    </GoogleOAuthProvider>
  );
};

export default Signup;
