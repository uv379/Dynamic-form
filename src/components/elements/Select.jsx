import React, { useContext } from "react";
import FromControl from "../../formControl";
const Select = ({ type, label, keys, value, items }) => {
  const { handleChange } = useContext(FromControl);
  return (
    <div className="mb-3">
      <label className="form-label">{label}</label>
      <select
        className="form-select"
        aria-label="Default select example"
        type={type}
        onChange={(event) => handleChange(keys, event)}
      >
        {items.length > 0 &&
          items.map((option, i) => (
            <option value={option.value} key={i}>
              {option.value}
            </option>
          ))}
      </select>
    </div>
  );
};

export default Select;
