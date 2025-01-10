import { useState, useEffect, useRef } from "react";

import DropIcon from "../../img/icons/drop-icon.svg";
import DropLineIcon from "../../img/icons/drop-line-icon.svg";

export default function Dropdown({ label, options, onChange, id, icon }) {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef(null);
  const dropMainRef = useRef(null);

  const handleItemClick = (value) => {
    if (selectRef.current) {
      selectRef.current.value = value;
      const event = new Event("change", { bubbles: true });
      selectRef.current.dispatchEvent(event);
    }
    setIsOpen(false);
  };

  const handleOutsideClick = (event) => {
    if (dropMainRef.current && !dropMainRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <div className="position-relative drop-down" ref={dropMainRef}>
      <button
        className="btn drop-btn w-100 d-flex flex-column align-items-center justify-content-between rounded-3 position-relative z-1"
        type="button"
        aria-expanded={isOpen}
        aria-controls={id}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="fw-bold text-capitalize fs-4">{label}</span>
        <img src={DropLineIcon} alt="drop-line" />
        <span className="d-flex w-100 justify-content-end">
          <img src={DropIcon} alt="Drop-icon" />
        </span>
      </button>
      <span className="rounded-3 dropdownSpan"></span>
      <div
        className={`z-2 position-absolute drop-down-option-container bg-light w-100 rounded-bottom-2 border border-1 border-black ${
          isOpen ? "collapse show" : "collapse"
        }`}
        id={id}
      >
        <ul className="list-unstyled d-flex align-items-center  flex-column">
          {options.map((item, index) => (
            <li
              key={index}
              className="p-1 cursor-pointer dropHover w-100 text-center"
              onClick={() => handleItemClick(item)}
            >
              {item}
            </li>
          ))}
        </ul>

        <select
          name={label}
          id={id}
          onChange={onChange}
          ref={selectRef}
          style={{ display: "none" }}
        >
          <option value="">{label}</option>
          {options.map((item, index) => (
            <option value={item} key={index}>
              {item}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
