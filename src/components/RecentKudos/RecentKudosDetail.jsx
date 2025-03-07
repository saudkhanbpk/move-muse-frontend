import React, { useContext, useEffect, useState } from "react";
import "./RecentKudos.css";
import arrowIcon from "../../img/icons/arrow_next_prpl.png";
import RecentKudosCard from "./RecentKudosCard";
import { UserContext } from "../../context/UserContext";
import { toast } from "react-toastify";

const RecentKudosDetail = ({ users = [] }) => { 
  const { user } = useContext(UserContext);
  const [itemsToShow, setItemsToShow] = useState(5);
  const [currentStartIndex, setCurrentStartIndex] = useState(0);

  // Debugging: Log the users prop

  const handleResize = () => {
    if (window.innerWidth < 768) {
      setItemsToShow(3);
    } else if (window.innerWidth >= 768 && window.innerWidth < 992) {
      setItemsToShow(5);
    } else {
      setItemsToShow(7);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const showNextItems = () => {
    const nextStartIndex = currentStartIndex + itemsToShow;

    if (!user) {
      toast.warning("Create an Account to see more");
      return;
    }

    if (nextStartIndex < users.length) {
      setCurrentStartIndex(nextStartIndex);
    } else {
      setCurrentStartIndex(0); // Loop back to the start
    }
  };

  const visibleKudos = Array.isArray(users)
    ? users.slice(currentStartIndex, currentStartIndex + itemsToShow)
    : [];
    

  const remainingItems = users.length - (currentStartIndex + itemsToShow);
  const remainingCount = remainingItems > 0 ? remainingItems : 0;

  return (
    <section
      className="Kudos_section p-5"
      style={{ paddingLeft: "3rem", paddingRight: "3rem" }}
    >
      <h4 className="heading__color fs-2 fw-bold">Recent Kudos</h4>
      <div className="row row-cols-8 justify-content-start position-relative">
        {visibleKudos.slice(0, 8).map((user, index) => (
          <RecentKudosCard user={user} index={index} key={index} />
        ))}
        
        {remainingCount > 0 && (
          <div className="col d-flex align-items-center justify-content-center">
            <span className="count__people border border-5 border-dark">
              <p className="m-0">+{remainingCount} People</p>
            </span>
          </div>
        )}
      </div>

      <div className="text-center mt-3">
        {remainingCount > 0 && (
          <button onClick={showNextItems} className="btn btn-primary">
            See More <img src={arrowIcon} alt="Arrow" />
          </button>
        )}
      </div>
    </section>
  );
};

export default RecentKudosDetail;
