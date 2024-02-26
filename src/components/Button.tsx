import React from "react";

// add type to buttons later
interface Props {
  btnType: string;
  heading: string;
}

const Button = ({ btnType, heading }: Props) => {
  return (
    <button type="button" className={"btn btn-" + btnType.toLowerCase()}>
      {heading}
    </button>
  );
};

export default Button;
