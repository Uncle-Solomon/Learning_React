const FunctionEvent = () => {
  const handleClick = () => {
    console.log("Works");
  };
  return (
    <div>
      <h1>This is a functional component!</h1>
      <h3>Functional Component</h3>
      <button onClick={handleClick}>Click Here</button>
    </div>
  );
};

export default FunctionEvent;
