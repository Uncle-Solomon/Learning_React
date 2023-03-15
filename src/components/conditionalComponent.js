import { useState } from "react";
import Counter from "./counter";
import FunctionalCounter from "./functionalCounter";

const ConditionalComponent = () => {
  const [display, setDisplay] = useState(true);
  let output;
  const handleClick = () => {
    if (display == true) {
      setDisplay(false);
    } else {
      setDisplay(true);
    }
  };
  if (display) {
    output = (
      <div>
        <Counter />
        <button onClick={handleClick}>Click</button>
      </div>
    );
  } else {
    output = (
      <div>
        <FunctionalCounter />
        <button onClick={handleClick}>newClick</button>
      </div>
    );
  }
  return output;
};

export default ConditionalComponent;
