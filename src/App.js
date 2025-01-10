import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";

import React from "react";
import NavBar from "./components/NavBar/NavBar";
import Router from "./Router";
import { ToastContainer } from "react-toastify";
import { useLocation } from "react-router-dom";
import { EventProvider } from "./EventContext";

function App() {
  const location = useLocation();
  const isAdminRout = location.pathname.startsWith("/admin");
  return (
    <>
     <EventProvider>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className="App">
        {!isAdminRout && <NavBar />}
        <Router />
      </div>
      </EventProvider>
    </>
  );
}

export default App;
