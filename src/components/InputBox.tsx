import React from "react";

interface Props {
  heading: string;
}

const InputBox = ({ heading }: Props) => {
  return (
    <div className="mb-3">
      <label htmlFor="exampleFormControlTextarea1" className="form-label">
        {heading}
      </label>
      <textarea
        className="form-control"
        id="exampleFormControlTextarea1"
        rows={3}
      ></textarea>
    </div>
  );
};

export default InputBox;
