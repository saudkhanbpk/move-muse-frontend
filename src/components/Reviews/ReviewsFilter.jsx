import { useState } from "react";
import SearchImage from "../../img/icons/search.png";

import Dropdown from "../custom-dropdown/Dropdown";

const dropOptions = [
  "hello world! 1",
  "hello world! 2",
  "hello world! 3",
  "hello world! 4",
];

export default function ReviewsFilter() {
  const [filterCredentials, setFilterCredentials] = useState({
    style: "",
    location: "",
    months: "",
    containsText: "",
  });

  const handleChange = (e) => {
    setFilterCredentials({
      ...filterCredentials,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    alert("filter is trigger")
  };

  return (
    <form
      className="filter-container border border-1 border-white p-3 flex-wrap px-4 d-flex gap-4 rounded-5 align-items-center"
      onSubmit={submitHandler}
    >
      <div className="">
        <Dropdown
          id="style"
          label="style"
          options={dropOptions}
          onChange={handleChange}
        />
      </div>
      <div>
        <Dropdown
          id="location"
          label="location"
          options={dropOptions}
          onChange={handleChange}
        />
      </div>
      <div>
        <Dropdown
          id="months"
          label="months"
          options={dropOptions}
          onChange={handleChange}
        />
      </div>
      <div>
        <div className="form-group w-100 position-relative">
          <input
            type="text"
            name="containsText"
            className="form-control z-1 position-relative border border-1 border-black"
            placeholder="Contains Text"
          />
          <span className="border border-1 border-black bg-light rounded-3 dropdownSpan"></span>
        </div>
      </div>

      <button className="btn">
        <img src={SearchImage} width={40} alt="search" />
      </button>
    </form>
  );
}
