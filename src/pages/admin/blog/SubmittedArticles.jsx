import React from "react";
import "./submittedarticles.css";
import handwriteing from "../../../img/icons/handwriteing.png";
import reject from "../../../img/icons/reject.png";
import approve from "../../../img/icons/approve.png";
import email from "../../../img/icons/email.png";
import cardcircle from "../../../img/icons/cardcircle.png";
import adminDrop from "../../../img/icons/admin-drop.png";
const SubmittedArticles = () => {
  return (
    <>
    
      <div className="submitmnmmain" >
        <div className=" pt-4  ps-4">
          <div className="d-flex gap-md-5 align-items-center px-md-4">
            <span className="d-flex align-items-md-center gap-2">
              <h4 className="fw-semibold ">Submitted MnM articles</h4>
              <h2 className="  fw-bold">20</h2>
            </span>
            <img
              src={handwriteing}
              alt="user"
              width={80}
              className=""
            />
          </div>
          <img
            src={adminDrop}
            className="align-self-center arrowline"
            width={320}
            alt="img"
            style={{ marginLeft: 20 }}
          />
        </div>

        <div className="card m-5 d-flex rounded-4">
          <div className="d-md-flex align-items-center justify-content-between">
            <div className="p-3">
              <h2 className="fw-bold">11. Beginners path</h2>
            </div>
            <div>
              <h5 className="fw-bold">Author Name, date</h5>
              <h6 className="fw-bold text-center">
                (always the oldest one on the top)
              </h6>
            </div>
          </div>
          <div className="p-2 px-4">
            <p>
              Creme de la creme of African dances and 1 Gala night of
              celebration of multiculturalism, diversity, the arts including
              performances and fashion shows by African designers. More of
              celebration of multiculturalism, diversity, the arts including
              performances and fashion shows by African designers.
              <br />
              Your experiences are the threads that strengthen our dance
              community. Share your story, show love, and weave a richer
              tapestry for dancers worldwide.Your experiences are the threads
              that strengthen our dance community. Share your story, show love,
              and weave a richer tapestry for dancers worldwide.Your experiences
              are the threads that strengthen our dance community. Share your
              story, show love, and weave a richer tapestry for dancers
              worldwide. Your experiences are the threads that strengthen our
              dance community. Share your story, show love, and weave a richer
              tapestry for dancers worldwide.Your experiences are the threads
              that strengthen our dance community. Share your story, show love,
              and weave a richer tapestry for dancers worldwide.
              <br />
              <p className="mt-2">
                Your experiences are the threads that strengthen our dance
                community. Share your story, show love, and weave a richer
                tapestry for dancers worldwide.Your experiences are the threads
                that strengthen our dance community. Share your story, show
                love, and weave a richer tapestry for dancers worldwide.Your
                experiences are the threads that strengthen our dance community.
                Share your story, show love, and weave a richer tapestry for
                dancers worldwide.Your experiences are the threads that
                strengthen our dance community. Share your story, show love, and
                weave a richer tapestry for dancers worldwide.
              </p>
            </p>
          </div>
          <div>
            <div className="d-md-flex  p-4 btns ">
              <button className="btn">
                <img src={reject} width={90} height={40} alt="img" />
              </button>
              <button className="btn">
                <img src={approve} width={90} height={40} alt="img" />
              </button>
              <button className="btn">
                <img src={email} width={90} height={40} alt="img" />
              </button>
            </div>
          </div>
          <div className="cardunderbtns p-3 ms-4 me-4 mb-4  px-3 ">
            <div>
              <p>
                Unfortunately this article doesn’t develop the topic enough to
                qualify for a blog post. Please take your time to dive deeper
                and we will be happy to review your future musings!
              </p>
              <p>
                Note that this submission will be sent to you by email and
                deleted from the website afterwards.
              </p>
              <p>You can always find it in your mailbox!</p>
              <p>Move & Muse Team</p>
            </div>
          </div>
        </div>

        <div className="m-5  p-3 minicard rounded-5">
          <div>
            <h3>22. Importance of basics </h3>
          </div>
          <div>
            <p>
              Creme de la creme of African dances and 1 Gala night of
              celebration of multiculturalism, diversity, the arts including
              performances and fashion shows by African designers. More of
              celebration of multiculturalism, diversity, the arts including
              performances and fashion shows by African designers.
            </p>
            <div className="d-flex justify-content-end gap-1">
              <img src={cardcircle} alt="" style={{ width: "10px" }} />
              <img src={cardcircle} alt="" style={{ width: "10px" }} />
              <img src={cardcircle} alt="" style={{ width: "10px" }} />
            </div>
          </div>
        </div>
        <div className="m-5  p-3 minicard rounded-5">
          <div>
            <h3>43. Ethics in a close dance </h3>
          </div>
          <div>
            <p>
              Creme de la creme of African dances and 1 Gala night of
              celebration of multiculturalism, diversity, the arts including
              performances and fashion shows by African designers. More of
              celebration of multiculturalism, diversity, the arts including
              performances and fashion shows by African designers.
            </p>
            <div className="d-flex justify-content-end gap-1">
              <img src={cardcircle} alt="" style={{ width: "10px" }} />
              <img src={cardcircle} alt="" style={{ width: "10px" }} />
              <img src={cardcircle} alt="" style={{ width: "10px" }} />
            </div>
          </div>
        </div>
        <div className="m-5  p-3 minicard rounded-5">
          <div>
            <h3>22. Importance of basics </h3>
          </div>
          <div>
            <p>
              Creme de la creme of African dances and 1 Gala night of
              celebration of multiculturalism, diversity, the arts including
              performances and fashion shows by African designers. More of
              celebration of multiculturalism, diversity, the arts including
              performances and fashion shows by African designers.
            </p>
            <div className="d-flex justify-content-end gap-1">
              <img src={cardcircle} alt="" style={{ width: "10px" }} />
              <img src={cardcircle} alt="" style={{ width: "10px" }} />
              <img src={cardcircle} alt="" style={{ width: "10px" }} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SubmittedArticles;
