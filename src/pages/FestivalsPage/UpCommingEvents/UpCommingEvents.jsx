import React, { useEffect, useState } from "react";
import Dropdown from "../../../components/Dropdown/Dropdown";
import { CiSearch } from "react-icons/ci";
import "./UpCommingEvents.css";
import CardsForFutureEvents from "../../../components/CardsForEvents/CardsForFutureEvents";

// import CreateEvent from "../../../components/ProfileForm/CreateEvent";
// import CardsForPastEvents from "../../../components/CardsForEvents/CardsForPastEvents";
import CardsForPastsEvents from "../../../components/CardsForEvents/CardsForPastsEvents";

const UpCommingEvents = () => {
  const [searchTermUpcoming, setSearchTermUpcoming] = useState("");
  const [searchTermPast, setSearchTermPast] = useState("");
  
  const styles = ["styles", "Ballet", "Hip Hop", "Contemporary", "Jazz"];
  const location = ["location", "Ballet", "Hip Hop", "Contemporary", "Jazz"];
  const dates = ["dates", "Ballet", "Hip Hop", "Contemporary", "Jazz"];
  const ratings = ["Rating", "Ballet", "Hip Hop", "Contemporary", "Jazz"];
  
  const handleStyles = () => {};
  const handleLocation = () => {};
  const handleDates = () => {};
  const handleRates = () => {};
useEffect(()=>{
window.scroll(0, 0)
},[])
  return (
    <>
      <section className="p-4 col-md-11 mx-auto">
        <h2 className="" style={{ fontWeight: "bold" , }}>
          Coming Up Events
        </h2>
        <div className="maindiv_comingEvent" style={{ borderRadius: "20px" }}>
          <div className="selectbox_div">
            <Dropdown name="styles" options={styles} onChange={handleStyles} />
            <Dropdown
              name="Location"
              options={location}
              onChange={handleLocation}
            />
            <Dropdown name="Dates" options={dates} onChange={handleDates} />
          </div>

          <div className="search_divInput">
            <input
              type="text"
              value={searchTermUpcoming}
              onChange={(e) => setSearchTermUpcoming(e.target.value)}
              placeholder="Contain text"
              className="searchfield inputsearch"
            />
            <CiSearch className="Icon" />
          </div>
        </div>
        <p className="my-2 fs-5 fw-bold ms-4">
          We found Following Coming Up Events For You
        </p>
        <div>
          <CardsForFutureEvents searchTerm={searchTermUpcoming} />
        </div>
        
      </section>

      <section className="p-4 col-md-11 mx-auto">
        <h2 className="" style={{ fontWeight: "bold" }}>
          Past Events
        </h2>
        <div className="maindiv_comingEvent" style={{ borderRadius: "20px" }}>
          <div className="selectbox_div">
            <Dropdown name="styles" options={styles} onChange={handleStyles} />
            <Dropdown
              name="Location"
              options={location}
              onChange={handleLocation}
            />
            <Dropdown name="Rating" options={ratings} onChange={handleRates} />
            <Dropdown name="Dates" options={dates} onChange={handleDates} />
          </div>

          <div className="search_divInput">
            <input
              type="text"
              value={searchTermPast}
              onChange={(e) => setSearchTermPast(e.target.value)}
              placeholder="Contain text"
              className="searchfield inputsearch"
            />
            <CiSearch className="Icon" />
          </div>
        </div>
        <p className="my-2 fs-5 fw-bold ms-4">
          We found Following Past Events For You
        </p>
        <div>
          {/* <CardsForPastEvents searchTerm={searchTermPast} /> */}
          <CardsForPastsEvents />
        </div>


        <p className="text-center fw-bold fs-2 mt-4">Join the Movement</p>
      </section>
      <section>
        {/* <CreateEvent/> */}
      </section>
    </>
  );
};

export default UpCommingEvents;
