import React, { createContext, useEffect, useRef, useState } from "react";
import ApiService from "../services/ApiService";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [profileCredentials, setProfileCredentials] = useState(null);
  const [showAdditionalSignInInfo, setShowAdditionalSignInInfo] =
    useState(false);

  const fetchUser = useRef(() => {});

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
  }, [userLoggedIn]);

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
    } catch (error) {
      setUser(null)
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
        logout,
        profileCredentials,
        setProfileCredentials,
        setUserLoggedIn,
        showAdditionalSignInInfo,
        setShowAdditionalSignInInfo,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
