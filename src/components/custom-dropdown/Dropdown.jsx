import { useState, useEffect, useRef } from "react";
import DropdownIcon from "../../img/icons/dropdown-icon.svg";

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
    <div className="position-relative w-100 drop-main" ref={dropMainRef}>
      <button
        className="btn btn-light border border-1 border-black w-100 d-flex align-items-center justify-content-between rounded-3 position-relative z-1"
        type="button"
        aria-expanded={isOpen}
        aria-controls={id}
        onClick={() => setIsOpen(!isOpen)}
      >
        {label}
        <img
          src={icon || DropdownIcon}
          width={25}
          height={15}
          className="border-l"
          alt="drop"
        />
      </button>
      <span
        className="border border-1 border-black rounded-3 dropdownSpan"
        style={{ backgroundColor: "#FFF7D8" }}
      ></span>
      <div
        className={`z-2 position-absolute bg-light w-100 rounded-bottom-2 border border-1 border-black ${
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
