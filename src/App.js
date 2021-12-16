import Element from "./components/Element";
import { useState, useEffect } from "react";
import formJSON from "./drag.json";
import FormControl from "./formControl";
console.log(formJSON);

function App() {
  const [elements, setElements] = useState(null);
  const [ele, setEles] = useState([]);
  useEffect(() => {
    setElements(formJSON[0]);
  }, []);
  const { fields } = elements ?? {};

  const handleSubmit = () => {
    console.log(elements);
  };

  const handleChange = (keys, event) => {
    const newElements = { ...ele };

    // If We set the value inside the elements

    // const newElements = { ...elements };
    // newElements.fields.forEach((field) => {
    //   const { type, key } = field;
    //   if (keys === key) {
    //     field["value"] = event.target.value;
    //   }
    //   setElements(newElements);
    // });

    newElements[keys] = event.target.value;
    setEles(newElements);
    console.log(keys, event.target.value);
  };
  console.log(ele);
  return (
    <FormControl.Provider value={{ handleChange }}>
      <div className="App container">
        <h2> patient History Form</h2>
        <form>
          {fields
            ? fields.map((field, i) => <Element key={i} field={field} />)
            : null}
          <button
            type="submit"
            className="btn btn-primary"
            onClick={(e) => handleSubmit(e)}
          >
            Submit
          </button>
        </form>
      </div>
    </FormControl.Provider>
  );
}

export default App;
