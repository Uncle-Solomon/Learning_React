import React from "react";

const header = {
  color: "blue",
  fontSize: "40px",
  textAlign: "center",
};
const InlineComponent = () => {
  return (
    <div>
      <h3 style={header}>This is an inline component</h3>
    </div>
  );
};

export default InlineComponent;
