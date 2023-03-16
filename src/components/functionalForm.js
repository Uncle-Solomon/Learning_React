import React, { useState } from "react";

const FunctionalForm = () => {
  const [name, setName] = useState("");
  const handleChange = (event) => {
    console.log(event);
    setName(event.target.value);
  };
  return (
    <div>
      <form>
        <input onChange={handleChange} type="text" value={name}></input>
      </form>
    </div>
  );
};

export default FunctionalForm;
