import React from "react";

const SmallCards = ({imageArray}) => {
 
  return (
    <>
      <div className="row my-2">
        <div className="container my-5">
          <div className="row">
            {imageArray.map((value, index) => (
              <div
                style={{ width: "220px" }}
                className="mx-auto mb-4 d-flex justify-content-center"
                key={index}
              >
                <img
                  src={value}
                  alt=""
                  className="img-fluid "
                  style={{ mixBlendMode: "multiply" }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SmallCards;
