import React, { useState } from "react";
import circleimg from "../../img/icons/upload1.png";
import Dropdown from "../../components/custom-dropdown/Dropdown";

const InitialSignInInfo = () => {
  const [dances, setDances] = useState([
    {
      style: "Bachata",
      years: "5 years",
      follow: "advanced",
      lead: "beginner",
    },
    {
      style: "Kizomba",
      years: "2 years",
      follow: "intermediate",
      lead: "intermediate",
    },
  ]);

  const addDance = () => {
    const newDance = {
      style: "New Style",
      years: "0 years",
      follow: "beginner",
      lead: "beginner",
    };
    setDances([...dances, newDance]);
  };
  const handleStyle = (e) => {};
  const styleOptions = ["Male", "Female", "Others"];
  return (
    <div
      className="d-flex flex-column align-items-center justify-content-center p-5"
      style={{ backgroundColor: "#fff7d8" }}
    >
      <div className="d-flex gap-5">
        {/* <div>
          <img src={circleimg} alt="img" className="w-32 md:w-40  border border-2 border-danger" />
        </div> */}
        <div>
          <img
            src={circleimg}
            alt="img"
            class="img-fluid w-md-75 w-sm-30 w-md-40 "
          />
        </div>
      </div>
      <div className="my-5 max-w-screen-sm w-full">
        <div className="card bg-transparent shadow p-5 rounded-4 border-3 border-black">
          <div className="container mt-5">
            <div className="card shadow border-0">
              <div className="card-body p-4">
                <form>
                <div className="row mb-3">
                    <label
                      for="name"
                      className="col-md-4 col-form-label fw-bold"
                    >
                      Name:
                    </label>
                    <div className="col-md-8">
                      <input
                        type="text"
                        id="name"
                        className="form-control"
                        placeholder="Enter your name"
                      />
                    </div>
                  </div>

                  <div className="row mb-3">
                    <label
                      for="username"
                      className="col-md-4 col-form-label fw-bold"
                    >
                      Username:
                    </label>
                    <div className="col-md-8">
                      <input
                        type="text"
                        id="username"
                        className="form-control"
                        placeholder="Enter your username"
                      />
                    </div>
                  </div>
                  <div className="row mb-3">
                    <label
                      for="city"
                      className="col-md-4 col-form-label fw-bold"
                    >
                      City:
                    </label>
                    <div className="col-md-8">
                      <input
                        type="text"
                        id="city"
                        className="form-control"
                        placeholder="Enter your city"
                      />
                    </div>
                  </div>

                 
                  <div className="row mb-3">
                    <label
                      for="danceAlias"
                      className="col-md-4 col-form-label fw-bold"
                    >
                      Dance Alias:
                    </label>
                    <div className="col-md-8">
                      <input
                        type="text"
                        id="danceAlias"
                        className="form-control"
                        placeholder="Enter your dance alias"
                      />
                    </div>
                  </div>

                 

                  <div className="row mb-3">
                    <label
                      for="moveMuse"
                      className="col-md-4 col-form-label fw-bold"
                    >
                      I Move & Muse:
                    </label>
                    <div className="col-md-8">
                      <input
                        type="text"
                        id="moveMuse"
                        className="form-control"
                        placeholder="Enter your movement inspiration"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <h5 className="text-center my-4 fw-bold" style={{ color: "#480249" }}>
            A little about me
          </h5>
          <div className="row text-center mb-4">
            <div className="col-md-4 sm:col-md-4">
              <Dropdown
                id="style"
                label="Gender"
                onChange={handleStyle}
                options={styleOptions}
              />
            </div>
            <div className="col-md-4 sm:col-md-4 mt-3 mt-md-0">
              <Dropdown
                id="style"
                label="Ethnicity"
                onChange={handleStyle}
                options={styleOptions}
              />
            </div>
            <div className="col-md-4 sm:col-md-4 mt-3 mt-md-0">
              <Dropdown
                id="style"
                label="Birthday"
                onChange={handleStyle}
                options={styleOptions}
              />
            </div>
          </div>

          <div className="my-4">
            <div className="text-center">
              <h5 className="fw-bold text-center" style={{ color: "#480249" }}>
                My Dances
              </h5>
            </div>
            <div className="d-flex flex-wrap gap-5 justify-center ms-md-5 ms-0">
              <div className="w-full md:w-1/2 text-center">
                <div className="d-flex gap-3 w-full">
                  <div className="mb-3 w-full">
                    <Dropdown
                      id="style"
                      label="Style"
                      onChange={handleStyle}
                      options={styleOptions}
                    />
                  </div>
                  <div className="mb-3 w-full">
                    <Dropdown
                      id="style"
                      label="Since"
                      onChange={handleStyle}
                      options={styleOptions}
                    />
                  </div>
                </div>
                <div className="d-flex gap-3">
                  <div className="mb-3 w-full">
                    <Dropdown
                      id="style"
                      label="Follow"
                      onChange={handleStyle}
                      options={styleOptions}
                    />
                  </div>
                  <div className="mb-3 w-full">
                    <Dropdown
                      id="style"
                      label="Lead"
                      onChange={handleStyle}
                      options={styleOptions}
                    />
                  </div>
                </div>
              </div>
              <div className="text-center mb-3 d-flex justify-content-center align-items-center">
                <button
                  className="btn btn-circle"
                  style={{ border: "3px solid #480249" }}
                  onClick={addDance}
                >
                  +
                </button>
              </div>
            </div>
          </div>
          <div className="mt-3">
            {dances.map((dance, index) => (
              <p key={index} className="fw-bold" style={{ color: "#480249" }}>
                {index + 1}. {dance.style}; {dance.years}; Follow -{" "}
                {dance.follow}; Lead - {dance.lead}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InitialSignInInfo;
