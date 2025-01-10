// import React, { useContext, useEffect, useState } from "react";
// import "./RecentKudos.css";
// import arrowIcon from "../../img/icons/arrow_next_prpl.png";
// import RecentKudosCard from "./RecentKudosCard";
// import { UserContext } from "../../context/UserContext";
// import { toast } from "react-toastify";
// import EventDetails from "../ProfileForm/EventDetails";
// import CreateEvent from "../ProfileForm/CreateEvent";
// // import ReviewsSection from "../Reviews/ReviewsSection";

// const RecentKudos = ({ users }) => {
//   const { user } = useContext(UserContext);
//   const [itemsToShow, setItemsToShow] = useState(5);
//   const [currentStartIndex, setCurrentStartIndex] = useState(0);
//   const [showForm, setShowForm] = useState(false);
//   const handleResize = () => {
//     if (window.innerWidth < 768) {
//       setItemsToShow(3);
//     } else if (window.innerWidth >= 768 && window.innerWidth < 992) {
//       setItemsToShow(5);
//     } else {
//       setItemsToShow(7);
//     }
//   };

//   useEffect(() => {
//     handleResize();
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const showNextItems = () => {
//     const nextStartIndex = currentStartIndex + itemsToShow;
//     if (!user) {
//       toast.warning("Create an Account to see more")
//       return
//     }
//     if (nextStartIndex < users.length) {
//       setCurrentStartIndex(nextStartIndex);
//     } else {
//       setCurrentStartIndex(0);
//     }
//   };

//   const visibleKudos = users.slice(
//     currentStartIndex,
//     currentStartIndex + itemsToShow
//   );

//   const remainingItems = users.length - (currentStartIndex + itemsToShow);
//   const remainingCount = remainingItems > 0 ? remainingItems : 0;

//   return (
//     <section className="Kudos_section p-5" style={{ paddingLeft: '3rem', paddingRight: '3rem' }}>
//     <h4 className="heading__color fs-2 fw-bold">Recent Kudos</h4>
//     <div className="row row-cols-8 justify-content-start position-relative">
//       {visibleKudos.slice(0, 8).map((user, index) => (
//         <RecentKudosCard user={user} index={index} key={index} />
//       ))}
//       {remainingCount > 0 && (
//         <div className="col d-flex align-items-center justify-content-center">
//           <span className="count__people border border-5 border-dark">
//             <p className="m-0">+{remainingCount} People</p>
//           </span>
//         </div>
//       )}
//     </div>

//     {/* Right-aligned Import Event button */}
//     <div className="d-flex justify-content-end mb-4 mt-5">
//       <button
//         onClick={() => setShowForm(!showForm)}
//         className="btn text-white btn-primary rounded-pill"
//         style={{
//           backgroundColor: "#703768",
//           border: "2px solid #703768",
//           color: "#703768",
//           fontWeight: "bold",
//           width: "200px",
//           height: "60px"
//         }}
//       >
//         Import an Event
//       </button>
//       <div>
//       </div>
//     </div>
//         <CreateEvent/>

//     <div>
//       {/* <EventDetails /> */}
//       {/* <ReviewsSection /> */}
//     </div>
//   </section>

//   );
// };

// export default RecentKudos;
import React, { useContext, useEffect, useState } from "react";
import "./RecentKudos.css";
import arrowIcon from "../../img/icons/arrow_next_prpl.png";
import RecentKudosCard from "./RecentKudosCard";
import { UserContext } from "../../context/UserContext";
import { toast } from "react-toastify";
// import EventDetails from "../ProfileForm/EventDetails";
import CreateEvent from "../ProfileForm/CreateEvent";
import MagicCircle from "../../img/icons/magic_circle.png";
// import ReviewsSection from "../Reviews/ReviewsSection";

const RecentKudos = ({ users }) => {
  const { user } = useContext(UserContext);
  const [itemsToShow, setItemsToShow] = useState(5);
  const [currentStartIndex, setCurrentStartIndex] = useState(0);
  const [showForm, setShowForm] = useState(false);

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
      setCurrentStartIndex(0);
    }
  };

  const visibleKudos = users.slice(
    currentStartIndex,
    currentStartIndex + itemsToShow
  );

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

      {/* Right-aligned Import Event button */}
      <div className="d-flex justify-content-end mb-4 mt-5" style={{}}>
        <div
          style={{
            backgroundImage: `url(${MagicCircle})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            height: "200px",
            position: "relative",
            zIndex: 0,
          }}
        >
          <button
            onClick={() => setShowForm(!showForm)}
            className="btn text-white btn-primary "
            style={{
              backgroundColor: "#703768", // fallback color
              // backgroundImage: `url(${MagicCircle})`, // Set the background image
              // Ensure the image covers the button
              backgroundPosition: "center", // Center the image
              border: "2px solid #703768",
              color: "#703768",
              fontWeight: "bold",
              width: "300px",
              height: "70px",
              borderRadius: "20px",
              position: "relative",
              zIndex: 1, // Ensure the form is on top of the button
              top: "80px",
            }}
          >
            Import an EVENT
          </button>
        </div>
      </div>

      {/* Conditionally render CreateEvent form */}
      {showForm && <CreateEvent />}

      <div>
        {/* <EventDetails /> */}
        {/* <ReviewsSection /> */}
      </div>
    </section>
  );
};

export default RecentKudos;
