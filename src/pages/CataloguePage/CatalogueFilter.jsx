import Dropdown from "../../components/custom-dropdown/Dropdown";
import SearchIconTwo from "../../img/icons/search-icon-two.svg";
import ArrowIcon from "../../img/icons/arrow.svg";
import SearchIconOne from "../../img/icons/search-icon.svg";

const styleOptions = ["Ballet", "Hip Hop", "Jazz", "Contemporary"];
const topicsOptions = ["topic-1", "topic-2", "top-3", "topic-4"];
const popularOptions = ["popular-1", "popular-2", "popular-3", "popular-4"];
const dateOptions = ["date-1", "date-2", "date-3", "date-4"];
const chooseCategory = ["Style-1", "Style-2", "Style-3", "Style-4"];

export default function CatalogueFilter({
  handleStyle,
  handleTopics,
  handleRegularInput,
  handleChooseCategory,
}) {
  return (
    <div className="d-flex flex-column mt-5 px-5 gap-5">
      <div className="d-flex gap-1 align-content-center mb-5">
        <img src={ArrowIcon} alt="arrow" className="mb-2" />
        <p className="mb-0">Regular Search</p>
      </div>
      <div className="d-flex gap-2 align-items-center justify-content-between regular-search-container flex-wrap rounded-5 p-3">
        <div style={{ maxWidth: 500 }} className="flex-grow-1 d-flex gap-3 align-content-center">
          <div className="flex-grow-1">
            <Dropdown
              id="style"
              label="Style"
              onChange={handleStyle}
              options={styleOptions}
            />
          </div>
          <div className="flex-grow-1">
            <Dropdown
              id="topics"
              label="Topics"
              onChange={handleTopics}
              options={topicsOptions}
            />
          </div>
        </div>

        <div className="flex-grow-1 d-flex align-items-center" style={{ maxWidth: 500 }}>
          <div className="flex-grow-1">
            <div className="form-group w-100 position-relative">
              <input
                type="text"
                name="containsText"
                className="form-control z-1 position-relative border border-1 border-black"
                placeholder="Contains Text"
                onChange={handleRegularInput}
              />
              <span className="border border-1 border-black bg-light rounded-3 dropdownSpan"></span>
            </div>
          </div>
          <button className="btn" >
            <img src={SearchIconTwo} width={40} alt="search" />
          </button>
        </div>
      </div>
      <div className="d-flex flex-column gap-2 choose-category-container">
        <div>
          <Dropdown
            icon={SearchIconOne}
            options={chooseCategory}
            id="chooseCategory"
            label="Choose Category"
            onChange={handleChooseCategory}
          />
        </div>
        <div className="d-flex justify-content-end">
          <img src={ArrowIcon} alt="arrow-icon" />
          <p className="mb-0">Advance</p>
        </div>
      </div>
    </div>
  );
}
