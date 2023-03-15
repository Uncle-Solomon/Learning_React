import { useState } from "react";

const FunctionalCounter = () => {
  const [counter, setCounter] = useState(0);
  const increment = () => {
    setCounter(counter + 1);
  };
  const decrement = () => {
    setCounter(counter - 1);
  };
  return (
    <div>
      <div>Counter Value: {counter}</div>
      <div>
        <button onClick={increment}>Increase</button>
        <button onClick={decrement}>Decrease</button>
      </div>
    </div>
  );
};

export default FunctionalCounter;
