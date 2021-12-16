import React, { useContext } from "react";
import FromControl from "../../formControl";

const Input = ({ type, label, keys, unit, value }) => {
  const { handleChange } = useContext(FromControl);
  return (
    <div className="mb-3">
      <label htmlFor="exampleInputEmail1" className="form-label">
        {label}
      </label>
      <input
        type={type}
        unit={unit}
        className="form-control"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
        value={value}
        key={keys}
        onChange={(event) => handleChange(keys, event)}
      />
    </div>
  );
};

export default Input;
