import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import React from "react";
import NavBar from "./components/NavBar/NavBar";
import Router from "./Router";
import { ToastContainer } from "react-toastify";
import { EventProvider } from "./EventContext";

function App() {
  return (
    <>
     <EventProvider>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className="App">
         <NavBar />
        <Router />
      </div>
      </EventProvider>
    </>
  );
}

export default App;
