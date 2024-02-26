import React from "react";

// this component will be used later for choosing the name or taging them
const TagNames = () => {
  let names = ["@Name1", "@Name1", "@Name1", "@Name1"];
  return (
    <div className="input-group mb-3">
      <span className="input-group-text">@</span>
      <div className="form-floating">
        <input
          type="text"
          className="form-control"
          id="floatingInputGroup1"
          placeholder="Username"
        ></input>
        <label>Username</label>
      </div>
    </div>
  );
};

export default TagNames;
