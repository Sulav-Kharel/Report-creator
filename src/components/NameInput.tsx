import React, { useState, useEffect } from "react";

interface Props {
  names: string[];
  onNameSelect: (name: string) => void;
}

const NameInput: React.FC<Props> = ({ names, onNameSelect }) => {
  const [inputValue, setInputValue] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value);
    setShowSuggestions(value.startsWith("@"));
    setHighlightedIndex(-1);
  };

  const handleNameSelect = (name: string) => {
    setInputValue("");
    setShowSuggestions(false);
    onNameSelect(name);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (showSuggestions) {
      if (event.key === "ArrowDown") {
        event.preventDefault();
        setHighlightedIndex((prevIndex) =>
          Math.min(prevIndex + 1, filteredNames.length - 1)
        );
      } else if (event.key === "ArrowUp") {
        event.preventDefault();
        setHighlightedIndex((prevIndex) => Math.max(prevIndex - 1, -1));
      } else if (event.key === "Enter" && highlightedIndex !== -1) {
        event.preventDefault();
        handleNameSelect(filteredNames[highlightedIndex]);
      }
    }
  };

  const filteredNames = names.filter((name) =>
    name.toLowerCase().includes(inputValue.toLowerCase().slice(1))
  );

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (!event.target) return;
      const target = event.target as HTMLElement;
      if (!target.closest(".name-input")) {
        setShowSuggestions(false);
        setHighlightedIndex(-1);
      }
    };

    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <div className="name-input">
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        placeholder="Type '@' to see suggestions..."
      />
      {showSuggestions && (
        <ul className="suggestions">
          {filteredNames.map((name, index) => (
            <li
              key={index}
              onClick={() => handleNameSelect(name)}
              className={highlightedIndex === index ? "highlighted" : ""}
            >
              {"@" + name.slice(1)}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NameInput;
