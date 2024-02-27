// InputBox.tsx
import React from "react";

interface Props {
  heading: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void; // Define onChange prop
}

const InputBox: React.FC<Props> = ({ heading, value, onChange }) => {
  return (
    <div className="mb-3">
      <label htmlFor={heading} className="form-label">
        {heading}
      </label>
      {/* Use textarea for input */}
      <textarea
        className="form-control"
        id={heading}
        rows={3}
        value={value}
        onChange={onChange}
      ></textarea>
    </div>
  );
};

export default InputBox;
