import React from "react";
import heleri from "../../img/icons/heleri.png";
export default function KudosSharedCard() {
  return (
    <>
      <div className="col-md-6">
        <div className="d-md-flex ms-4 ms-md-0 ">
          <div className=" ">
            <div
              className="d-flex justify-content-center align-items-center "
              style={{
                width: "150px",
                height: "150px",
                borderRadius: "50%",
              }}
            >
              <img
                src={heleri}
                alt=""
                style={{ width: "120px", height: "120px" }}
              />
            </div>
            <div>
              <h4 className="fw-semibold ps-md-0 ps-3 pt-2 pt-md-0 " >
                Other Magic
              </h4>
            </div>
          </div>
          <div className="mt-md-5 mt-4 ms-md-3">
            <h4 className="fw-semibold ">Heleri, PKC 2023</h4>
            <h5 className="fs-5">
              “The highest excellence of following and commitment to a shared
              journey”
            </h5>
          </div>
        </div>
      </div>
    </>
  );
}
