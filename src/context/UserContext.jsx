import React, { createContext, useCallback, useEffect, useRef, useState } from "react";
import ApiService from "../services/ApiService";
import { useNavigate } from "react-router-dom";
import NotificationService from "../components/NotificationService/NotificationService";
import { BaseUrl } from "../BaseUrl";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [profileCredentials, setProfileCredentials] = useState({});
  const [showAdditionalSignInInfo, setShowAdditionalSignInInfo] = useState(false);
  const [ProfilePicture, setProfilePicture] = useState('');
  const [open, setOpen] = useState(false);
  const [token, setToken] = useState(null);
  const fetchUser = useRef(() => {});
  const navigate = useNavigate();

  fetchUser.current = async () => {
    try {
      const response = await ApiService.get("auth/login/success", {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      });
      const json = response.data;
      setUser(json);
    } catch (error) {
      setUser(null);
    }
  };

  useEffect(() => {
    fetchUser.current();
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
    }
  }, [userLoggedIn]);

  const fetchUserData = useCallback(async () => {
    try {
      const response = await fetch(`${BaseUrl}/api/v1/auth/get-profile`, {
        method: "GET",
        headers: {
          "Authorization": `Bearer ${token}`,
        },
      });
      const data = await response.json();
      if (response.ok) {
        setProfileCredentials(data.user);
      } else {
        NotificationService.notifyError("Failed to fetch user data");
      }
    } catch (error) {
      NotificationService.notifyError("Failed to fetch user data");
    }
  }, [token]);

  useEffect(() => {
    if (token) {
      fetchUserData();
    }
  }, [token, fetchUserData]);


  const logout = async () => {
    try {
      await ApiService.post(
        "auth/logout",
        {},
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      navigate('/');
    } catch (error) {
      setUser(null);
    }

    setUser(null);
    localStorage.removeItem("userData");
    localStorage.removeItem("token");
  };

  const profileRef = useRef(() => {});
  profileRef.current = async () => {
    try {
      if (user) {
        const res = await ApiService.get("profile", {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        });

        setProfileCredentials(res.data.profile);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    profileRef.current();
  }, [user]);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        token,
        logout,
        profileCredentials,
        setProfileCredentials,
        setUserLoggedIn,
        showAdditionalSignInInfo,
        setShowAdditionalSignInInfo,
        ProfilePicture,
        setProfilePicture,
        fetchUserData ,
        open,
        setOpen

      }}
    >
      {children}
    </UserContext.Provider>
  );
};
