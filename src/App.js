// import logo from "./logo.svg";
import "./App.css";
import Hello from "./components/hello";
import Message from "./components/message";
import Profile from "./components/profile";

function App() {
  return (
    <div className="App">
      <Hello />
      <Message />
      <Profile name="Andrew" lastname="Ameh" />
      <Profile name="Solomon" lastname="Akute" />
    </div>
  );
}

export default App;
