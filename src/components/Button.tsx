import React from "react";

// add type to buttons later
interface Props {
  btnType: string;
}

const Button = () => {
  return (
    <button type="button" className="btn btn-success">
      Success
    </button>
  );
};

export default Button;
