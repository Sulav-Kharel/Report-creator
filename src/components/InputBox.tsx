import React from "react";

interface Props {
  heading: string;
}

const InputBox = ({ heading }: Props) => {
  return (
    <div className="mb-3">
      <label htmlFor={heading} className="form-label">
        {heading}
      </label>
      <textarea className="form-control" id={heading} rows={3}></textarea>
    </div>
  );
};

export default InputBox;
