import React from "react";
import flag from "../../img/icons/flag.png";
import mountflag from "../../img/icons/mountflag.png";
import laptop from "../../img/icons/laptop.png";
import "./KeyProject.css";
const KeyProject = () => {
  return (
    <>
      <section style={{ overflow: "clip" }}>
        <div className="row p-4 ">
          <h2 className="mb-5" style={{ fontWeight: "bold" }}>
            Key Projects of the Year
          </h2>
          <div className="col-md-4">
            <div style={{ width: "200px", height: "130px" }}>
              <img src={laptop} alt="" className="img-fluid project_images" />
            </div>
            <h4 className="heading_flag">
              Wilderness Watchers Foundation Children’s Book Series
            </h4>
            <div style={{ width: "200px", borderTop: "2px solid gray" }}></div>
            <p className="py-4">
              You can talk about each company highlight more extensively in
              short but impactful paragraphs.
            </p>
          </div>
          <div className="col-md-4">
            <div style={{ width: "200px", height: "130px" }}>
              <img src={flag} alt="" className="img-fluid project_images" />
            </div>
            <h4 className="heading_flag">
              Women in Conservation Joint Program with Partner Organization
            </h4>
            <div style={{ width: "200px", borderTop: "2px solid gray" }}></div>

            <p className="py-4">
              This is a great way to surface salient points and accompany them
              with key visuals.
            </p>
          </div>
          <div className="col-md-4">
            <div style={{ width: "200px", height: "130px" }}>
              <img
                src={mountflag}
                alt=""
                className="img-fluid project_images"
              />
            </div>
            <h4 className="heading_flag">
              South Trove Animal Rescue and Sanctuary Project
            </h4>
            <div style={{ width: "200px", borderTop: "2px solid gray" }}></div>
            <p className="py-4">
              Some prompts that can help: What is the main achievement? What did
              it take to reach the goal?
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default KeyProject;
