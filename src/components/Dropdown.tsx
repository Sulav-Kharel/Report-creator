import React from "react";

interface Props {
  options: string[];
  heading: string;
  onSelect?: (selected: string[]) => void; // Make onSelect optional and accept an array of strings
}

const Dropdown = ({ options, heading, onSelect }: Props) => {
  const handleOptionSelection = (selected: string) => {
    if (onSelect) {
      onSelect([selected]); // Wrap the selected option in an array
    }
  };

  return (
    <div className="dropdown">
      <button
        className="btn btn-secondary dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {heading}
      </button>
      <ul className="dropdown-menu">
        {options.map((option, index) => (
          <li key={index}>
            <span
              className="dropdown-item"
              onClick={() => handleOptionSelection(option)}
            >
              {option}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;
