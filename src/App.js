// import logo from "./logo.svg";
import "./App.css";
import ClassEvent from "./components/classEvent";
import Counter from "./components/counter";
import FunctionalCounter from "./components/functionalCounter";
import FunctionEvent from "./components/functionEvent";
import Hello from "./components/hello";
import Message from "./components/message";
import Profile from "./components/profile";
import Resume from "./components/resume";

function App() {
  return (
    <div className="App">
      {/* <Hello />
      <Message /> */}
      {/* <Profile name="Andrew" lastname="Ameh" />; */}
      <Profile name="Solomon" lastname="Akute" />
      {/* <Message messageContent="This is a message from props!!" /> */}

      <Counter />
      <FunctionalCounter />
      {/* <Resume name="Solomon" />

      <FunctionEvent />
      <ClassEvent /> */}
    </div>
  );
}

export default App;
