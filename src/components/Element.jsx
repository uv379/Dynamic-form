import React from "react";
import Input from "./elements/Input";
import Select from "./elements/Select";

const Element = ({ field: { type, label, key, unit, items } }) => {
  switch (type) {
    case "date":
      return <Input type={type} label={label} keys={key} />;
    case "number":
      return <Input type={type} label={label} keys={key} unit={unit} />;
    case "dropdown":
      return <Select type={type} label={label} keys={key} items={items} />;

    default:
      return null;
  }
};

export default Element;
