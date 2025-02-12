import React, { useEffect } from "react";
import "./HP_MoveMuse.css";
import magicright from "../../../../img/icons/magic_stream_right.png";
import mouseimg from "../../../../img/icons/movemouseimg.png";
import feedbackCloud from "../../../../img/icons/cloud_prpl.png";
import { useNavigate } from "react-router-dom";
const HP_MoveMuse = () => {
  useEffect(()=>{
    window.scroll(0, 0)
  },[])
  const navigate = useNavigate();
  return (
    <>
      <section className="move_muse_section">
        <div className="row">
          <div className="col-md-6  " style={{ textAlign: "justify" }}>
            <div className="d-flex align-items-center ">
              <h2 className="header_move">
                Move & Muse
                <img
                  src={magicright}
                  alt=""
                  className="img-fluid "
                  style={{
                    position: "absolute",
                    top: "-100%",
                    right: "0",
                    width: "280px",
                  }}
                />
              </h2>
            </div>
            <p style={{ fontWeight: "bold", marginTop: "40px" }}>
              muse /ˈmjuːz/ verb
            </p>
            <p style={{ fontWeight: "bold", marginTop: "40px" }}>
              to think about something carefully or thoroughly.
            </p>
            <p style={{ fontWeight: "bold", marginTop: "40px" }}>
              We at Move & Muse believe that Movement is only one side of the
              coin. There is a whole myriad of mental pleasures, challenges, and
              lessons that make social dancing our second home.
            </p>
            <p style={{ fontWeight: "bold", marginTop: "40px" }}>
              Dance is a very special space, where we engage with others the way
              we rarely do in other parts of our lives, and yet, it has the
              power to affect any other aspect like relationships, self esteem,
              life goals, performance, community, personality, and so much more.
            </p>
            <p style={{ fontWeight: "bold", marginTop: "40px" }}>
              While during dance classes you will rarely hear instructors diving
              into those topics (for time restraints or else), they remain a big
              part of our lives. To shed light on those mysteries that are often
              discussed between dance friends, Move and Muse Blog was created.
              It is the space for anyone to share their knowledge for ethical,
              spiritual, moral growth or your simple amusement.
            </p>
          </div>
          <div className="col-md-6 ">
            <div  className="signup_btn  w-25 d-block ms-auto">
              <span onClick={()=> navigate('/signup')}
                style={{ position: "absolute", top: "10px", right: "20px" }}
              >
                {" "}
                Sign In
              </span>
              <img src={feedbackCloud} alt="" className="cloudimage" />
            </div>
            <img
              src={mouseimg}
              className="img-fluid"
              style={{
                mixBlendMode: "multiply",
                position: "relative",
                top: "20px",
              }}
              alt=""
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default HP_MoveMuse;
