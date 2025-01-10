import React from "react";
import Dropdown from "../Dropdown/Dropdown";
import { CiSearch } from "react-icons/ci";

const SearchFields = ({
  styles,
  selectedStyle,
  handleStyleChange,
  topics,
  selectedTopic,
  handleTopicChange,
  Popular,
  selectedPopular,
  handlePopularChange,
  dates,
  selectedDates,
  handleDatesChange,
  searchTerm,
  setSearchTerm,
}) => {
  return (
    <>
      <div className="search_section">
        <div className="selectbox_div">
          <Dropdown
            name="styles"
            options={styles}
            value={selectedStyle}
            onChange={handleStyleChange}
          />
          <Dropdown
            name="topics"
            options={topics}
            value={selectedTopic}
            onChange={handleTopicChange}
          />
          <Dropdown
            name="Popular"
            options={Popular}
            value={selectedPopular}
            onChange={handlePopularChange}
          />
          <Dropdown
            name="dates"
            options={dates}
            value={selectedDates}
            onChange={handleDatesChange}
          />
        </div>

        <div className="search_divInput">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Contain text"
            className="searchfield"
          />
          <CiSearch className="Icon" />
        </div>
      </div>
    </>
  );
};

export default SearchFields;
