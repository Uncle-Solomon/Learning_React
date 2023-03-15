import { useState } from "react";
import Counter from "./counter";
import FunctionalCounter from "./functionalCounter";

const ConditionalComponent = () => {
  const [display, setDisplay] = useState(true);
  const handleClick = () => {
    if (display == true) {
      setDisplay(false);
    } else {
      setDisplay(true);
    }
  };
  if (display) {
    return (
      <div>
        <Counter />
        <button onClick={handleClick}>Click</button>
      </div>
    );
  } else {
    return (
      <div>
        <FunctionalCounter />
        <button onClick={handleClick}>Click</button>
      </div>
    );
  }
};

export default ConditionalComponent;
