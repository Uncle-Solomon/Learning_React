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
  return display ? (
    <div>
      <Counter />
      <button onClick={handleClick}>Click</button>
    </div>
  ) : (
    <div>
      <FunctionalCounter />
      <button onClick={handleClick}>newClick</button>
    </div>
  );
};

export default ConditionalComponent;
