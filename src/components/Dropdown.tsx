import React from "react";

interface Props {
  greetings: string[];
  heading: string;
}

const Dropdown = ({ greetings, heading }: Props) => {
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
        {greetings.map((greeting, index) => (
          <li key={index}>
            <span className="dropdown-item">{greeting}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;
